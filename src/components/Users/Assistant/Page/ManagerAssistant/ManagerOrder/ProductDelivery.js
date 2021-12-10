import React, { useState, useEffect } from "react";
import axios from "axios";
import authHeader from "../../../../../../service/AuthHeader.js";
import Moment from "react-moment";
import "./ManagerOrder.css";

const ProductDelivery = () => {
	const [dataOrder, setDataOrder] = useState([]);
	const url = `${process.env.REACT_APP_API_LOCAL}/api/v1/orders?sort=date&status=2`;
	useEffect(() => {
		const loadProduct = () => {
			axios
				.get(url, { headers: authHeader() })
				.then((res) => {
					setDataOrder(res.data.data.orders);
					console.log(res.data.data.orders);
				})
				.catch((err) => console.log(err));
		};
		loadProduct();
	}, [url]);

	return (
		<div>
			<div className="Order-table">
				<div className="table">
					<table>
						<thead>
							<tr>
								<th>Tên Khách hàng</th>
								<th>Tổng tiền đơn hàng</th>
								<th>Ngày</th>
								<th>Tình trạng</th>
								<th>Thao Tác</th>
							</tr>
						</thead>
						<tbody>
							{dataOrder.map((item, id) => (
								<tr key={id}>
									<td>{item.nameUser}</td>
									<td>
										{new Intl.NumberFormat("it-IT", {
											style: "currency",
											currency: "VND",
										}).format(item.order.totalPrice)}
									</td>
									<td>
										<Moment format="DD-MM-YYYY">{item.order.date}</Moment>
									</td>
									<td>
										<div className="action-status">
											<span>Hoàn Thành</span>
										</div>
									</td>
									<td>
										<div className="action-handel">
											<button className="action-delete">Delete</button>
										</div>
									</td>
								</tr>
							))}
						</tbody>
					</table>
				</div>
			</div>
		</div>
	);
};

export default ProductDelivery;
