import Header from "./componenets/Header";
import Cards from "./componenets/Cards";
import AddMovie from "./componenets/AddMovie";
import { Route, Routes, } from "react-router-dom";
import Detail from "./componenets/Detail";
import Login from "./componenets/Login";
import Signup from "./componenets/Signup";
import { createContext, useState } from "react";

 const Appstate = createContext();

function App() {

  const [login, setLogin] = useState(false);
  const [userName, setUserName] = useState("");
  return (
    <Appstate.Provider value={{login, userName, setLogin, setUserName}}>
    <div className="relative">

      <Header />
      <Routes>
        <Route path="/" element={<Cards />} />
        <Route path="/addmovie" element={<AddMovie />} />
        <Route path ="/detail/:id" element={<Detail />} />
        <Route path ="/login" element = {<Login />} />
        <Route path ="/signup" element = {<Signup />} />

      </Routes>
    </div>
    </Appstate.Provider>
  );
}

export default App;
export {Appstate};
