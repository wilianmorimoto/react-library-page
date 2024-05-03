import React from 'react'
import Card from './Card';
import ViewAllLink from './ViewAllLink';
import HeaderMainContent from './HeaderMainContent';

const News = () => {
  return (
		<div id="news">
			<HeaderMainContent
				title="New in the Library"
				description="Newly added accessibility resources, guides, and more."
				name='news'
			/>
			<div className="cards flex flex-col gap-6 pt-6 justify-between">
				<Card
					src="https://res.cloudinary.com/stark-lab/image/upload/v1679345547/daisy_high_e2e14faca3.jpg"
					type="RESOURCES"
					title="Inclusive Publishing"
				/>
				<Card
					src="https://res.cloudinary.com/stark-lab/image/upload/v1679345933/Screenshot_2023_03_20_at_3_58_45_PM_b615f86e7e.png"
					type="RESOURCES"
					title="The APLN (Accessible Publishing Learning Network)"
				/>
				<Card
					src="https://res.cloudinary.com/stark-lab/image/upload/v1679345736/uni_profile_93228_9c84b19231.jpg"
					type="RESOURCES"
					title="Making Accessible Books"
				/>
				<Card
					src="https://res.cloudinary.com/stark-lab/image/upload/v1679345547/daisy_high_e2e14faca3.jpg"
					type="RESOURCES"
					title="The DAISY Consortium's Accessible Publishing Knowledge Base"
				/>
				<Card
					src="https://res.cloudinary.com/stark-lab/image/upload/v1658845042/language_please_logo_d4b822280f.png"
					type="RESOURCES"
					title="Language, Please: Style Guide & Resources for journalists and storytellers"
				/>
				<Card
					src="https://res.cloudinary.com/stark-lab/image/upload/v1653070254/library_author_google_7723cb132a.png"
					type="BLOGS & ARTICLES"
					title="4 steps to more inclusive, precise language"
				/>
			</div>
		</div>
	);
}

export default News