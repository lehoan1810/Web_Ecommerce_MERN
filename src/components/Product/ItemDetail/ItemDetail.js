import React, { useEffect, useState } from "react";
import axios from "axios";
import { Rate } from "antd";
import { useParams } from "react-router-dom";
import { Link, useHistory } from "react-router-dom";
import Modal from "react-modal";
import { toast } from "react-toastify";
import parse from "html-react-parser/dist/html-react-parser";
import HeaderProduct from "../../Category/HeaderProduct/HeaderProduct.js";
import authHeader from "../../../service/AuthHeader.js";
import { getCurrentIdUser } from "../../../service/AuthService.js";
import FeedBack from "../FeedBack/FeedBack.js";
import ModalAccess from "../../Users/Client/Page/Purchase/Order/ModalRating";

// import image
import Like from "../../../images/like.png";
import Edit from "../../../images/Edit.png";
import Planes from "../../../images/airplane.png";
import Return from "../../../images/return.png";
import Payment from "../../../images/credit-card.png";
import Parameters from "./Parameters.js";
import "./ItemDetail.css";

const ItemDetail = () => {
	const { id } = useParams();
	const [dataDetail, setDataDetail] = useState("");
	const [review, setReview] = useState([]);
	const [dataUser, setDataUser] = useState([]);
	const [testData, setTestData] = useState([]);
	const historyback = useHistory();

	// test create review
	const [modalIsOpen, setModalIsOpen] = useState(false);
	const idUser = getCurrentIdUser();
	const urlUser = `${process.env.REACT_APP_API_LOCAL}/api/v1/users/profile/${idUser}`;
	useEffect(() => {
		const loadProfile = () => {
			if (idUser == null) return 0;
			axios
				.get(urlUser, { headers: authHeader() })
				.then((res) => {
					setDataUser(res.data.data.userData);
				})
				.catch((err) => console.log(err));
		};
		loadProfile();
	}, [urlUser, idUser]);
	//
	const url = `${process.env.REACT_APP_API_LOCAL}/api/v1/category/getProductDetail/${id}`;

	useEffect(() => {
		const loadDetail = () => {
			axios
				.get(url, { headers: authHeader() })
				.then((res) => {
					setDataDetail(res.data.product);
					setReview(res.data.product.reviews);
				})
				.catch((err) => console.log(err));
		};
		loadDetail();
	}, [url]);

	const [count, setCount] = useState(1);
	const Increase = () => {
		setCount(count + 1);
	};
	const Decrease = () => {
		count <= 1 ? setCount(1) : setCount(count - 1);
	};

	const urlAdd = `${process.env.REACT_APP_API_LOCAL}/api/v1/cart`;
	const onAddCart = () => {
		const UserId = getCurrentIdUser();

		if (!UserId) {
			toast.error("You need Login !!!", { autoClose: 1500 });
		} else {
			axios
				.post(urlAdd, { productId: id, qty: count }, { headers: authHeader() })
				.then((res) => {
					setTestData(res.data.data.doc.cart.items);
					toast.success("Add to Cart Success !!!", {
						autoClose: 1500,
					});
					window.location.reload();
				})
				.catch((err) => {
					console.log(err);
					toast.error("Faild");
				});
		}
	};

	const comeback = (item) => {
		// historyback.goBack();
		historyback.push(`/shop/category/${item}`);
	};
	console.log("testdata: ", testData);
	console.log("dataUser: ", dataUser.cart);

	return (
		<div className="product-background">
			<HeaderProduct data={testData} />
			<div className="btn-comeback">
				<button onClick={() => comeback(dataDetail.category)}>Back</button>
			</div>
			{dataDetail && (
				<div className="container-detail">
					<div className="container-detail-flex">
						<div className="detail-image">
							<img src={dataDetail.productPicture} alt="" />
							<Parameters dataDetail={dataDetail} />
						</div>
						<div className="detail-info-item">
							<h2 className="name-detail-item">{dataDetail.name}</h2>
							<span className="detail-version"></span>
							<span className="detail-description">
								{parse(dataDetail.description)}
							</span>
							<span className="detail-insurance">
								<Rate
									disabled
									allowHalf
									defaultValue={dataDetail.ratingsAverage}
								/>
								({dataDetail.ratingsQuantity})
							</span>
							<span className="detail-price">
								{new Intl.NumberFormat("it-IT", {
									style: "currency",
									currency: "VND",
								}).format(dataDetail.price)}
							</span>
							<div className="quantity-item">
								<button className="btn-quantity " onClick={Decrease}>
									-
								</button>
								<span>{count}</span>
								<button className="btn-quantity" onClick={Increase}>
									+
								</button>
							</div>
							<div className="handle-item-detail">
								<button onClick={() => onAddCart()} className="detail-add-card">
									Thêm vào giỏ hàng
								</button>
								<Link
									to="/product/cart"
									href=""
									onClick={onAddCart}
									className="buy-now"
								>
									Mua ngay
								</Link>
								<button className="detail-item-like">
									<img className="item-like-img" src={Like} alt="" />
								</button>
							</div>
							<div className="list-commit">
								<div className="item-commit">
									<img src={Planes} alt="" />
									<span>Free international shipping for order over $40</span>
								</div>
								<div className="item-commit">
									<img src={Payment} alt="" />
									<span>Secured Payment</span>
								</div>
								<div className="item-commit">
									<img src={Return} alt="" />
									<span>Return within 15 days</span>
								</div>
							</div>
						</div>
					</div>
				</div>
			)}

			{/* <FeedBack /> */}
			<div className="feedback">
				<div className="feedback-item">
					<h1>Đánh Giá - Nhận Xét Từ Khách Hàng</h1>
					<div className="info-review-handle">
						<div className="info-detail-review">
							<span className="number-detail-rating">
								{dataDetail.ratingsAverage}/5
							</span>

							<div className="rating-average">
								{dataDetail.ratingsAverage && (
									<Rate
										disabled
										allowHalf
										defaultValue={dataDetail.ratingsAverage}
									/>
								)}
								<span className="quantity-review">
									{dataDetail.ratingsQuantity} nhận xét
								</span>
							</div>
						</div>
						<button
							className="button-handel-create-review"
							onClick={() => setModalIsOpen(true)}
						>
							Add Review
							<img className="img-edit-review" src={Edit} alt="" />
						</button>
					</div>
					{review.map((item, id) => (
						<div key={id}>
							<FeedBack dataReview={item} />
						</div>
					))}
				</div>
			</div>
			<Modal
				isOpen={modalIsOpen}
				//err
				ariaHideApp={false}
				//
				onRequestClose={() => setModalIsOpen(false)}
				style={{
					overlay: {
						backgroundColor: "rgba(0,0,0,0.4)",
					},
					content: {
						width: "40rem",
						margin: "auto",
						height: "34rem",
					},
				}}
			>
				<ModalAccess
					idProduct={dataDetail.id}
					dataProduct={dataDetail.name}
					dataUser={dataUser}
					setModalIsOpen={setModalIsOpen}
				/>
			</Modal>
		</div>
	);
};

export default ItemDetail;
