import Navbar from "../components/Navbar"
import Showbottle from "../components/Showbottle"
import About from "./About"
const Home = () => {

  return (
    <div className="m-[1rem] w-auto">
      <Navbar />
      <Showbottle/>
      <About/>
    </div>
  )
}

export default Home