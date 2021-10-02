import React from "react";
import "./Purchase.css";
import { Tabs } from "antd";
import OrderConfirm from "./Order/OrderConfirm";
import OrderDelete from "./Order/OrderDelete";
import OrderComplete from "./Order/OrderComplete";
import OrderProcess from "./Order/OrderProcess";
const { TabPane } = Tabs;

const Purchase = () => {
	return (
		<div>
			<div className="form-purchase-user">
				<Tabs defaultActiveKey="1">
					<TabPane tab={<span>Chờ Xác Nhận</span>} key="1">
						<OrderConfirm />
					</TabPane>
					<TabPane tab={<span>Đang Giao</span>} key="2">
						<OrderProcess />
					</TabPane>
					<TabPane tab={<span>Đã Giao</span>} key="3">
						<OrderComplete />
					</TabPane>
					<TabPane tab={<span>Đã Hủy</span>} key="4">
						<OrderDelete />
					</TabPane>
				</Tabs>
			</div>
		</div>
	);
};

export default Purchase;
