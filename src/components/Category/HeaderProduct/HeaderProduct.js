import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../../images/LogoBrand.png";
import CardTick from "../../../images/Bag.png";
import Like from "../../../images/like.png";
import Bell from "../../../images/notification.png";
import Message from "../../../images/message.png";
import "./HeaderProduct.css";
import authHeader from "../../../service/AuthHeader.js";
import axios from "axios";
import {
	getCurrentRole,
	getCurrentIdUser,
} from "../../../service/AuthService.js";
const HeaderProduct = () => {
	const roleUser = getCurrentRole();
	const idUser = getCurrentIdUser();
	//profile User
	const [dataProfile, setDataProfile] = useState([]);
	const url = `${process.env.REACT_APP_API_LOCAL}/api/v1/users/profile/${idUser}`;
	useEffect(() => {
		const loadProfile = () => {
			if (idUser == null) return 0;
			axios
				.get(url, { headers: authHeader() })
				.then((res) => {
					setDataProfile(res.data.data.userData);
					console.log("header profile user: ", res.data.data.userData);
				})
				.catch((err) => console.log(err));
		};
		loadProfile();
	}, [url, idUser]);

	//data cart user
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
		<header className="header-background">
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
								<Link to="/product/Like">
									<img className="icon-shop" src={Like} alt="" />
								</Link>
								<div className="count-like-product">
									<span className="number-product">0</span>
								</div>
							</div>
							<div className="header-icon-number">
								<Link to="/product/cart">
									<img className="icon-shop" src={CardTick} alt="" />
								</Link>
								<div>
									<span className="number-product">{count(dataUser)}</span>
								</div>
							</div>
							<div className="header-tooll card-shop">
								<div className="item-message mess-margin-left">
									<img src={Message} alt="" className="bell-noti-icon" />
								</div>
								<div className="bell-noti">
									<img src={Bell} alt="" className="bell-noti-icon" />
									<div className="bell-noti-status"></div>
								</div>
								<div className="header-icon-role">
									<img src={dataProfile.photo} alt="" />
								</div>
							</div>
						</div>
					) : roleUser === "assistant" ? (
						<div className="header-tooll card-shop">
							<div className="item-message">
								<img src={Message} alt="" className="bell-noti-icon" />
							</div>
							<div className="bell-noti">
								<img src={Bell} alt="" className="bell-noti-icon" />
								<div className="bell-noti-status"></div>
							</div>
							<div className="header-icon-role">
								<img src={dataProfile.photo} alt="" />
							</div>
						</div>
					) : roleUser === "admin" ? (
						<div className="header-tooll card-shop">
							<div className="item-message">
								<img src={Message} alt="" className="bell-noti-icon" />
							</div>
							<div className="bell-noti">
								<img src={Bell} alt="" className="bell-noti-icon" />
								<div className="bell-noti-status"></div>
							</div>
							<div className="header-icon-role">
								<img src={dataProfile.photo} alt="" />
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
							</div>
						</div>
					)}
				</div>
			</div>
		</header>
	);
};

export default HeaderProduct;
