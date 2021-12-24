import React from "react";
import { NavLink } from "react-router-dom";
import imgUser from "../../../../images/User.png";
import Bookmark from "../../../../images/Bookmark.png";
import Product from "../../../../images/product.png";
import Order from "../../../../images/order.png";
import Account from "../../../../images/account.png";
import "./DashboardAssistant.css";

const DashboardAssistant = () => {
	return (
		<div>
			<div className="dashboard-wrap">
				<ul className="user-dashboard">
					<NavLink activeClassName="active" to="/assistant/account/profile">
						<li className="profile-item">
							<img src={Account} alt="" />
							<span>Tài khoản của tôi</span>
						</li>
					</NavLink>
					<NavLink activeClassName="active" to="/assistant/manager/user">
						<li className="profile-item item-bottom">
							<img src={imgUser} alt="" />
							<span>Quản Lý Khách Hàng</span>
						</li>
					</NavLink>
					<NavLink activeClassName="active" to="/assistant/product">
						<li className="profile-item item-bottom">
							<img src={Product} alt="" />
							<span>Quản Lý Sản Phẩm</span>
						</li>
					</NavLink>
					<NavLink activeClassName="active" to="/assistant/manager/brand">
						<li className="profile-item item-bottom">
							<img src={Bookmark} alt="" />
							<span>Quản Lý Brand</span>
						</li>
					</NavLink>
					<NavLink activeClassName="active" to="/assistant/manager/order">
						<li className="profile-item item-bottom">
							<img src={Order} alt="" />
							<span>Quản Lý Đơn Hàng</span>
						</li>
					</NavLink>
				</ul>
			</div>
		</div>
	);
};

export default DashboardAssistant;
