import React from 'react'
import ViewAllLink from './ViewAllLink';

const HeaderMainContent = ({title, description, name}) => {
  return (
		<div className={`${name}-header flex items-center justify-between gap-4`}>
			<div className="news-text">
				<h1 className="font-black">{title}</h1>
				<p className="text-xl">
					{description}
				</p>
			</div>
			<ViewAllLink />
		</div>
	);
}

export default HeaderMainContent