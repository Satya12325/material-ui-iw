import "./styles.css";
import { Container } from "@mui/material";
import GridItem from "./Grid/Grid";
import Element from "./Components/Element";

import { useState } from "react";
import ButtonAppBar from "./AppBar/Navbar";

export default function App() {
  // const classes = useStyles();
  const [auth, setAuth] = useState(false);
  const handleToggle = () => {
    setAuth(!auth);
  };

  if (auth) {
    return (
      <Container maxWidth="xl">
        <ButtonAppBar handleToggle={handleToggle} auth={auth} />
        <h1>React with Material UI</h1>
        <GridItem />
        <Element />
      </Container>
    );
  }

  return <ButtonAppBar handleToggle={handleToggle} auth={auth} />;
}
