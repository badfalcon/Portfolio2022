import './App.css';
import Menu from './Components/Menu'
import {BrowserRouter, Routes, Route} from "react-router-dom";
import About from "./Pages/About";
import Home from "./Pages/Home";
import Works from "./Pages/Works";
import Contact from "./Pages/Contact";
import Page404 from "./Pages/Page404";
import { Suspense } from 'react';
import { useTranslation } from 'react-i18next';
import {Box, Container} from "@mui/material";
import Footer from "./Components/Footer";

function App() {
  // todo check why do I need this?
  // eslint-disable-next-line
  const { i18n } = useTranslation();

  return (
      <Container className="App" sx={{pb:10}}>
        <BrowserRouter>
          <Menu/>
          <Box sx={{py:10}}>
            <Routes>
              <Route path={"/"} element={<Home/>}/>
              <Route path={"/about"} element={<About/>}/>
              <Route path={"/works"} element={<Works/>}/>
              <Route path={"/contact"} element={<Contact/>}/>
              <Route path={"/*/"} element={<Page404/>}/>
            </Routes>
          </Box>
          <Footer/>
        </BrowserRouter>
      </Container>);
}

export default function WrappedApp() {
  return (
      <Suspense fallback={"...is loading"}>
        <App />
      </Suspense>
  );
}
