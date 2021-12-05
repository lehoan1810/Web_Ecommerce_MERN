import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../../images/LogoBrand.png";
import CardTick from "../../../images/Bag.png";
import Like from "../../../images/like.png";
import "./HeaderProduct.css";
import authHeader from "../../../service/AuthHeader.js";
import axios from "axios";
import {
	getCurrentRole,
	getCurrentUser,
} from "../../../service/AuthService.js";
import accountImg from "../../../images/account.png";
const HeaderProduct = () => {
	const user = getCurrentUser();
	const roleUser = getCurrentRole();

	//
	const [dataUser, setDataUser] = useState([]);
	const urlCart = `${process.env.REACT_APP_API_LOCAL}/api/v1/cart`;
	useEffect(() => {
		const loadCart = () => {
			if (roleUser === "customer") {
				axios
					.get(urlCart, { headers: authHeader() })
					.then((res) => {
						setDataUser(res.data.data.doc.items);
						console.log("header: ", res.data.data.doc);
					})
					.catch((err) => console.log(err));
			}
		};
		loadCart();
	}, [urlCart, roleUser]);

	const count = (data) => {
		if (data.length === undefined) {
			return 0;
		} else {
			let length = Object.keys(data).length;
			return length;
		}
	};

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
					{roleUser === "customer" ? (
						<div className="header-tooll card-shop">
							<div className="header-icon-like">
								<span className="number-product"></span>
								<Link to="/product/Like">
									<img className="icon-shop" src={Like} alt="" />
								</Link>
							</div>
							<div className="header-icon-number">
								<span className="number-product">{count(dataUser)}</span>

								<Link to="/product/cart">
									<img className="icon-shop" src={CardTick} alt="" />
								</Link>
							</div>
						</div>
					) : roleUser === "assistant" ? (
						<div className="header-tooll card-shop">
							<div className="header-icon-role">
								<img className="icon-role" src={accountImg} alt="" />

								<span className="name-role">Assistant: </span>
								<span className="name-user">{user}</span>
							</div>
						</div>
					) : roleUser === "admin" ? (
						<div className="header-tooll card-shop">
							<div className="header-icon-role">
								<img className="icon-role" src={accountImg} alt="" />

								<span className="name-role">Admin: </span>
								<span className="name-user">{user}</span>
							</div>
						</div>
					) : (
						<div className="header-tooll card-shop">
							<div className="header-icon-role">
								{/* <img className="icon-role" src={accountImg} alt="" /> */}

								<Link to="/login" className="role-login">
									{" "}
									Login
								</Link>
								<Link to="/Resgister" className="role-resgister">
									{" "}
									Register
								</Link>
								<span className="name-user">{user}</span>
							</div>
						</div>
					)}
				</div>
			</div>
		</header>
	);
};

export default HeaderProduct;
