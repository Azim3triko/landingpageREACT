import React from "react";

//include images into your bundle

import { Jumbotron } from "./Jumbotron";
import { Navbar } from "./Navbar";
import { Cards } from "./Cards";
import { Footer } from "./Footer";

//create your first component

export const Home = () => {
	return (
		<React.Fragment>
			<Navbar />
			<Jumbotron />
			<Cards />
			<Footer />
		</React.Fragment>
	);
};
