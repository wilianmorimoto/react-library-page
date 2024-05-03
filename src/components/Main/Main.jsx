import React from "react";
import Filters from "./Filters";
import News from "./News";
import Featured from "./Featured";

const Main = () => {
	return (
		<main
			id="main"
			className="pt-20 p-4 flex flex-col gap-8 items-start max-w-7xl mx-auto"
		>
			<Filters />
			<section id="main-content">
				<News />
				<Featured />
			</section>
		</main>
	);
};

export default Main;
