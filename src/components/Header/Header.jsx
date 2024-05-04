import React, { useEffect, useState } from "react";
import { IoIosMenu } from "react-icons/io";
import { IoClose } from "react-icons/io5";
import { TiArrowSortedDown } from "react-icons/ti";

const Header = ({ openNav, setOpenNav, closeSubmenus }) => {
	const [casesMenu, setCasesMenu] = useState(false);
	const [resourcesMenu, setResourcesMenu] = useState(false);
	const [containerMenus, setContainerMenus] = useState("");

	useEffect(() => {
		if (casesMenu) {
			setContainerMenus("cases");
		} else if (resourcesMenu) {
			setContainerMenus("resources");
		} else {
			setContainerMenus("");
		}
	}, [casesMenu, resourcesMenu]);

	return (
		<div className="container-header bg-[var(--header-color)] fixed top-0 left-0 w-full z-20 shadow-md">
			<header className="p-4 flex justify-between items-center max-w-7xl mx-auto">
				<div className="menu flex gap-6 items-center">
					<div className="logo">
						<a href="#">
							<svg
								width="32"
								height="32"
								viewBox="0 0 32 32"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
								aria-label="Home"
								className="text-[var(--blue)]"
							>
								<path
									fill-rule="evenodd"
									clip-rule="evenodd"
									d="M16 32C24.8366 32 32 24.8366 32 16C32 7.16344 24.8366 0 16 0C7.16344 0 0 7.16344 0 16C0 24.8366 7.16344 32 16 32ZM15.4225 22.7124V25.607C18.1716 25.7753 20.8606 24.7551 22.806 22.8056C26.5647 19.0469 26.5647 12.9531 22.806 9.19477C22.4644 8.85297 22.0977 8.53716 21.709 8.25L19.6336 10.3252L10.3245 19.6332C8.61894 16.9674 8.99804 13.4741 11.2358 11.2362C12.6405 9.8287 14.5963 9.11525 16.5775 9.28762V6.39295C13.8284 6.22472 11.1394 7.24504 9.19403 9.19458C5.43532 12.9532 5.43532 19.047 9.19403 22.8054C9.53564 23.1472 9.90231 23.463 10.291 23.7501L12.3663 21.675L21.6754 12.3668C23.381 15.0325 23.0019 18.5259 20.7641 20.7638C19.3594 22.1713 17.4036 22.8847 15.4225 22.7124Z"
									fill="currentColor"
								></path>
							</svg>
						</a>
					</div>
					<nav id="header-nav" className="text-[var(--blue)]">
						<ul className="flex gap-8 relative">
							<div
								className={`${containerMenus === "" ? "h-0" : ""} ${containerMenus === "cases" ? "h-48" : ""} ${
									containerMenus === "resources" ? "h-80" : ""
								} container-menu duration-500 absolute top-10 bg-white z-20 rounded-lg shadow-xl`}
							></div>

							<li className="flex items-center">
								<a
									onClick={() => {
										setCasesMenu(!casesMenu);
										setResourcesMenu(false);
									}}
									id="use-cases"
									className="cursor-pointer text-sm flex items-center gap-1"
								>
									USE CASES
									<TiArrowSortedDown />
								</a>
							</li>
							<ul
								id="usecases-menu"
								className={`${
									!casesMenu
										? "max-h-0 invisible opacity-0"
										: "max-h-48 opacity-100"
								} absolute z-30 top-10 duration-500 grid grid-cols-3 p-2 gap-2 overflow-hidden`}
							>
								<li>
									<h3>Designers</h3>
									<p>
										Create accessible designs in record time right in Figma &
										Sketch.
									</p>
								</li>
								<li>
									<h3>Developers</h3>
									<p>
										Test and audit your code from early implementation to live
										product.
									</p>
								</li>
								<li>
									<h3>Product Managers</h3>
									<p>
										Manage accessibility in real-time across all your projects.
									</p>
								</li>
								<li>
									<h3>Compliance Managers</h3>
									<p>
										Monitor, manage and audit your accessibility posture in one
										place.
									</p>
								</li>
								<li className="read-white-paper bg-[var(--bg-purple-color)] border rounded-lg p-2 border-[#f2dbfa] col-start-3 col-end-3 row-start-1 row-end-3 flex flex-col">
									<img
										src="https://images.getstark.co/marketing/accessibility-posture-white-paper/white-paper-callout.png?updatedAt=1709743608630"
										alt="Book"
										className="w-20 mx-auto"
									/>
									<h3>Read our new white paper</h3>
									<p>
										Managing a modern accessibility posture and growing
										accessibility maturity at any scale.
									</p>
								</li>
							</ul>
							<li className="flex items-center">
								<a href="#" className="text-sm">
									PRICING
								</a>
							</li>
							<li className="flex items-center">
								<a href="#" className="text-sm">
									SUPPORT
								</a>
							</li>
							<li className="flex items-center">
								<a
									onClick={() => {
										setResourcesMenu(!resourcesMenu);
										setCasesMenu(false);
									}}
									id="resources"
									className="text-sm flex items-center gap-1 cursor-pointer"
								>
									RESOURCES
									<TiArrowSortedDown />
								</a>
							</li>
							<ul
								id="resources-menu"
								className={`${
									!resourcesMenu
										? "max-h-0 invisible opacity-0"
										: "max-h-80 opacity-100"
								} absolute z-30 top-10  duration-500  grid grid-cols-3 p-2 gap-2 overflow-hidden`}
							>
								<li className="bg-[var(--bg-purple-color)] border rounded-lg  border-[#f2dbfa] col-start-1 col-end-1 row-start-1 row-end-4 flex flex-col">
									<img
										src="https://res.cloudinary.com/stark-lab/image/upload/v1711412084/medium_Header_60a6fb72ce.png"
										alt=""
										className="rounded-lg object-cover h-1/2"
									/>
									<h3 className="px-2 pt-2 text-[var(--filters-color)]">
										Introducing Sidekick V2 and Stark Premium to boost your
										design and development workflow
									</h3>
									<a
										className="link-resources text-[var(--blue)] underline"
										href="#"
									>
										Read more on the blog
									</a>
								</li>
								<li>
									<h3>Blog</h3>
									<p>
										Read about the latest updates to Stark and articles from our
										team.
									</p>
								</li>
								<li>
									<h3>Library</h3>
									<p>
										Learn about all things accessibility and inclusive design.
									</p>
								</li>
								<li>
									<h3>The WCAG Explained</h3>
									<p>Simple explanations of every WCAG criteria.</p>
								</li>
								<li>
									<h3>Support Center</h3>
									<p>
										Find answers to your questions plus tips and tricks on how
										to use Stark.
									</p>
								</li>
								<li>
									<h3>Community</h3>
									<p>
										Join more than 3,500 accessibility folks from around the
										world.
									</p>
								</li>
								<li>
									<h3>Stark White Paper</h3>
									<p>
										Managing and growing your accessibility posture at any
										scale.
									</p>
								</li>
							</ul>
						</ul>
					</nav>
				</div>
				<div className="sign flex items-center gap-4 text-[var(--blue)]">
					<a
						href="#"
						className="text-sm flex items-center justify-center duration-300 rounded-md hover:bg-[var(--blue)] hover:text-white"
					>
						LOG IN
					</a>
					<a
						href="#"
						className="text-sm bg-[var(--blue)] rounded-md text-white border-2 border-[var(--blue)] duration-300 flex items-center justify-center py-1 px-2 hover:bg-transparent hover:text-[var(--blue)]"
					>
						START FREE TRIAL
					</a>
					{!openNav ? (
						<IoIosMenu
							id="menu-icon"
							className="text-[var(--blue)] text-3xl cursor-pointer"
							onClick={() => setOpenNav(true)}
						/>
					) : (
						<IoClose
							id="menu-icon"
							className="text-[var(--blue)] text-3xl cursor-pointer"
							onClick={() => setOpenNav(false)}
						/>
					)}
				</div>
			</header>
		</div>
	);
};

export default Header;
