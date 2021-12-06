import React from "react";
import { Link } from "react-router-dom";
import Show from "../../../images/Show.png";
import Like from "../../../images/like.png";
import Bag from "../../../images/Bag.png";
import "./ItemProduct.css";
import { toast } from "react-toastify";
import { getCurrentIdUser } from "../../../service/AuthService";
import axios from "axios";
import authHeader from "../../../service/AuthHeader";

const ItemProduct = ({ data }) => {
	const linkTarget = (e) => {
		window.location.href = `/product/detail/${data._id}`;
	};
	const urlAdd = `${process.env.REACT_APP_API_LOCAL}/api/v1/cart`;
	const onAddCart = (id) => {
		const UserId = getCurrentIdUser();
		if (!UserId) {
			toast.error("You need Login !!!", { autoClose: 1500 });
		} else {
			axios
				.post(urlAdd, { productId: id, qty: 1 }, { headers: authHeader() })
				.then((res) => {
					toast.success("Add to Cart Success !!!", { autoClose: 1500 });
					window.location.reload();
				})
				.catch((err) => toast.error("Faild"));
		}
	};
	return (
		<div className="product-item">
			<img className="product-item-img" src={data.productPicture} alt="" />
			<div className="description">
				<h3>{data.name}</h3>
				<p>{data.description}</p>
				<div className="item-detail-handel">
					<Link
						// to="/product/detail/123"
						to=""
						href="/product/detail/123"
						onClick={(e) => linkTarget(e)}
						className="item-detail"
					>
						<img className="item-detail-img" src={Show} alt="" />
					</Link>

					<Link to="/product/Like" href="" className="item-detail">
						<img className="item-detail-img" src={Like} alt="" />
					</Link>
					{/* <Link to="/product/Cart" href="" className="item-detail">
						<img className="item-detail-img" src={Bag} alt="" />
					</Link> */}
					<button onClick={() => onAddCart(data._id)} className="item-detail">
						<img className="item-detail-img" src={Bag} alt="" />
					</button>
				</div>
			</div>
		</div>
	);
};

export default ItemProduct;
