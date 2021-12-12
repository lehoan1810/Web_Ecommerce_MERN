import React, { useEffect, useState } from "react";
import { Rate } from "antd";
import HeaderProduct from "../../Category/HeaderProduct/HeaderProduct.js";
import { useParams } from "react-router-dom";
import Like from "../../../images/like.png";
import FeedBack from "../FeedBack/FeedBack.js";
import authHeader from "../../../service/AuthHeader.js";
import Edit from "../../../images/Edit.png";
import axios from "axios";
import { Link, useHistory } from "react-router-dom";
import "./ItemDetail.css";
import parse from "html-react-parser/dist/html-react-parser";

// test create review
import Modal from "react-modal";
import ModalAccess from "../../Users/Client/Page/Purchase/Order/ModalRating";
import { getCurrentIdUser } from "../../../service/AuthService.js";
import { toast } from "react-toastify";

const ItemDetail = () => {
	const { id } = useParams();
	const [dataDetail, setDataDetail] = useState("");
	const [review, setReview] = useState([]);
	const [dataUser, setDataUser] = useState([]);
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

					console.log(res.data.data.userData);
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
					console.log("data review: ", res.data.product);
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

	// format price VND

	// Add to cart
	const urlAdd = `${process.env.REACT_APP_API_LOCAL}/api/v1/cart`;
	const onAddCart = () => {
		const UserId = getCurrentIdUser();
		if (!UserId) {
			toast.error("You need Login !!!", { autoClose: 1500 });
		} else {
			axios
				.post(urlAdd, { productId: id, qty: count }, { headers: authHeader() })
				.then((res) => {
					toast.success("Add to Cart Success !!!", { autoClose: 1500 });
				})
				.catch((err) => toast.error("Faild"));
		}
	};

	const comeback = (item) => {
		// historyback.goBack();
		historyback.push(`/shop/category/${item}`);
	};

	return (
		<div className="product-background">
			<HeaderProduct />
			<div className="btn-comeback">
				<button onClick={() => comeback(dataDetail.category)}>Back</button>
			</div>
			{dataDetail && (
				<div className="container-detail">
					<div className="container-detail-flex">
						<div className="detail-image">
							<img src={dataDetail.productPicture} alt="" />
						</div>
						<div className="detail-info-item">
							<h2 className="name-detail-item">{dataDetail.name}</h2>
							<span className="detail-version">
								{/* Phiên bản Custom build chưa bao gồm: Switch, Keycap */}
							</span>
							<span>{parse(dataDetail.description)}</span>
							{/* <span className="detail-insurance">Bảo hành: 24 tháng</span> */}
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
								<button onClick={onAddCart} className="detail-add-card">
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
						height: "33rem",
					},
				}}
			>
				<ModalAccess
					dataProduct={id}
					dataUser={dataUser}
					setModalIsOpen={setModalIsOpen}
				/>
			</Modal>
		</div>
	);
};

export default ItemDetail;
