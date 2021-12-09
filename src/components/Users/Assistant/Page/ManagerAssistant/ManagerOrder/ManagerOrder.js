import React, { useEffect, useState } from "react";
import axios from "axios";
import authHeader from "../../../../../../service/AuthHeader.js";
import { Tabs } from "antd";
import ProductPending from "./ProductPending.js";
import ProductAccept from "./ProductAccept.js";
import ProductDelivery from "./ProductDelivery.js";
const { TabPane } = Tabs;

const ManagerOrder = () => {
	const [dataOrder, setDataOrder] = useState([]);
	const url = `${process.env.REACT_APP_API_LOCAL}/api/v1/orders?sort=date&status=0`;
	// const url = "http://localhost:5000/api/v1/orders?sort=date&status=0";
	useEffect(() => {
		const loadData = () => {
			axios
				.get(url, { headers: authHeader() })
				.then((res) => {
					setDataOrder(res.data.data.orders);
					console.log(res.data.data.orders);
				})
				.catch((err) => console.log(err));
		};
		loadData();
	}, [url]);
	return (
		<div>
			<div className="form-purchase-user">
				<Tabs defaultActiveKey="1">
					<TabPane tab={<span>Đơn Hàng Chờ Xử Lý</span>} key="1">
						<ProductPending data={dataOrder} />
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
