import React from "react";
import { Link } from "react-router-dom";
import imgUser from "../../../../images/User.png";
import Bookmark from "../../../../images/Bookmark.png";
import "./Dashboard.css";

const Dashboard = () => {
	return (
		<div>
			<div className="dashboard-wrap">
				<ul>
					<Link to="/user/account/profile">
						<li className="profile-item">
							<img src={imgUser} alt="" />
							<span>Tài khoản của tôi</span>
						</li>
					</Link>
					<Link to="/user/purchase">
						<li className="purchase-item">
							<img src={Bookmark} alt="" />
							<span>Đơn mua</span>
						</li>
					</Link>
				</ul>
			</div>
		</div>
	);
};

export default Dashboard;
