import React, { useEffect, useState } from "react";
import axios from "axios";
import authHeader from "../../../../../../service/AuthHeader.js";
import { Tabs } from "antd";
import ProductPending from "./ProductPending.js";
import ProductAccept from "./ProductAccept.js";
import ProductDelivery from "./ProductDelivery.js";
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
					<TabPane tab={<span>Giao Thành Công</span>} key="3">
						<ProductDelivery />
					</TabPane>
				</Tabs>
			</div>
		</div>
	);
};

export default ManagerOrder;
