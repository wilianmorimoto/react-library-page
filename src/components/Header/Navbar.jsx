import React from "react";

const Navbar = () => {
	return (
		<div id="navbar" className="bg-[var(--header-color)] flex flex-col px-4 py-8 h-full w-full fixed top-12 z-20">
			<a href="">LOG IN</a>
			<p className="pt-6">USE CASES</p>
			<div className="nav-submenu flex flex-col px-4 mx-4 gap-2 border-l-2">
				<a href="">For Designers</a>
				<a href="">For Developers</a>
				<a href="">For Product Managers</a>
				<a href="">For Compliance Managers</a>
			</div>
			<a href="">PRICING</a>
			<a href="">SUPPORT</a>
			<a href="">BLOG</a>
			<a href="">LIBRARY</a>
			<a href="">THE WCAG EXPLAINED</a>
			<a href="">COMMUNITY</a>
		</div>
	);
};

export default Navbar;
