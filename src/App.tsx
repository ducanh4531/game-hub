import { Grid, GridItem, Show } from "@chakra-ui/react";

import NavBar from "./components/NavBar";

function App() {
	return (
		<Grid
			// templateAreas to define the layout of grid
			templateAreas={{
				base: `'nav' 'main'`,
				lg: `'nav nav' 'aside main'`, // screens are wider than 1024px
			}}
		>
			<GridItem area={"nav"}>
				<NavBar />
			</GridItem>
			<Show above="lg">
				<GridItem bg="yellow" area={"aside"}>
					Aside
				</GridItem>
			</Show>
			<GridItem bg="green" area={"main"}>
				Main
			</GridItem>
		</Grid>
	);
}

export default App;
