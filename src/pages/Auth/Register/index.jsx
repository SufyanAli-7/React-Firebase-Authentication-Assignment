import { auth } from '@/config/firebase'
import { Button, Form, Input, Typography } from 'antd'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { useState } from 'react'
import { Link } from 'react-router-dom'

const { Title, Paragraph } = Typography
const { Item } = Form
 
const initialState = { fullName: '', email: '', password: '', confirmPassword: '' }

const Register = () => {

  const [state, setState] = useState(initialState)
  const [isProcessing, setIsProcessing] = useState(false)

  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value })
  }

  const handleRegister = () => {

    let { fullName, email, password, confirmPassword } = state
    fullName = fullName.trim()
    if (fullName.length < 3) {
      window.toastify('Full name must be at least 3 characters long', 'error')
      return
    }
    if (!window.isEmailVaild(email)) {
      window.toastify('Please enter a valid email address', 'error')
      return
    }
    if (password.length < 6) {
      window.toastify('Password must be at least 6 characters long', 'error')
      return
    }
    if (password !== confirmPassword) {
      window.toastify('Passwords do not match', 'error')
      return
    }

    setIsProcessing(true)
     
    createUserWithEmailAndPassword(auth, email, password)
  .then(() => {
     window.toastify('User registered successfully', 'success')     
  })
  .catch((error) => {    
    const errorCode = error.code;
    if (errorCode === 'auth/email-already-in-use') {
      window.toastify('Email already in use', 'error')
    }     
    else {
      window.toastify('Something went wrong', 'error')
    }

  }).finally(() => {
    setIsProcessing(false)
  }); 
    
  }

  return (
    <main className='auth'>
      <div className="container">
        <div className="card p-4 mx-auto shadow">
              <Title level={1} className='text-center'>Register</Title>
              <Paragraph className='text-center'>Already have an account? <Link className='text-decoration-none' to="/auth/login">Login</Link></Paragraph>
              <Form layout='vertical'>
                  <Item label="Full Name" required>
                      <Input type="text" size='large' placeholder='Enter your full name' name='fullName' onChange={handleChange} />
                  </Item>
                  <Item label="Email" required>
                      <Input type="email" size='large' placeholder='Enter your email' name='email' onChange={handleChange} />
                  </Item>
                  <Item label="Password" required>
                      <Input.Password type="password" size='large' placeholder='Enter your password' name='password' onChange={handleChange} />
                  </Item>
                  <Item label="Confirm Password" required>
                      <Input.Password type="password" size='large' placeholder='Confirm your password' name='confirmPassword' onChange={handleChange} />
                  </Item>
                  <Button type='primary' size='large' htmlType='submit' block loading={isProcessing} onClick={handleRegister}>
                      Register
                  </Button>
              </Form>
        </div>
      </div>
    </main>
  )
}

export default Register