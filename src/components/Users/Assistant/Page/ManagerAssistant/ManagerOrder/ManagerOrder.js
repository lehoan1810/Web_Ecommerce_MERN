import React from "react";
import { Tabs } from "antd";
import ProductPending from "./ProductPending";
import ProductAccept from "./ProductAccept";
const { TabPane } = Tabs;

const ManagerOrder = () => {
	return (
		<div>
			<div className="form-purchase-user">
				<Tabs defaultActiveKey="1">
					<TabPane tab={<span>Đơn Hàng Chờ Xử Lý</span>} key="1">
						<ProductPending />
					</TabPane>
					<TabPane tab={<span>Đơn Hàng Đã Xử Lý</span>} key="2">
						<ProductAccept />
					</TabPane>
				</Tabs>
			</div>
		</div>
	);
};

export default ManagerOrder;
