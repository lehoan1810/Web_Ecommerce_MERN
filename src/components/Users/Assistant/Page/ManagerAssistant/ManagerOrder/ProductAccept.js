import React, { useState, useEffect } from "react";
import axios from "axios";
import authHeader from "../../../../../../service/AuthHeader.js";
import Moment from "react-moment";
import "./ManagerOrder.css";
import { toast } from "react-toastify";
import Loading from "../../../../../Loading/Loading.js";

const ProductAccept = () => {
	const [dataOrder, setDataOrder] = useState([]);
	const url = `${process.env.REACT_APP_API_LOCAL}/api/v1/orders?sort=date&status=1`;
	const [loading, setLoading] = useState(true);
	useEffect(() => {
		const loadProduct = () => {
			axios
				.get(url, { headers: authHeader() })
				.then((res) => {
					setDataOrder(res.data.data.orders);
					console.log(res.data.data.orders);
					setLoading(false);
				})
				.catch((err) => console.log(err));
		};
		loadProduct();
	}, [url]);
	const onHandleDelivery = (idOrder) => {
		const url = `${process.env.REACT_APP_API_LOCAL}/api/v1/orders/${idOrder}`;
		axios
			.patch(
				url,
				{
					status: 2,
				},
				{ headers: authHeader() }
			)
			.then((res) => {
				toast.success("Successful Delivery !!!");
				window.location.reload();
				console.log(res.data);
			})
			.catch((err) => console.log(err));
	};
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
							{loading === true && (
								<tr>
									<td colSpan={6}>
										<Loading />
									</td>
								</tr>
							)}
							{loading === false &&
								dataOrder.map((item, id) => (
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
												<span>Đã xác nhận</span>
											</div>
										</td>
										<td>
											<div className="action-handel">
												<button
													onClick={() => onHandleDelivery(item.order._id)}
													className="action-delivery"
												>
													Giao Hàng
												</button>
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

export default ProductAccept;
