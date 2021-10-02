import React from "react";
import { Link } from "react-router-dom";
import imgUser from "../../../../images/User.png";
import Bookmark from "../../../../images/Bookmark.png";
import "./DashboardAdmin.css";

const DashboardAdmin = () => {
	return (
		<div>
			<div className="dashboard-wrap">
				<ul>
					<Link to="/admin/account/profile">
						<li className="profile-item ">
							<img src={imgUser} alt="" />
							<span>Tài khoản của tôi</span>
						</li>
					</Link>
					<Link to="/admin/manager/assistant">
						<li className="purchase-item item-bottom">
							<img src={Bookmark} alt="" />
							<span>Quản Lý Nhân Viên</span>
						</li>
					</Link>
					<Link to="/admin/manager/user">
						<li className="purchase-item item-bottom">
							<img src={Bookmark} alt="" />
							<span>Quản Lý Khách Hàng</span>
						</li>
					</Link>
					<Link to="/admin/manager/product">
						<li className="purchase-item item-bottom">
							<img src={Bookmark} alt="" />
							<span>Quản Lý Sản Phẩm</span>
						</li>
					</Link>
					<Link to="/admin/manager/data">
						<li className="purchase-item item-bottom">
							<img src={Bookmark} alt="" />
							<span>Quản Lý Thống kê</span>
						</li>
					</Link>
				</ul>
			</div>
		</div>
	);
};

export default DashboardAdmin;
