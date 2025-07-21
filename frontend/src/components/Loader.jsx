import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

const Loader = () => {
  const [count, setCount] = useState(0)
  const navigate = useNavigate()

  useEffect(() => {
    if (count < 100) {
      const interval = setInterval(() => {
        setCount((prev) => prev + 1)
      }, 20) // speed of count

      return () => clearInterval(interval)
    } else {
      setTimeout(() => {
        navigate("/home")
      }, 500) // small delay after 100
    }
  }, [count, navigate])

  return (
    <div className="fixed inset-0 bg-black flex items-center justify-center z-50">
      <h1 className="text-white text-5xl font-bold tracking-widest">
        {count}%
      </h1>
    </div>
  )
}

export default Loader
