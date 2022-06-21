import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../../images/LogoBrand.png";
import CardTick from "../../../images/Bag.png";
import Like from "../../../images/like.png";
import Bell from "../../../images/notification.png";
import Logout from "../../../images/Logout.png";
import Message from "../../../images/message.png";
import noAvatar from "../../../images/no-avatar.png";
import "./HeaderProduct.css";
import authHeader from "../../../service/AuthHeader.js";

import axios from "axios";
import {
	getCurrentRole,
	logout,
	getCurrentIdUser,
} from "../../../service/AuthService.js";
import { Router } from "react-router-dom/cjs/react-router-dom.min";
import { useHistory } from "react-router-dom";
const HeaderProduct = (props) => {
	const { data } = props;
	let history = useHistory();
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
	console.log("show dataUser: ", dataUser);
	const urlCart = `${process.env.REACT_APP_API_LOCAL}/api/v1/cart`;
	useEffect(() => {
		const loadCart = () => {
			if (roleUser === "customer") {
				axios
					.get(urlCart, { headers: authHeader() })
					.then((res) => {
						setDataUser(res.data.data.doc.items);
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
	const logOut = async () => {
		await logout();
		history.push("/");
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
								{/* <Link to="/product/Like">
									<img className="icon-shop" src={Like} alt="" />
								</Link>
								<div className="count-like-product">
									<span className="number-product">0</span>
								</div> */}
							</div>
							<div className="header-icon-number bell-noti">
								<Link to="/product/cart">
									<img
										className="icon-shop bell-noti-icon"
										src={CardTick}
										alt=""
									/>
								</Link>
								<div>
									<span className="number-product">{dataUser.length}</span>
								</div>
							</div>
							<div className="header-tooll card-shop">
								<div className="header-icon-user">
									<img className="icon-user" src={dataProfile.photo} alt="" />
									<div className="header-log-out">
										<div className="header-log-out-item">
											<Link className="logOut" to="/user/account/profile/">
												<span>Thông tin cá nhân</span>
											</Link>
										</div>
										<div onClick={logOut} className="header-log-out-item">
											<Link className="logOut" to="/">
												<span>Xem sản phẩm</span>
											</Link>
										</div>

										<div className="line-menu"></div>
										<div onClick={logOut} className="header-log-out-item">
											<Link className="logOut" to="/">
												<span>Đăng xuất</span>
											</Link>
										</div>
									</div>
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
							<div className="header-icon-user">
								<img className="icon-user" src={dataProfile.photo} alt="" />
								<div className="header-log-out">
									<div onClick={logOut} className="header-log-out-item">
										<Link className="logOut" to="/">
											<img src={Logout} alt="" />
											<span>Đăng xuất</span>
										</Link>
									</div>
								</div>
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
							<div className="header-icon-user">
								<img
									className="icon-user"
									src={dataProfile.photo ? dataProfile.photo : noAvatar}
									alt=""
								/>
								<div className="header-log-out">
									<div onClick={logOut} className="header-log-out-item">
										<Link className="logOut" to="/">
											<img src={Logout} alt="" />
											<span>Đăng xuất</span>
										</Link>
									</div>
								</div>
							</div>
						</div>
					) : (
						<div className="header-tooll card-shop">
							<div className="header-icon-role">
								{/* <img className="icon-role" src={accountImg} alt="" /> */}

								<Link to="/login" className="role-login">
									{" "}
									Đăng nhập
								</Link>
								<Link to="/Resgister" className="role-resgister">
									{" "}
									Đăng ký
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
