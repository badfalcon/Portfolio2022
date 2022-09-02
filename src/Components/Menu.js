import {matchPath, NavLink, useLocation} from "react-router-dom";
import "./Menu.css"
import {Tab, Tabs} from "@mui/material";


export const useRouteMatch = (patterns) => {
  const { pathname } = useLocation();

  for (let i = 0; i < patterns.length; i += 1) {
    const pattern = patterns[i];
    const possibleMatch = matchPath(pattern, pathname);
    if (possibleMatch !== null) {
      return possibleMatch;
    }
  }

  return null;
}

export const Menu = () => {
  const routeMatch = useRouteMatch(['/', '/about', '/works', '/contact']);
  const currentTab = routeMatch?.pattern?.path;
  return <header>
    <nav>
      <Tabs value={currentTab} aria-label="nav tabs" centered>
        <Tab label="Home" value="/" to={"/"} component={NavLink} />
        <Tab label="About" value="/about"  to={"/about"} component={NavLink} />
        <Tab label="Works" value="/works"  to={"/works"} component={NavLink} />
        <Tab label="Contact" value="/contact"  to={"/contact"} component={NavLink} />
      </Tabs>
    </nav>
  </header>;
}

export default Menu;