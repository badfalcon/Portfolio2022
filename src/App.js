import logo from './logo.svg';
import './App.css';
import Menu from './Components/Menu'
import {BrowserRouter, Routes, Route} from "react-router-dom";
import About from "./Pages/About";
import Top from "./Pages/Top";
import Works from "./Pages/Works";
import Contact from "./Pages/Contact";
import Page404 from "./Pages/Page404";

function App() {
  return (
      <div className="App">
        <BrowserRouter>
          <Menu/>
          <Routes>
            <Route path={"/"} element={<Top />} />
            <Route path={"/about"} element={<About />} />
            <Route path={"/works"} element={<Works />} />
            <Route path={"/contact"} element={<Contact />} />
            <Route path={"/*/"} element={<Page404 />} />
          </Routes>
          <img src={logo} className="App-logo" alt="logo"/>
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
          >
            Learn React
          </a>
        </BrowserRouter>
      </div>);
}

export default App;
