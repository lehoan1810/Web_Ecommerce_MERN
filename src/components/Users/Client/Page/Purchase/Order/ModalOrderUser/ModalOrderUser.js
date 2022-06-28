import axios from "axios";
import React, { useEffect, useState } from "react";
import authHeader from "../../../../../../../service/AuthHeader";
import { Table } from "antd";
import "./ModalOrderUser.css";
import { getCurrentUser } from "../../../../../../../service/AuthService";
import Moment from "react-moment";

const ModalOrderUser = ({ data }) => {
	const userOrder = getCurrentUser();
	const [dataOrder, setDataOrder] = useState([]);
	const [dataBill, setDataBill] = useState([]);
	const [loading, setLoading] = useState(true);
	const [page, setPage] = useState(1);
	const [pageSize, setPageSize] = useState(2);

	const url = `${process.env.REACT_APP_API_LOCAL}/api/v1/orders/customer/${data}`;

	useEffect(() => {
		const loadProduct = () => {
			axios
				.get(url, { headers: authHeader() })
				.then((res) => {
					setDataOrder(res.data.data.order.items);
					setDataBill(res.data.data.order);
					setLoading(false);
					console.log("data item: ", res.data.data.order);
				})
				.catch((err) => console.log(err));
		};
		loadProduct();
	}, [url]);

	// table data
	const columns = [
		{
			title: "ID Sản Phẩm",
			dataIndex: "productId",
			responsive: ["md"],
			key: "productId",
		},
		{
			title: "Tên Sản Phẩm",
			dataIndex: "productName",
			responsive: ["md"],
			key: "productName",
		},

		{
			title: "Giá tiền",
			dataIndex: "price",
			responsive: ["md"],
			key: "price",
			render: (item) => (
				<div>
					<span>
						{new Intl.NumberFormat("it-IT", {
							style: "currency",
							currency: "VND",
						}).format(item)}
					</span>
				</div>
			),
		},
		{
			title: "số lượng",
			dataIndex: "qty",
			responsive: ["md"],
			key: "qty",
		},
	];
	return (
		<div>
			<h1 className="title-bill">Hóa đơn đặt hàng</h1>
			<div className="detail-bill">
				<div>
					<div className="item-bill">
						<h3>Tên Người Nhận:</h3>
						<span>{userOrder}</span>
					</div>
					<div className="item-bill">
						<h3>Địa chỉ nhận hàng:</h3>
						<span>{dataBill.shippingAddress}</span>
					</div>
					<div className="item-bill">
						<h3>Tổng tiền đơn hàng:</h3>
						<span>
							{new Intl.NumberFormat("it-IT", {
								style: "currency",
								currency: "VND",
							}).format(dataBill.totalPrice)}
						</span>
					</div>
				</div>
				<div className="item-bill-date">
					<h3>Ngày đặt:</h3>
					<Moment format="DD-MM-YYYY">{dataBill.date}</Moment>
					{/* <span>{dataBill.date}</span> */}
				</div>
			</div>

			<div className="table">
				<Table
					columns={columns}
					dataSource={dataOrder}
					pagination={{
						current: page,
						pageSize: pageSize,
						onChange: (page, pageSize) => {
							setPage(page);
							setPageSize(pageSize);
						},
					}}
					loading={loading}
					rowKey="_id"
				/>
			</div>
		</div>
	);
};

export default ModalOrderUser;
