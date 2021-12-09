import React, { useEffect, useState } from "react";
import "./Purchase.css";
import { Tabs } from "antd";
import OrderConfirm from "./Order/OrderConfirm.js";
// import OrderDelete from "./Order/OrderDelete.js";
import OrderComplete from "./Order/OrderComplete.js";
import OrderProcess from "./Order/OrderProcess.js";
import axios from "axios";
import authHeader from "../../../../../service/AuthHeader";
const { TabPane } = Tabs;

const Purchase = () => {
	const [dataOrder, setDataOrder] = useState([]);
	const url = `${process.env.REACT_APP_API_LOCAL}/api/v1/orders/customer?sort=date&status=0`;
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
					<TabPane tab={<span>Chờ Xác Nhận</span>} key="1">
						<OrderConfirm data={dataOrder} />
					</TabPane>
					<TabPane tab={<span>Đang Giao</span>} key="2">
						<OrderProcess />
					</TabPane>
					<TabPane tab={<span>Đã Giao</span>} key="3">
						<OrderComplete />
					</TabPane>
					{/* <TabPane tab={<span>Đã Hủy</span>} key="4">
						<OrderDelete />
					</TabPane> */}
				</Tabs>
			</div>
		</div>
	);
};

export default Purchase;
