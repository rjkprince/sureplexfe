import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import People from "./containers/People";
import Friends from "./containers/Friends";

export default function App() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Router>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Sureplex
            </Typography>
            <Link to="/" className="Link">
              <Button color="inherit">People</Button>
            </Link>
            <Link to="/friends" className="Link">
              <Button color="inherit">Friends</Button>
            </Link>
          </Toolbar>
        </AppBar>
        <Switch>
          <Route exact path="/">
            <People />
          </Route>
          <Route exact path="/friends">
            <Friends />
          </Route>
        </Switch>
      </Router>
    </Box>
  );
}
