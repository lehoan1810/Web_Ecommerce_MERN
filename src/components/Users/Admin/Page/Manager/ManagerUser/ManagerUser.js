import React from "react";
import { Tabs } from "antd";
import "./ManagerUser.css";
import UserOnline from "./UserOnline";
import UserLock from "./UserLock";
const { TabPane } = Tabs;

const ManagerUser = () => {
	return (
		<div>
			<h2 className="title-admin">Quản Lý Khách hàng</h2>
			<div className="form-purchase-user">
				<Tabs defaultActiveKey="1">
					<TabPane tab={<span>User Online</span>} key="1">
						<UserOnline />
					</TabPane>
					<TabPane tab={<span>User Lock</span>} key="2">
						<UserLock />
					</TabPane>
				</Tabs>
			</div>
		</div>
	);
};

export default ManagerUser;
