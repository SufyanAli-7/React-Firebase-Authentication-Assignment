import { auth } from '@/config/firebase'
import { Button, Form, Input, Typography } from 'antd'
import { sendPasswordResetEmail } from 'firebase/auth'
import { useState } from 'react'
import { Link } from 'react-router-dom'

const { Title, Paragraph } = Typography
const { Item } = Form
 
const initialState = { email: '' }

const ForgotPassword = () => {

  const [state, setState] = useState(initialState)
  const [isProcessing, setIsProcessing] = useState(false)


  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value })
  }

  const handleForgotPassword = () => {

    let { email } = state
    if (!email) {
      window.toastify('Please enter your email', 'error')
      return
    }

    setIsProcessing(true)

    sendPasswordResetEmail(auth, email, { url: import.meta.env.VITE_CONTINUE_URL })
      .then(() => {
        window.toastify('Password reset email sent successfully', 'success')
      })
      .catch((error) => {
        const errorCode = error.code;
        if (errorCode === 'auth/user-not-found') {
          window.toastify('User not found', 'error')
        } else {
          console.log(error)
          window.toastify('Something went wrong', 'error')
        }
      }).finally(() => {
        setIsProcessing(false)
      })
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
                      Sent Email
                  </Button>
              </Form>
        </div>
      </div>
    </main>
  )
}

export default ForgotPassword