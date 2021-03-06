import React from "react";
import { NavLink } from "react-router-dom";
import imgUser from "../../../../images/User.png";
import Graph from "../../../../images/Graph.png";
import Account from "../../../../images/account.png";
import Category from "../../../../images/category.png";
import Product from "../../../../images/product.png";
import Voucher from "../../../../images/voucher.png";
import "./DashboardAdmin.css";

const DashboardAdmin = () => {
	return (
		<div>
			<div className="dashboard-wrap">
				<ul className="user-dashboard">
					<NavLink activeClassName="active" to="/admin/account/profile">
						<li className="profile-item ">
							<img src={Account} alt="" />
							<span>Tài khoản của tôi</span>
						</li>
					</NavLink>
					<NavLink activeClassName="active" to="/admin/manager/assistant">
						<li className="profile-item item-bottom">
							<img src={imgUser} alt="" />
							<span>Quản Lý Nhân Viên</span>
						</li>
					</NavLink>
					<NavLink activeClassName="active" to="/admin/manager/user">
						<li className="profile-item item-bottom">
							<img src={imgUser} alt="" />
							<span>Quản Lý Tài Khoản</span>
						</li>
					</NavLink>
					<NavLink activeClassName="active" to="/admin/manager/product">
						<li className="profile-item item-bottom">
							<img src={Product} alt="" />
							<span>Quản Lý Sản Phẩm</span>
						</li>
					</NavLink>
					<NavLink activeClassName="active" to="/admin/manager/category">
						<li className="profile-item item-bottom">
							<img src={Category} alt="" />
							<span>Quản Lý Danh mục</span>
						</li>
					</NavLink>
					<NavLink activeClassName="active" to="/admin/manager/voucher">
						<li className="profile-item item-bottom">
							<img src={Voucher} alt="" />
							<span>Quản Lý Voucher</span>
						</li>
					</NavLink>
					<NavLink activeClassName="active" to="/admin/manager/data">
						<li className="profile-item item-bottom">
							<img src={Graph} alt="" />
							<span>Quản Lý Thống kê</span>
						</li>
					</NavLink>
				</ul>
			</div>
		</div>
	);
};

export default DashboardAdmin;
