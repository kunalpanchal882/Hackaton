
import Mainrouter from "./routes/Mainrouter";
import { useEffect, useState } from "react";
import { asyncurrentuser } from "./store/actions/userAction";
import { useDispatch } from "react-redux";
import { asynloadproduct } from "./store/actions/productAction";
const App = () => {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(asyncurrentuser())
    dispatch(asynloadproduct())
  },[dispatch])
  

  return <div className="min-h-screen overflow-auto">
    <Mainrouter/>
    </div>;
};

export default App;
