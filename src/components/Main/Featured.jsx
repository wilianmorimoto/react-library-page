import React from "react";
import HeaderMainContent from './HeaderMainContent'
import FeaturedCard from "./FeaturedCard";

const Featured = () => {
	return (
		<div id="featured" className="py-28">
			<HeaderMainContent
				title="Featured Collections"
				description="Handpicked and curated collections around accessibility."
				name="featured"
			/>
			<div className="featured-cards flex justify-between flex-wrap gap-6 mt-6">
				<FeaturedCard
					src="https://res.cloudinary.com/stark-lab/image/upload/v1653845742/library_collection_Collection_Boundless_Disability_Employment_c297d236d9.png"
					title="Disability Employment"
				/>
				<FeaturedCard
					src="https://res.cloudinary.com/stark-lab/image/upload/v1653845743/library_collection_making_accessible_color_combos_42c8d90a99.png"
					title="Making Accessible Color Combos"
				/>
				<FeaturedCard
					src="https://res.cloudinary.com/stark-lab/image/upload/v1653845743/library_collection_Inclusive_Social_Media_b9669e6d39.png"
					title="Tips and Tricks for Inclusive Social Media"
				/>
			</div>
		</div>
	);
};

export default Featured;
