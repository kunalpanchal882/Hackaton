import { useEffect } from "react";
import { asyncgetuser } from "./store/UserAction";
import { useDispatch, useSelector } from "react-redux";
import Mainrouter from "./routes/Mainrouter";

const App = () => {
  const dispatch = useDispatch();
  const data =  useSelector((state) => state)
  console.log(data);
  useEffect(() => {
    dispatch(asyncgetuser());
  }, [dispatch]);

  return <div className="min-h-screen overflow-auto">
    <Mainrouter/>
    </div>;
};

export default App;
