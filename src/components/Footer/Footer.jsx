import React from "react";

const Footer = () => {
	return (
		<div className="container-footer bg-[var(--text-color)]">
			<footer className="px-4 pt-12 text-white max-w-7xl mx-auto">
				<div className="container-links grid grid-cols-2 gap-8">
					<div className="links">
						<h3>USE CASES</h3>
						<a href="">For Designers</a>
						<a href="">For Developers</a>
						<a href="">For Product Managers</a>
						<a href="">For Compliance Managers</a>
					</div>
					<div className="links">
						<h3>RESOURCES</h3>
						<a href="">Blog</a>
						<a href="">Library</a>
						<a href="">Release Notes</a>
						<a href="">Slack Community</a>
					</div>
					<div className="links">
						<h3>HELP</h3>
						<a href="">My Account</a>
						<a href="">Support Docs</a>
						<a href="">Contact Us</a>
						<a href="">Feature Requests</a>
					</div>
					<div className="links">
						<h3>COMPANY</h3>
						<a href="">Stark Framework</a>
						<a href="">Privacy Policy</a>
						<a href="">Terms of Service</a>
						<a href="">Code of Conduct</a>
					</div>
					<div className="links">
						<h3>SECURITY</h3>
						<a href="">Security Overview</a>
						<a href="">Cookie Policy</a>
						<a href="">GDPR</a>
						<a href="">Status</a>
					</div>
					<div className="links">
						<h3>DESIGN INTEGRATIONS</h3>
						<a href="">Stark for Figma</a>
						<a href="">Stark for FigJam</a>
						<a href="">Stark for Sketch</a>
						<a href="">Stark for Adobe XD</a>
					</div>
					<div className="links">
						<h3>DEVELOPER INTEGRATIONS</h3>
						<a href="">Stark for Chrome</a>
						<a href="">Stark for Firefox</a>
						<a href="">Stark for Edge</a>
						<a href="">Stark for Safari</a>
						<a href="">Stark for Arc</a>
						<a href="">Stark for Brave</a>
					</div>
				</div>
				<div className="copy flex items-center flex-wrap gap-8 mt-16 pb-24">
					<div className="social-media flex items-center gap-4">
						<a href="">
							<img
								src="https://images.getstark.co/marketing/social-media/twitter.png"
								alt="Twitter"
							/>
						</a>
						<a href="">
							<img
								src="https://images.getstark.co/marketing/social-media/instagram.png"
								alt="Instagram"
							/>
						</a>
						<a href="">
							<img
								src="https://images.getstark.co/marketing/social-media/slack.png"
								alt="Slack"
							/>
						</a>
						<a href="">
							<img
								src="https://images.getstark.co/marketing/social-media/share-linkedin.webp"
								alt="Linkedin"
							/>
						</a>
						<a href="">
							<img
								src="https://images.getstark.co/marketing/social-media/youtube.png"
								alt="YouTube"
							/>
						</a>
					</div>
					<span className="font-mono text-[var(--copy-color)] font-bold tracking-widest">
						MADE REMOTELY WITH LOVE BY STARK LAB, INC. COPYRIGHT 2023
					</span>
				</div>
			</footer>
		</div>
	);
};

export default Footer;
