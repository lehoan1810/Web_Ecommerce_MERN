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
					<Link to="/">
						<img src={Logo} alt="" className="header-logo" />
					</Link>
					<div className="menu">
						<ul className="menu-list"></ul>
					</div>

					<div className="header-tooll card-shop">
						<div className="header-icon-like">
							<span className="number-product">5</span>
							<Link to="/product/Like">
								<img className="icon-shop" src={Like} alt="" />
							</Link>
						</div>
						<div className="header-icon-number">
							<span className="number-product">5</span>
							<Link to="/product/cart">
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
