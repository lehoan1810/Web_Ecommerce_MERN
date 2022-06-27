import axios from "axios";
import React, { useEffect, useState } from "react";
import authHeader from "../../../service/AuthHeader.js";
import PaymentProduct from "../PaymentProduct/PaymentProduct.js";
import Modal from "react-modal";
import "./CartTable.css";
import { toast } from "react-toastify";
import ModalDeleteItem from "./ModalDeleteItem.js";
import imgIncrease from "../../../images/increase.png";
import imgDecrease from "../../../images/decrease.png";

const CartTable = () => {
	// const [count, setCount] = useState(0);
	const [dataCart, setDataCart] = useState([]);
	const [dataUser, setDataUser] = useState([]);
	const [modalIsOpen, setModalIsOpen] = useState(false);
	const [getIdProduct, setGetIdproduct] = useState("");
	const [itemDataDelete, setItemDataDelete] = useState(null);

	//Delete item from cart
	const urlCart = `${process.env.REACT_APP_API_LOCAL}/api/v1/cart`;
	useEffect(() => {
		const loadCart = () => {
			axios
				.get(urlCart, { headers: authHeader() })
				.then((res) => {
					setDataUser(res.data.data.doc);
					setDataCart(res.data.data.doc.items);
					console.log("xem: ", res.data.data.doc.items);
				})
				.catch((err) => console.log(err));
		};
		loadCart();
	}, [urlCart, itemDataDelete]);

	//
	const Increase = (productId, id) => {
		// setCount(count + 1);
		const urlIncrease = `${process.env.REACT_APP_API_LOCAL}/api/v1/cart`;
		const dataRaw = [...dataCart];
		dataRaw[id].qty = parseInt(dataRaw[id].qty) + 1;
		axios
			.post(
				urlIncrease,
				{ productId: productId, qty: 1 },
				{ headers: authHeader() }
			)
			.then((res) => {
				console.log("thành công");
				setDataCart(dataRaw);
			})
			.catch((err) => console.log(err));
	};
	const Decrease = (productId, id) => {
		const urlDecrease = `${process.env.REACT_APP_API_LOCAL}/api/v1/cart/decreaseFromCart`;
		const dataRaw = [...dataCart];
		dataRaw[id].qty = parseInt(dataRaw[id].qty) - 1;
		if (dataRaw[id].qty < 1) {
			toast.warning("Số lượng không nhỏ hơn 1!", {
				autoClose: 1500,
				hideProgressBar: true,
			});
			return;
		}

		axios
			.post(
				urlDecrease,
				{ productId: productId, qty: 1 },
				{ headers: authHeader() }
			)
			.then((res) => {
				console.log("thành công");
				setDataCart(dataRaw);
			})
			.catch((err) => console.log(err));
	};

	const totalOneProduct = (qty, price) => {
		let total = qty * price;
		return new Intl.NumberFormat("it-IT", {
			style: "currency",
			currency: "VND",
		}).format(total);
	};

	const onGetIdproduct = (id) => {
		setModalIsOpen(true);
		setGetIdproduct(id);
	};
	const checkDataDelete = (item) => {
		setItemDataDelete(item);
	};

	return (
		<div className="cart-table">
			<div className="table">
				<table>
					<thead>
						<tr>
							<th>Sản Phẩm</th>
							<th>Tên Sản Phẩm</th>
							<th>Đơn Giá</th>
							<th>Số Lượng</th>
							<th>Số Tiền</th>
							<th>Thao Tác</th>
						</tr>
					</thead>
					{dataCart.map((item, id) => (
						<tbody key={id}>
							{/* <h1>{sum(item.qty, item.price)}</h1> */}
							{item.isWorking === false ? (
								<tr className="hidden-off-product">
									<td>
										<div className="image-text image-text-off">
											<img src={item.productPicture} alt="" />
											<span className="">Ngừng kinh doanh</span>
										</div>
									</td>
									<td className="name-prodcut">{item.productName}</td>
									<td>
										{new Intl.NumberFormat("it-IT", {
											style: "currency",
											currency: "VND",
										}).format(item.price)}
									</td>
									<td>
										<div className="count-cart-product">
											<button
												className="btn-dec "
												onClick={() => {
													toast.error("Sản phẩm đã ngừng kinh doanh", {
														autoClose: 1500,
														hideProgressBar: true,
													});
												}}
											>
												<img
													className="onChange-qty"
													src={imgDecrease}
													alt=""
												/>
											</button>
											<span>{item.qty}</span>
											<button
												className="btn-inc"
												onClick={() => {
													toast.error("Sản phẩm đã ngừng kinh doanh", {
														autoClose: 1500,
														hideProgressBar: true,
													});
												}}
											>
												<img
													className="onChange-qty"
													src={imgIncrease}
													alt=""
												/>
											</button>
										</div>
									</td>
									<td>
										<span>{totalOneProduct(item.qty, item.price)}</span>
									</td>
									<td>
										<div className="action-handel">
											<button
												onClick={() => onGetIdproduct(item.productId)}
												className="action-delete"
											>
												Xóa
											</button>
										</div>
									</td>
								</tr>
							) : (
								<tr>
									<td>
										<div className="image-text">
											<img src={item.productPicture} alt="" />
										</div>
									</td>
									<td className="name-prodcut">{item.productName}</td>
									<td>
										{new Intl.NumberFormat("it-IT", {
											style: "currency",
											currency: "VND",
										}).format(item.price)}
									</td>
									<td>
										<div className="count-cart-product">
											<button
												className="btn-dec "
												onClick={() => Decrease(item.productId, id)}
											>
												<img
													className="onChange-qty"
													src={imgDecrease}
													alt=""
												/>
											</button>
											<span>{item.qty}</span>
											<button
												className="btn-inc"
												onClick={() => Increase(item.productId, id)}
											>
												<img
													className="onChange-qty"
													src={imgIncrease}
													alt=""
												/>
											</button>
										</div>
									</td>
									<td>
										<span>{totalOneProduct(item.qty, item.price)}</span>
									</td>
									<td>
										<div className="action-handel">
											<button
												onClick={() => onGetIdproduct(item.productId)}
												className="action-delete"
											>
												Xóa
											</button>
										</div>
									</td>
								</tr>
							)}
						</tbody>
					))}
				</table>
			</div>
			<PaymentProduct dataCart={dataCart} data={dataUser} />
			<Modal
				isOpen={modalIsOpen}
				ariaHideApp={false}
				onRequestClose={() => setModalIsOpen(false)}
				style={{
					overlay: {
						backgroundColor: "rgba(0,0,0,0.4)",
					},
					content: {
						width: "30rem",
						margin: "auto",
						height: "20rem",
					},
				}}
			>
				<ModalDeleteItem
					// dataProduct={id}
					data={getIdProduct}
					setModalIsOpen={setModalIsOpen}
					checkDelete={checkDataDelete}
				/>
			</Modal>
		</div>
	);
};

export default CartTable;
