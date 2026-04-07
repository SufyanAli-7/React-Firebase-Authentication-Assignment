import { Button } from "antd"
import sound from "@/assets/faaah.mp3"
import { useRef } from "react"

const Hero = () => {
  const soundRef = useRef(null)

  const playSound = () => {
    if (soundRef.current) {
      soundRef.current.play()
    }
  }
  return (
    <main>
      <div className="container">
        <h1 className='text-center'>Welcome to Our Website</h1>
        <p className='text-center'>We are glad to have you here. Explore our content and enjoy your stay!</p>
        <Button type="primary" size="large" className="d-block mx-auto" onClick={playSound}>
          Get Started
        </Button>
        <audio ref={soundRef} src={sound} />
      </div>
    </main>
  )
}

export default Hero