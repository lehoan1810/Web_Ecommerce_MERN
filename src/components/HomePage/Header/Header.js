import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../../images/LogoBrand.png";
import "./Header.css";

const Header = () => {
	return (
		<div>
			<header className="header">
				<div className="container">
					<div className="header-main">
						<img src={Logo} alt="" className="header-logo" />
						<div className="menu">
							<ul className="menu-list">
								<li className="menu-item">
									<Link to="" href="index.html" className="menu-link">
										Home
									</Link>
								</li>
								<li className="menu-item">
									<a href="#about" className="menu-link">
										About us
									</a>
								</li>
								<li className="menu-item">
									<a href="#work" className="menu-link">
										Service
									</a>
								</li>
								<li className="menu-item">
									<a href="#experience" className="menu-link">
										Blog
									</a>
								</li>
								<li className="menu-item">
									<a href="#contact" className="menu-link">
										Contact
									</a>
								</li>
							</ul>
						</div>

						<div className="header-tool">
							<Link to="/resgister" className="link-resgister">
								Resgister
							</Link>
							<Link to="/login" className="link-login">
								Login
							</Link>
						</div>
					</div>
				</div>
			</header>
		</div>
	);
};

export default Header;
