import React from 'react';
import {Route, Routes} from "react-router-dom";
import Home from "./pages/Home/Home";
import Some from "./pages/Some/Some";
import Navigation from "./components/Navigation/Navigation";

function App() {
  return (
    <>
      <Navigation/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/some' element={<Some/>}/>
      </Routes>
    </>
  );
}

export default App;
