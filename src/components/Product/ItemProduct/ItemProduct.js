import React from "react";
import { Link } from "react-router-dom";
import Show from "../../../images/Show.png";
import Like from "../../../images/like.png";
import Bag from "../../../images/BagCart.png";
import "./ItemProduct.css";
import { toast } from "react-toastify";
import { getCurrentIdUser } from "../../../service/AuthService";
import axios from "axios";
import authHeader from "../../../service/AuthHeader";
import { Rate } from "antd";

const ItemProduct = ({ toggleType, data }) => {
	const linkTarget = (e) => {
		window.location.href = `/product/detail/${data._id}`;
	};
	const urlAdd = `${process.env.REACT_APP_API_LOCAL}/api/v1/cart`;
	const onAddCart = (id) => {
		const UserId = getCurrentIdUser();
		if (!UserId) {
			toast.error("You need Login !!!", {
				autoClose: 900,
				hideProgressBar: true,
			});
		} else {
			axios
				.post(urlAdd, { productId: id, qty: 1 }, { headers: authHeader() })
				.then((res) => {
					toast.success("Add to Cart Success !!!", {
						autoClose: 900,
						hideProgressBar: true,
					});
					window.location.reload();
				})
				.catch((err) => toast.error("Faild"));
		}
	};
	return (
		<div
			className={toggleType === "list" ? "product-item-list" : "product-item"}
		>
			<div className="card-form-product">
				<div className="image-card-product">
					<img src={data.productPicture} alt="" />
				</div>
				<div className="content-card-product">
					<div className="card-product-price">
						{new Intl.NumberFormat("it-IT", {
							style: "currency",
							currency: "VND",
						}).format(data.price)}
					</div>
					<div>
						<Rate
							className="show-star-product"
							disabled
							defaultValue={data.ratingsAverage}
						/>
						<span>{`(${data.ratingsAverage})`}</span>
					</div>
					<h2>{data.name}</h2>
					<div className="handle-card-item-product">
						<div className="flex-handle-card-item">
							<img src={Bag} alt="" />
							<img onClick={(e) => linkTarget(e)} src={Show} alt="" />
						</div>
						<button
							onClick={() => onAddCart(data._id)}
							className="handle-add-to-cart"
						>
							Add to Cart
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ItemProduct;
