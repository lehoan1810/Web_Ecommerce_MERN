import axios from "axios";
import React, { useEffect, useState } from "react";
import authHeader from "../../../../../../../service/AuthHeader";
import Loading from "../../../../../../Loading/Loading";

const ModalOrderUser = ({ data }) => {
	const [dataOrder, setDataOrder] = useState([]);
	const [loading, setLoading] = useState(true);
	const url = `${process.env.REACT_APP_API_LOCAL}/api/v1/orders/customer/${data}`;
	useEffect(() => {
		const loadProduct = () => {
			axios
				.get(url, { headers: authHeader() })
				.then((res) => {
					setDataOrder(res.data.data.order.items);
					setLoading(false);
					console.log(res.data.data.order.items);
				})
				.catch((err) => console.log(err));
		};
		loadProduct();
	}, [url]);
	return (
		<div>
			<div className="table">
				<table>
					<thead>
						<tr>
							<th>Tên Sản Phẩm</th>
							<th>Số lượng</th>
							<th>Tổng</th>
						</tr>
					</thead>
					<tbody>
						{loading === true && (
							<tr>
								<td colSpan={5}>
									<Loading />
								</td>
							</tr>
						)}
						{loading === false &&
							dataOrder &&
							dataOrder.map((item, id) => (
								<tr key={id}>
									<td>{item.productName}</td>
									<td>{item.qty}</td>
									<td>
										{new Intl.NumberFormat("it-IT", {
											style: "currency",
											currency: "VND",
										}).format(item.price)}
									</td>
								</tr>
							))}
					</tbody>
				</table>
			</div>
		</div>
	);
};

export default ModalOrderUser;
