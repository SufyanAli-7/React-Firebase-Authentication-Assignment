import { Button } from "antd"
import sound from "@/assets/faaah.mp3"
import { useRef } from "react"
import { Link } from "react-router-dom"

const Hero = () => {
  const soundRef = useRef(null)
  const user = JSON.parse(localStorage.getItem('user'))

  const playSound = () => {
    if (soundRef.current) {
      soundRef.current.play()
    }
  }
  return (
    <main>
      <div className="container">
        <h1 className='text-center mt-5'>Welcome to <span className="text-danger">'{user?.fullName || 'Our Website'}'</span></h1>
        <h1 className="text-center">{user?.email}</h1>
        <p className='text-center'>We are glad to have you here. Explore our content and enjoy your stay!👇</p>
        <Button type="primary" size="large" className="d-block mx-auto" onClick={playSound}>
          <Link className="text-decoration-none" to="https://github.com/SufyanAli-7/React-Basic-Setup-Routing-Assignment" target="_blank" rel="noopener noreferrer">
            Get Source Code
          </Link>
        </Button>

        <audio ref={soundRef} src={sound} />
      </div>
    </main>
  )
}

export default Hero