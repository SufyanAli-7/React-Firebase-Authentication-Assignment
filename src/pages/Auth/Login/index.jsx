import { auth } from '@/config/firebase'
import { useAuth } from '@/context/Auth'
import { Button, Form, Input, Typography } from 'antd'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { useState } from 'react'
import { Link } from 'react-router-dom'

const { Title, Paragraph } = Typography
const { Item } = Form

const initialState = { email: '', password: '' }

const Login = () => {

  const { dispatch } = useAuth()

  const [state, setState] = useState(initialState)
  const [isProcessing, setIsProcessing] = useState(false)

  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value })
  }

  const handleLogin = () => {

    let { email, password } = state
    if (!email || !password) {
      window.toastify('Please enter your email and password', 'error')
      return
    }
    setIsProcessing(true)
    signInWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        const { uid, email } = user
        dispatch({ type: 'SET_LOGIN', payload: { uid, email } })
        window.toastify("Login Successful", 'success')
      })
      .catch((error) => {
        const errorCode = error.code;
        if (errorCode === 'auth/invalid-credential') {
          window.toastify('Invalid email or password', 'error')
        } else {
          window.toastify('Something went wrong', 'error')
        }
      })
      .finally(() => {
        setIsProcessing(false)
      });
  }

  return (
    <main className='auth'>
      <div className="container">
        <div className="card p-4 mx-auto shadow">
          <Title level={1} className='text-center'>Login</Title>
          <Paragraph className='text-center'>Don't have an account? <Link className='text-decoration-none' to="/auth/register">Register</Link></Paragraph>
          <Form layout='vertical'>
            <Item label="Email" required>
              <Input type="email" size='large' placeholder='Enter your email' name='email' onChange={handleChange} />
            </Item>
            <Item label="Password" required>
              <Input.Password type="password" size='large' placeholder='Enter your password' name='password' onChange={handleChange} />
            </Item>
            <Paragraph>Forgot Password? <Link className='text-decoration-none' to="/auth/forgot-password">Reset Password</Link></Paragraph>
            <Button type='primary' size='large' htmlType='submit' block loading={isProcessing} onClick={handleLogin}>
              Login
            </Button>
          </Form>
        </div>
      </div>
    </main>
  )
}

export default Login