import React from "react";
import { NavLink } from "react-router-dom";
import imgUser from "../../../../images/User.png";
import Bookmark from "../../../../images/Bookmark.png";
import "./DashboardAdmin.css";

const DashboardAdmin = () => {
	return (
		<div>
			<div className="dashboard-wrap">
				<ul className="user-dashboard">
					<NavLink activeClassName="active" to="/admin/account/profile">
						<li className="profile-item ">
							<img src={imgUser} alt="" />
							<span>Tài khoản của tôi</span>
						</li>
					</NavLink>
					<NavLink activeClassName="active" to="/admin/manager/assistant">
						<li className="profile-item item-bottom">
							<img src={Bookmark} alt="" />
							<span>Quản Lý Nhân Viên</span>
						</li>
					</NavLink>
					<NavLink activeClassName="active" to="/admin/manager/user">
						<li className="profile-item item-bottom">
							<img src={Bookmark} alt="" />
							<span>Quản Lý Khách Hàng</span>
						</li>
					</NavLink>
					<NavLink activeClassName="active" to="/admin/manager/product">
						<li className="profile-item item-bottom">
							<img src={Bookmark} alt="" />
							<span>Quản Lý Sản Phẩm</span>
						</li>
					</NavLink>
					<NavLink activeClassName="active" to="/admin/manager/category">
						<li className="profile-item item-bottom">
							<img src={Bookmark} alt="" />
							<span>Quản Lý Danh mục</span>
						</li>
					</NavLink>
					<NavLink activeClassName="active" to="/admin/manager/data">
						<li className="profile-item item-bottom">
							<img src={Bookmark} alt="" />
							<span>Quản Lý Thống kê</span>
						</li>
					</NavLink>
				</ul>
			</div>
		</div>
	);
};

export default DashboardAdmin;
