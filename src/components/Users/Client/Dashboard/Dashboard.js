import React from "react";
import { NavLink } from "react-router-dom";
import imgUser from "../../../../images/User.png";
import Bookmark from "../../../../images/Bookmark.png";
import "./Dashboard.css";

const Dashboard = () => {
	return (
		<div>
			<div className="dashboard-wrap">
				<ul className="user-dashboard">
					<NavLink activeClassName="active" to="/user/account/profile">
						<li className="profile-item">
							<img src={imgUser} alt="" />
							<span>Tài khoản của tôi</span>
						</li>
					</NavLink>
					<NavLink activeClassName="active" to="/user/purchase">
						<li className="profile-item">
							<img src={Bookmark} alt="" />
							<span>Đơn mua</span>
						</li>
					</NavLink>
				</ul>
			</div>
		</div>
	);
};

export default Dashboard;
