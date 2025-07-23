import Navbar from "../components/Navbar"
import Showbottle from "../components/Showbottle"
import About from "./About"
import ScrollingText from "../components/ScrollingText"
import Menu from "../components/Menu"
import Login from "./Login"

const Home = () => {


  return (
    <div className="relative m-[1rem] w-auto h-auto">
      <Menu />
      <Navbar />
      <Showbottle/>
      <About/>
      <ScrollingText/>
    </div>
  )
}

export default Home