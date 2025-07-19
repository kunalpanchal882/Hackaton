import axios from "./api/axiosconfig"
import { useEffect } from "react";

const App = () => {

  const getprodutt = async() => {
    try {
      const res = await axios.get("/products")
      console.log(res);
      
    } catch (error) {
      console.log(error);
      
    }
  }

  useEffect(() => {
    getprodutt()
  })

  return (
    <div>App</div>
  )
}

export default App