import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../../images/LogoBrand.png";
import CardTick from "../../../images/Bag.png";
import Like from "../../../images/like.png";
import "./HeaderProduct.css";
const HeaderProduct = () => {
	return (
		<header className="header header-background">
			<div className="container">
				<div className="header-main header-padding">
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

					<div className="header-tooll card-shop">
						<div className="header-icon-like">
							<span className="number-product">5</span>
							<Link to="">
								<img className="icon-shop" src={Like} alt="" />
							</Link>
						</div>
						<div header-icon-number>
							<span className="number-product">5</span>
							<Link to="./product/cart">
								<img className="icon-shop" src={CardTick} alt="" />
							</Link>
						</div>
					</div>
				</div>
			</div>
		</header>
	);
};

export default HeaderProduct;
