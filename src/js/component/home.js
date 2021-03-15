import React from "react";
import { MiNavbar } from "./Navbar";
import { MiJumbotron } from "./Jumbotron";
import { MiCard } from "./Card";
import { MiFooter } from "./Footer";

export function Home() {
	return (
		<div>
			<MiNavbar />
			<MiJumbotron />
			<div className="container">
				<div className="row">
					<MiCard />
					<MiCard />
					<MiCard />
					<MiCard />
				</div>
			</div>
			<MiFooter />
		</div>
	);
}
