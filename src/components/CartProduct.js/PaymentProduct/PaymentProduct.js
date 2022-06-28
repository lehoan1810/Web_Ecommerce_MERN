import axios from "axios";
import React, { useEffect, useState } from "react";
import authHeader from "../../../service/AuthHeader.js";
import "./PaymentProduct.css";
import { getCurrentIdUser } from "../../../service/AuthService.js";
import { toast } from "react-toastify";
import Modal from "react-modal";
import ModalVoucher from "../Voucher/ModalVoucher.js";
import SelectPayment from "../SelectPayment/index.js";
import ModalProfile from "../../Users/Client/Page/Profile/ModalProfile/ModalProfile.js";

const PaymentProduct = ({ dataCart, data }) => {
	const idUser = getCurrentIdUser();
	const [dataUser, setDataUser] = useState([]);
	const [loading, setLoading] = useState();
	const [modalIsOpen, setModalIsOpen] = useState(false);
	const [isOpenSelect, setIsOpenSelect] = useState(false);
	const [isOpenUpdate, setIsOpenUpdate] = useState(false);
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
			console.log("show he nef: ", he);
			const itemsPrice = he
				.filter(({ isWorking }) => isWorking === true)
				.reduce((a, c) => a + c.price * c.qty, 0);
			console.log("giá tiền:", itemsPrice);
			return new Intl.NumberFormat("it-IT", {
				style: "currency",
				currency: "VND",
			}).format(itemsPrice - itemsPrice * (voucher / 100));
		} else {
			return 0;
		}
	};

	// const paypal = () => {
	// 	const urlPaypal = `${process.env.REACT_APP_API_LOCAL}/api/v1/pay/${idUser}`;
	// 	setLoading(true);

	// 	axios
	// 		.post(
	// 			urlPaypal,
	// 			{
	// 				code: code,
	// 			},
	// 			{ headers: authHeader() }
	// 		)
	// 		.then((res) => {
	// 			console.log(res.data);
	// 			window.location = res.data.forwardLink;
	// 			setLoading(false);
	// 		})
	// 		.catch((err) => {
	// 			console.log("faild", err);
	// 			toast.error("faild");
	// 			setLoading();
	// 		});
	// };

	const idVoucher = (detailVoucher) => {
		console.log("max giam gia: ", detailVoucher.code);
		console.log("phần trăm: ", detailVoucher.discountPercent / 100);
		setVoucher(detailVoucher.discountPercent);
		setCode(detailVoucher.code);
	};

	const checkIsWorking = (dataCarts) => {
		return dataCarts.some((item) => item.isWorking === false);
	};

	return (
		<>
			<div className="form-payment">
				<span
					onClick={() => setIsOpenUpdate(true)}
					className="edit-address-payment"
				>
					Chỉnh sửa địa chỉ
				</span>
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
				{dataCart && dataCart.length > 0 && checkIsWorking(dataCart) === false && (
					<div className="btn-payment-price">
						{/* <button onClick={() => paypal(voucher)}>Thanh Toán</button> */}
						<button onClick={() => setIsOpenSelect(true)}>Thanh Toán</button>
					</div>
				)}
				{dataCart.length > 0 && checkIsWorking(dataCart) === true && (
					<div className="btn-payment-price">
						<button
							onClick={() =>
								toast.error(
									"Vui lòng xóa sản phẩm ngừng kinh doanh khỏi giỏ hàng",
									{ autoClose: 1500, hideProgressBar: true }
								)
							}
						>
							Thanh Toán
						</button>
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
						top: "50%",
						left: "50%",
						right: "auto",
						bottom: "auto",
						marginRight: "-50%",
						transform: "translate(-50%, -50%)",
						width: "50rem",
						// height: "40rem",
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
			<Modal
				isOpen={isOpenSelect}
				ariaHideApp={false}
				onRequestClose={() => setIsOpenSelect(false)}
				style={{
					overlay: {
						backgroundColor: "rgba(0,0,0,0.4)",
					},
					content: {
						width: "50rem",
						margin: "auto",
						height: "40rem",
					},
				}}
			>
				<SelectPayment
					// dataProduct={id}
					// data={getIdProduct}
					setIsOpenSelect={setIsOpenSelect}
					idUser={idUser}
					voucher={voucher}
					totalPrice={data.items}
					code={code}
					address={dataUser.address}
				/>
			</Modal>
			<Modal
				isOpen={isOpenUpdate}
				//err
				ariaHideApp={false}
				//
				onRequestClose={() => setIsOpenUpdate(false)}
				style={{
					overlay: {
						backgroundColor: "rgba(0,0,0,0.4)",
					},
					content: {
						width: "80rem",
						margin: "auto",
						height: "48rem",
					},
				}}
			>
				<ModalProfile data={dataUser} setModalIsOpen={setIsOpenUpdate} />
			</Modal>
		</>
	);
};

export default PaymentProduct;
