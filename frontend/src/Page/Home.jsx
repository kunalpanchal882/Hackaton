import Navbar from "../components/Navbar"
import Showbottle from "../components/Showbottle"
import About from "./About"
import ScrollingText from "../components/ScrollingText"
import Menu from "../components/Menu"
import Login from "./Login"
import Product from "./Product"
import SplashCursor from '../components/SplashCursor'
import Bottom from "../components/Bottom"

const Home = () => {


  return (
    <div className="relative m-[1rem] w-auto h-auto">
      <Menu />
      <Navbar/>
      <Showbottle/>
      <About/>
      <ScrollingText/>
      <Product/>
      <SplashCursor />
      <Bottom/>
    </div>
  )
}

export default Home