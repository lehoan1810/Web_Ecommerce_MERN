import axios from "axios";
import React, { useEffect, useState } from "react";
import authHeader from "../../../../../../../service/AuthHeader";
import { Table } from "antd";
import Moment from "react-moment";

const ModalOrder = ({ nameUser, data }) => {
	console.log(nameUser);
	const [dataOrder, setDataOrder] = useState([]);
	const [loading, setLoading] = useState(true);
	const [page, setPage] = useState(1);
	const [pageSize, setPageSize] = useState(2);
	const [dataPrice, setDataPrice] = useState([]);
	const url = `${process.env.REACT_APP_API_LOCAL}/api/v1/orders/${data}`;
	useEffect(() => {
		const loadProduct = () => {
			axios
				.get(url, { headers: authHeader() })
				.then((res) => {
					setDataOrder(res.data.data.order.items);
					setDataPrice(res.data.data.order);
					setLoading(false);
					console.log(res.data.data.order.items);
				})
				.catch((err) => console.log(err));
		};
		loadProduct();
	}, [url]);
	const columns = [
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
		// <div>
		// 	<div className="table">
		// 		<table>
		// 			<thead>
		// 				<tr>
		// 					<th>Tên Sản Phẩm</th>
		// 					<th>Số lượng</th>
		// 					<th>Tổng</th>
		// 				</tr>
		// 			</thead>
		// 			<tbody>
		// 				{loading === true && (
		// 					<tr>
		// 						<td colSpan={5}>
		// 							<Loading />
		// 						</td>
		// 					</tr>
		// 				)}
		// 				{loading === false &&
		// 					dataOrder &&
		// 					dataOrder.map((item, id) => (
		// 						<tr key={id}>
		// 							<td>{item.productName}</td>
		// 							<td>{item.qty}</td>
		// 							<td>
		// 								{new Intl.NumberFormat("it-IT", {
		// 									style: "currency",
		// 									currency: "VND",
		// 								}).format(item.price)}
		// 							</td>
		// 						</tr>
		// 					))}
		// 			</tbody>
		// 		</table>
		// 	</div>
		// </div>
		<div>
			<h1 className="title-bill">Thông tin đơn hàng</h1>
			<div className="detail-bill">
				<div>
					<div className="item-bill">
						<h3>Tên Người Nhận:</h3>
						<span>{nameUser.nameUser}</span>
					</div>
					<div className="item-bill">
						<h3>Địa chỉ nhận hàng:</h3>
						<span>{dataPrice.shippingAddress}</span>
					</div>
					<div className="item-bill">
						<h3>Tổng tiền đơn hàng:</h3>
						<span>
							{new Intl.NumberFormat("it-IT", {
								style: "currency",
								currency: "VND",
							}).format(dataPrice.totalPrice)}
						</span>
					</div>
				</div>
				<div className="item-bill-date">
					<h3>Ngày đặt:</h3>
					<Moment format="DD-MM-YYYY">{dataPrice.date}</Moment>
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

export default ModalOrder;
