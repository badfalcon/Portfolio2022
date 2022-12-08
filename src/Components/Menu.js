import {matchPath, NavLink, useLocation} from "react-router-dom";
import {Box, Tab, Tabs} from "@mui/material";
import Language from "./Language";
import MiniMenu from "./MiniMenu";


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
  const currentTab = routeMatch?.pattern?.path ?? false;
  return <header>
    <Box sx={{ display: { xs:'none', sm: 'block'} }}>
      <nav>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Box sx={{ flexGrow: 1}}>
            <Tabs value={currentTab} aria-label="nav tabs" centered >
              <Tab label="Home" value="/" to={"/"} component={NavLink} />
              <Tab label="About" value="/about"  to={"/about"} component={NavLink} />
              <Tab label="Works" value="/works"  to={"/works"} component={NavLink} />
              <Tab label="Contact" value="/contact"  to={"/contact"} component={NavLink} />
            </Tabs>
          </Box>
          <Box>
            <Language />
          </Box>
        </Box>
      </nav>
    </Box>
    <Box sx={{ display: { xs:'block', sm: 'none'} }}>
      <MiniMenu />
    </Box>
  </header>;
}

export default Menu;