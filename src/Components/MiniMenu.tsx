import {
  Box,
  FormControl, MenuItem,
  Select, SelectChangeEvent
} from "@mui/material";
import {matchPath, useLocation, useNavigate} from "react-router-dom";
import Language from "./Language";
import {useState} from "react";

export const useRouteMatch = (patterns: string[]) => {
  const {pathname} = useLocation();

  for (let i = 0; i < patterns.length; i += 1) {
    const pattern = patterns[i];
    const possibleMatch = matchPath(pattern, pathname);
    if (possibleMatch !== null) {
      return possibleMatch;
    }
  }

  return null;
}

export const MiniMenu = () => {
  const routeMatch = useRouteMatch(['/', '/about', '/works', '/contact', '/privacy']);
  const currentTab = routeMatch?.pattern?.path ?? '';
  const navigate = useNavigate();

  const [loc, setLoc] = useState(currentTab);
  const [open, setOpen] = useState(false);

  const handleChange = (event: SelectChangeEvent) => {
    let value = event.target.value;
    navigate(value);
    setLoc(value);
  }

  const handleClose = () => {
    setOpen(false);
  }

  const handleOpen = () => {
    setOpen(true);
  }
  return <nav>
    <Box sx={{display: 'flex', alignItems: 'center'}}>
      <Box sx={{flexGrow: 1, display: 'flex', justifyContent: 'center'}}>
        <FormControl variant="standard">
          <Select
              id="location_select"
              value={loc}
              label="Location"
              open={open}
              onClose={handleClose}
              onOpen={handleOpen}
              onChange={handleChange}
          >
            <MenuItem value="/">Home</MenuItem>
            <MenuItem value="/about">About</MenuItem>
            <MenuItem value="/works">Works</MenuItem>
            <MenuItem value="/contact">Contact</MenuItem>
            <MenuItem value="/privacy">Privacy</MenuItem>
          </Select>
        </FormControl>
      </Box>
      <Box>
        <Language/>
      </Box>
    </Box>
  </nav>
}

export default MiniMenu;