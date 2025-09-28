import { Grid, GridItem, Show } from "@chakra-ui/react";
import "./App.css";
import { NavBar } from "./components/NavBar";
import MovieGrid from "./components/MovieGrid";

function App() {
  return (
    <Grid
      templateAreas={{ base: `"nav" "main"`, lg: `"nav nav" "aside main"` }}
      templateColumns={{ base: "1fr", lg: "200px 1fr" }}
    >
      <GridItem pl="2" area={"nav"}>
        <NavBar />
      </GridItem>
      <Show above="lg">
        <GridItem pl="2" area={"aside"}>
        </GridItem>
      </Show>
      <GridItem pl="2" area={"main"}>
        <MovieGrid/>
      </GridItem>
    </Grid>
  );
}

export default App;