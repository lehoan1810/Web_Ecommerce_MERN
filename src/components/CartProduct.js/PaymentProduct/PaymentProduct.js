import axios from "axios";
import React, { useEffect, useState } from "react";
import authHeader from "../../../service/AuthHeader.js";
import "./PaymentProduct.css";
import { getCurrentIdUser } from "../../../service/AuthService.js";
import { toast } from "react-toastify";
import Modal from "react-modal";
import ModalVoucher from "../Voucher/ModalVoucher.js";

const PaymentProduct = ({ dataCart, data }) => {
	const idUser = getCurrentIdUser();
	const [dataUser, setDataUser] = useState([]);
	const [loading, setLoading] = useState();
	const [modalIsOpen, setModalIsOpen] = useState(false);
	const [voucher, setVoucher] = useState(0);
	const [code, setCode] = useState("");
	const url = `${process.env.REACT_APP_API_LOCAL}/api/v1/users/profile/${idUser}`;

	useEffect(() => {
		const loadCart = () => {
			axios
				.get(url, { headers: authHeader() })
				.then((res) => {
					setDataUser(res.data.data.userData);
				})
				.catch((err) => console.log(err));
		};
		loadCart();
	}, [url, idUser]);
	const sum = (he, voucher) => {
		if (he) {
			const itemsPrice = he.reduce((a, c) => a + c.price * c.qty, 0);
			console.log("giá tiền:", itemsPrice);
			return new Intl.NumberFormat("it-IT", {
				style: "currency",
				currency: "VND",
			}).format(itemsPrice - itemsPrice * (voucher / 100));
		} else {
			return 0;
		}
	};

	const paypal = () => {
		const urlPaypal = `${process.env.REACT_APP_API_LOCAL}/api/v1/pay/${idUser}`;
		setLoading(true);

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
	};

	const idVoucher = (detailVoucher) => {
		console.log("max giam gia: ", detailVoucher.code);
		console.log("phần trăm: ", detailVoucher.discountPercent / 100);
		setVoucher(detailVoucher.discountPercent);
		setCode(detailVoucher.code);
	};

	return (
		<>
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
						<span>{sum(data.items, 0)}</span>
					</div>
					<div className="discount-product">
						<h3>Phí vận chuyển</h3>
						<span>Free Ship</span>
					</div>
					<div className="discount-product">
						<h3>Giảm Giá</h3>
						<span>{voucher}%</span>
					</div>
					<div className="discount-product">
						<h3>Tổng Tiền</h3>
						<span>{sum(data.items, voucher)}</span>
					</div>
					<div className="handle-discount">
						<h3 onClick={() => setModalIsOpen(true)}>Áp dụng mã giảm giá ?</h3>
					</div>
				</div>
				{dataCart && dataCart.length > 0 && (
					<div className="btn-payment-price">
						<button onClick={() => paypal(voucher)}>Thanh Toán</button>
					</div>
				)}
				{dataCart.length <= 0 && (
					<div className="btn-payment-price">
						<button>Không có sản phẩm để thanh toán</button>
					</div>
				)}
				<div className="background-loading-center">
					{loading === true && <span>Đang xử lý...</span>}
				</div>
			</div>
			<Modal
				isOpen={modalIsOpen}
				ariaHideApp={false}
				onRequestClose={() => setModalIsOpen(false)}
				style={{
					overlay: {
						backgroundColor: "rgba(0,0,0,0.4)",
					},
					content: {
						width: "40rem",
						margin: "auto",
						height: "20rem",
					},
				}}
			>
				<ModalVoucher
					// dataProduct={id}
					// data={getIdProduct}
					setModalIsOpen={setModalIsOpen}
					onVoucherClick={idVoucher}
				/>
			</Modal>
		</>
	);
};

export default PaymentProduct;
