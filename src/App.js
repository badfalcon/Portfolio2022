import './App.css';
import Menu from './Components/Menu'
import {BrowserRouter, Routes, Route} from "react-router-dom";
import About from "./Pages/About";
import Home from "./Pages/Home";
import Works from "./Pages/Works";
import Contact from "./Pages/Contact";
import Page404 from "./Pages/Page404";
import Language from "./Components/Language";
import { Suspense } from 'react';
import { useTranslation } from 'react-i18next';

function App() {
  const { i18n } = useTranslation();

  return (
      <div className="App">
        <BrowserRouter>
          <Menu/>
          <Routes>
            <Route path={"/"} element={<Home/>}/>
            <Route path={"/about"} element={<About/>}/>
            <Route path={"/works"} element={<Works/>}/>
            <Route path={"/contact"} element={<Contact/>}/>
            <Route path={"/*/"} element={<Page404/>}/>
          </Routes>
          <Language/>
        </BrowserRouter>
      </div>);
}

export default function WrappedApp() {
  return (
      <Suspense fallback={"...is loading"}>
        <App />
      </Suspense>
  );
}
