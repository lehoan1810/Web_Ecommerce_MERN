import axios from "axios";
import React, { useEffect, useState } from "react";
import authHeader from "../../../Service/AuthHeader.js";
import "./PaymentProduct.css";
import { getCurrentIdUser } from "../../../Service/AuthService.js";

const PaymentProduct = ({ data }) => {
	const idUser = getCurrentIdUser();
	const [dataUser, setDataUser] = useState([]);
	const url = `${process.env.REACT_APP_API_LOCAL}/api/v1/users/profile/${idUser}`;

	useEffect(() => {
		const loadCart = () => {
			axios
				.get(url, { headers: authHeader() })
				.then((res) => {
					setDataUser(res.data.data.userData);

					// console.log(res.data.data.userData);
				})
				.catch((err) => console.log(err));
		};
		loadCart();
	}, [url, idUser]);
	// console.log("data nè: ", data.items.length);
	const sum = (he) => {
		if (he) {
			const itemsPrice = he.reduce((a, c) => a + c.price * c.qty, 0);
			return new Intl.NumberFormat("it-IT", {
				style: "currency",
				currency: "VND",
			}).format(itemsPrice);
		} else {
			return 0;
		}
	};
	return (
		<div className="form-payment">
			<div className="desc-order-user">
				<h3>Họ và tên</h3>
				<span>{dataUser.name}</span>
			</div>
			<div className="desc-order-address">
				<h3>Địa chỉ nhận hàng</h3>
				<span>{dataUser.address}</span>
			</div>
			<div className="payment-product">
				<div className="price-product">
					<h3>Tạm tính</h3>
					<span>{sum(data.items)}</span>
				</div>
				<div className="discount-product">
					<h3>Giảm Giá</h3>
					<span>Free Ship</span>
					{/* <span>{sum(data.items)}</span> */}
				</div>
			</div>
			<div className="btn-payment-price">
				<button>Thanh Toán</button>
			</div>
		</div>
	);
};

export default PaymentProduct;
