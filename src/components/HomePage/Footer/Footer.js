import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../../images/LogoBrand.png";

const Footer = () => {
	return (
		<div>
			<footer className="footer">
				<div className="footer-top">
					<div className="container">
						<div className="footer-main">
							<div className="footer-column">
								<Link to="/" href="index.html" className="footer-logo">
									<img src={Logo} alt="" />
								</Link>
								<div className="footer-desc text">
									Vivamus dapibus et purus quis mollis. Mauris tempus tortor vel
									mi eleifend laoreet. Nulla laoreet sapien erat.
								</div>
								<div className="social">
									<Link to="/" href="#" className="social-item">
										<ion-icon name="logo-facebook"></ion-icon>
									</Link>
									<Link to="/" href="#" className="social-item">
										<ion-icon name="logo-twitter"></ion-icon>
									</Link>
									<Link to="/" href="#" className="social-item">
										<ion-icon name="logo-instagram"></ion-icon>
									</Link>
									<Link to="/" href="#" className="social-item">
										<ion-icon name="logo-dribbble"></ion-icon>
									</Link>
								</div>
								<img
									className="footer-icon"
									src="https://frontend.tikicdn.com/_desktop-next/static/img/icons/playstore.png"
									alt=""
								/>
								<img
									className="footer-icon"
									src="https://frontend.tikicdn.com/_desktop-next/static/img/icons/appstore.png"
									alt=""
								/>
							</div>
							<div className="footer-column">
								<h3 className="footer-heading second-font">Usefull Links</h3>
								<ul className="footer-links">
									<li className="footer-item">
										<Link to="/" href="#" className="footer-link">
											About Us
										</Link>
									</li>
									<li className="footer-item">
										<Link to="/" href="#" className="footer-link">
											Contact us
										</Link>
									</li>
									<li className="footer-item">
										<Link to="/" href="#" className="footer-link">
											Terms of Services
										</Link>
									</li>
									<li className="footer-item">
										<Link to="" href="#" className="footer-link">
											Plan and Precing
										</Link>
									</li>
									<li className="footer-item">
										<Link to="/" href="#" className="footer-link">
											Site Map
										</Link>
									</li>
								</ul>
							</div>
							<div className="footer-column">
								<h3 className="footer-heading second-font">Contact Us</h3>
								<ul className="footer-info">
									<li>Phone Number 2: ( + 051 ) 958 23 78 51</li>
									<li>
										Phone Number 2:
										<span className="footer-highlight">
											( + 051 ) 958 23 78 51
										</span>
									</li>
								</ul>
								<ul className="footer-info">
									<li>
										<Link to="/" href="mailto:support@ocatavian.io">
											Email: demo@gmail.com.io
										</Link>
									</li>
									<li>Fax: demo@gmail.com.io</li>
								</ul>
								<ul className="footer-info">
									<li>
										Address: Envato Pty Ltd 13/2 Permanent ST melbourne VLC 3000
										- Australia
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
				{/* <div className="footer-bottom">
					<div className="container footer-container">
						<Link to="" href="#" className="footer-rocket">
							<ion-icon name="rocket"></ion-icon>
						</Link>
						<p>
							Copyright © 2020 Octavian, Designed by
							<Link to="" href="#">
								TexTheme
							</Link>{" "}
							All Rights Reserved.
						</p>
					</div>
				</div> */}
			</footer>
		</div>
	);
};

export default Footer;
