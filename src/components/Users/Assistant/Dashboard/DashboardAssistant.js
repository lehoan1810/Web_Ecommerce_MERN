import React from "react";
import { Link } from "react-router-dom";
import imgUser from "../../../../images/User.png";
import Bookmark from "../../../../images/Bookmark.png";
import "./DashboardAssistant.css";

const DashboardAssistant = () => {
	return (
		<div>
			<div className="dashboard-wrap">
				<ul>
					<Link to="/assistant/account/profile">
						<li className="profile-item">
							<img src={imgUser} alt="" />
							<span>Tài khoản của tôi</span>
						</li>
					</Link>
					<Link to="/assistant/manager/user">
						<li className="purchase-item item-bottom">
							<img src={Bookmark} alt="" />
							<span>Quản Lý Khách Hàng</span>
						</li>
					</Link>
					<Link to="/assistant/product">
						<li className="purchase-item item-bottom">
							<img src={Bookmark} alt="" />
							<span>Sản Phẩm</span>
						</li>
					</Link>
					<Link to="/assistant/manager/order">
						<li className="purchase-item item-bottom">
							<img src={Bookmark} alt="" />
							<span>Quản Lý Đơn Hàng</span>
						</li>
					</Link>
				</ul>
			</div>
		</div>
	);
};

export default DashboardAssistant;
