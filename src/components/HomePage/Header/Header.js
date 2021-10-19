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
							<ul className="menu-home-list">
								<li className="menu-home-item">
									<Link to="/" href="" className="menu-home-link">
										Home
									</Link>
								</li>
								<li className="menu-home-item">
									<Link to="/product" href="#about" className="menu-home-link">
										Category
									</Link>
								</li>
								<li className="menu-home-item">
									<a href="#work" className="menu-home-link">
										Service
									</a>
								</li>
								<li className="menu-home-item">
									<a href="#experience" className="menu-home-link">
										Blog
									</a>
								</li>
								<li className="menu-home-item">
									<a href="#contact" className="menu-home-link">
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
