import axios from "axios";
import React, { useState } from "react";
import { toast } from "react-toastify";
import logoPaypal from "../../../images/logoPaypal.png";
import logoVNPAY from "../../../images/logoVNPAY.png";
import authHeader from "../../../service/AuthHeader";
import "./style.css";

const SelectPayment = (props) => {
	const { idUser, code, voucher, totalPrice, address } = props;

	const [active, setActive] = useState(false);
	const [activeNone, setActiveNone] = useState(false);
	const [check, setCheck] = useState(0);
	const [loading, setLoading] = useState(false);
	const handleActive = (type) => {
		if (type === 1) {
			setActive(!active);
			setActiveNone(false);
			setCheck(1);
		} else if (type === 2) {
			setActiveNone(!activeNone);
			setActive(false);
			setCheck(2);
		} else {
			setCheck(0);
		}
	};
	const sum = (he, voucher) => {
		if (he) {
			const itemsPrice = he.reduce((a, c) => a + c.price * c.qty, 0);
			console.log("giá tiền:", itemsPrice);
			return itemsPrice - itemsPrice * (voucher / 100);
			// return new Intl.NumberFormat("it-IT", {
			// 	style: "currency",
			// 	currency: "VND",
			// }).format(itemsPrice - itemsPrice * (voucher / 100));
		} else {
			return 0;
		}
	};
	console.log("show price: ", sum(totalPrice, voucher));
	const paypal = (checkType) => {
		const urlPaypal = `${process.env.REACT_APP_API_LOCAL}/api/v1/pay/${idUser}`;
		const urlVNPAY = `${process.env.REACT_APP_API_LOCAL}/api/v1/vnpay/create_payment_url`;
		setLoading(true);
		if (checkType === 1) {
			axios
				.post(
					urlPaypal,
					{
						code: code,
					},
					{ headers: authHeader() }
				)
				.then((res) => {
					console.log(res.data);
					window.location = res.data.forwardLink;
					setLoading(false);
				})
				.catch((err) => {
					console.log("faild", err);
					toast.error("faild");
					setLoading();
				});
		} else if (checkType === 2) {
			axios
				.post(
					urlVNPAY,
					{
						orderDescription: {
							totalPrice: sum(totalPrice, voucher),
							userId: idUser,
							name: "Đơn hàng",
							shippingAddress: address,
							status: 0,
						},
						language: "vn",
					},
					{ headers: authHeader() }
				)
				.then((res) => {
					console.log(res.data);
					window.location = res.data.url;
					setLoading(false);
				})
				.catch((err) => {
					console.log("faild", err);
					toast.error("faild");
					setLoading();
				});
		} else {
			console.log("có lỗi xảy ra, vui lòng thử lại");
		}
	};
	return (
		<div>
			<div className="card">
				<h3>Lựa chọn phương thức thanh toán</h3>
				<div className="card-body">
					<div className="payment-type">
						<h4>Choose payment method below</h4>
						<div className="types flex justify-space-between">
							<div
								onClick={() => handleActive(1)}
								className={active ? "type selected active" : "type"}
							>
								<div className="logo">
									<img src={logoPaypal} alt="" />
								</div>
								<div className="text">
									<p>Pay with PayPal</p>
								</div>
							</div>
							<div
								onClick={() => handleActive(2)}
								className={activeNone ? "type selected active" : "type"}
							>
								<div className="logo">
									<img src={logoVNPAY} alt="" />
								</div>
								<div className="text">
									<p>Pay with VN Pay</p>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="btn-payment-price">
					<button onClick={() => paypal(check)}>Thanh toán</button>
				</div>
				<div className="background-loading-center">
					{loading === true && <span>Đang xử lý...</span>}
				</div>
			</div>
		</div>
	);
};

export default SelectPayment;
