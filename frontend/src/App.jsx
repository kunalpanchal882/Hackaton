import { useEffect } from "react";
import { asyncgetuser } from "./store/UserAction";
import { useDispatch, useSelector } from "react-redux";
const App = () => {
  const dispatch = useDispatch();
  const data =  useSelector((state) => state)

  console.log(data);
  

  useEffect(() => {
    dispatch(asyncgetuser());
  }, [dispatch]);

  return <div>App</div>;
};

export default App;
