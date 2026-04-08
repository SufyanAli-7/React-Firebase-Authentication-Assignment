import { useAuth } from '@/context/Auth'
import { Button, Form, Input, Typography } from 'antd'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const { Title, Paragraph } = Typography
const { Item } = Form
 
const initialState = { email: '' }

const ForgotPassword = () => {

  const { dispatch } = useAuth()

  const [state, setState] = useState(initialState)
  const [isProcessing, setIsProcessing] = useState(false)
  const navigate = useNavigate()

  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value })
  }

  const handleForgotPassword = () => {

    let { email } = state
    if (!email) {
      window.toastify('Please enter your email', 'error')
      return
    }
    const users = JSON.parse(localStorage.getItem('users') || '[]')    
    setIsProcessing(true)
    let user = users.find(u => u.email === email)
    if (!user) {
      setIsProcessing(false)
      window.toastify('Email not found', 'error')
      return
    }

    setTimeout(() => {
      localStorage.setItem('user', JSON.stringify(user))
      dispatch({ isAuth: true, user: user })
      setIsProcessing(false)
      window.toastify('Password recovery successful', 'success')
      navigate('/')
    }, 2000)
  }

  return (
    <main className='auth'>
      <div className="container">
        <div className="card p-4 mx-auto shadow">
              <Title level={1} className='text-center mb-4'>Forgot Password</Title>
              <Form layout='vertical'>
                  <Item label="Email" required>
                      <Input type="email" size='large' placeholder='Enter your email' name='email' onChange={handleChange} />
                  </Item>
                  <Paragraph>Remember Password? <Link className='text-decoration-none' to="/auth/login">Login</Link></Paragraph>
                  <Button type='primary' size='large' htmlType='submit' block loading={isProcessing} onClick={handleForgotPassword}>
                      Forgot Password
                  </Button>
              </Form>
        </div>
      </div>
    </main>
  )
}

export default ForgotPassword