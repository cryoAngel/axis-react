import React, {useRef} from "react";
import { BrowserRouter, Route, Routes, HashRouter } from "react-router-dom";
import Head from "./body-components/Head";
import Middle from "./body-components/Middle";
import Header from "./Header";


const Root = () =>{
 
  return (
      <HashRouter>
        <Routes>
            <Route exact={true} element={<Header />}></Route>
        </Routes>
      </HashRouter>
  )
}

export default Root