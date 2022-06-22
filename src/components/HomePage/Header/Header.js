import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Logo from "../../../images/LogoBrand.png";
import "./Header.css";
import avtHeader from "../../../images/avt.png";
import {
	logout,
	getCurrentRole,
	getCurrentUser,
} from "../../../service/AuthService.js";

const Header = () => {
	const [currentUser, setCurrentUser] = useState(null);
	const user = getCurrentUser();
	const roleUser = getCurrentRole();

	useEffect(() => {
		if (user) {
			setCurrentUser(user);
		}
	}, [user]);
	const logOut = async () => {
		await logout();
		setCurrentUser(null);
	};

	return (
		<div>
			<header className="header">
				<div className="container">
					<div className="header-main">
						<img src={Logo} alt="" className="header-logo" />
						<div className="menu">
							{roleUser === "customer" ? (
								// role customer
								<ul className="menu-home-list">
									<li className="menu-home-item">
										<Link to="/" href="" className="menu-home-link">
											Trang chủ
										</Link>
									</li>

									<li className="menu-home-item">
										<Link to="/product" href="" className="menu-home-link">
											Danh mục
										</Link>
									</li>
									<li className="menu-home-item">
										<Link to="/#" href="#work" className="menu-home-link">
											Dịch vụ
										</Link>
									</li>
									<li className="menu-home-item">
										<Link to="/" href="#experience" className="menu-home-link">
											Blog
										</Link>
									</li>
									<li className="menu-home-item">
										<Link to="/" href="#contact" className="menu-home-link">
											Liên hệ
										</Link>
									</li>
								</ul>
							) : roleUser === "assistant" ? (
								// role assistant
								<ul className="menu-home-list"></ul>
							) : roleUser === "admin" ? (
								// role admin
								<ul className="menu-home-list"></ul>
							) : (
								<ul className="menu-home-list">
									<li className="menu-home-item">
										<Link to="/" href="" className="menu-home-link">
											Trang chủ
										</Link>
									</li>

									<li className="menu-home-item">
										<Link to="/product" href="" className="menu-home-link">
											Danh mục
										</Link>
									</li>
									<li className="menu-home-item">
										<Link to="/#" href="#work" className="menu-home-link">
											Dịch vụ
										</Link>
									</li>
									<li className="menu-home-item">
										<Link to="/" href="#experience" className="menu-home-link">
											Blog
										</Link>
									</li>
									<li className="menu-home-item">
										<Link to="/" href="#contact" className="menu-home-link">
											Liên hệ
										</Link>
									</li>
								</ul>
							)}
						</div>
						{currentUser ? (
							<div className="header-tool">
								{roleUser === "admin" ? (
									<Link to="/admin/account/profile/" className="custom-avt">
										<div className="header-icon-user">
											<img
												className="icon-user"
												src="https://glints-dashboard.s3.amazonaws.com/profile-picture/42f6703e9bf85c15fbb096ed58bb09a1.png"
												alt=""
											/>
										</div>
										<span>{currentUser}</span>
									</Link>
								) : roleUser === "customer" ? (
									<Link to="/user/account/profile/" className="custom-avt">
										<div className="header-icon-user">
											<img
												className="icon-user"
												src="https://glints-dashboard.s3.amazonaws.com/profile-picture/42f6703e9bf85c15fbb096ed58bb09a1.png"
												alt=""
											/>
										</div>
										<span>{currentUser}</span>
									</Link>
								) : (
									<Link to="/assistant/account/profile/" className="custom-avt">
										<img src={avtHeader} alt="" />
										<span>{currentUser}</span>
									</Link>
								)}
								<button onClick={logOut} className="link-logOut">
									Đăng xuất
								</button>
							</div>
						) : (
							<div className="header-tool">
								<Link to="/resgister" href="" className="link-resgister">
									Đăng ký
								</Link>
								<Link to="/login" href="" className="link-login">
									Đăng nhập
								</Link>
							</div>
						)}
					</div>
				</div>
			</header>
		</div>
	);
};

export default Header;
