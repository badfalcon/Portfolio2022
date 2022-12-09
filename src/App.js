import Menu from './Components/Menu'
import {Routes, Route, HashRouter} from "react-router-dom";
import About from "./Pages/About";
import Home from "./Pages/Home";
import Works from "./Pages/Works";
import Contact from "./Pages/Contact";
import Page404 from "./Pages/Page404";
import { Suspense } from 'react';
import {Box, Container} from "@mui/material";
import Footer from "./Components/Footer";
import "./App.css"

function App() {
  return (
      <Container className="App" sx={{pb:10}}>
        <HashRouter basename={process.env.PUBLIC_URL}>
          <Menu/>
          <Box sx={{py:10}}>
            <Routes>
              <Route index element={<Home/>}/>
              <Route path={"/about"} element={<About/>}/>
              <Route path={"/works"} element={<Works/>}/>
              <Route path={"/contact"} element={<Contact/>}/>
              <Route path={"/*"} element={<Page404/>}/>
            </Routes>
          </Box>
          <Footer/>
        </HashRouter>
      </Container>);
}

export default function WrappedApp() {
  return (
      <Suspense fallback={"...is loading"}>
        <App />
      </Suspense>
  );
}
