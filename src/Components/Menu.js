import {NavLink} from "react-router-dom";
import "./Menu.css"

export const Menu = () => {

  return <header>
    <nav>
      <ul>
        <li>
          <NavLink exact activeClassName="active" to={"/"}>Home</NavLink>
        </li>
        <li>
          <NavLink activeClassName="active" to={"/about"}>About</NavLink>
        </li>
        <li>
          <NavLink activeClassName="active" to={"/works"}>Works</NavLink>
        </li>
        <li>
          <NavLink activeClassName="active" to={"/contact"}>Contact</NavLink>
        </li>
      </ul>
    </nav>
  </header>;
}

export default Menu;