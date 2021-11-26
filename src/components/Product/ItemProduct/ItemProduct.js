import React from "react";
import { Link } from "react-router-dom";
import Show from "../../../images/Show.png";
import Like from "../../../images/like.png";
import Bag from "../../../images/Bag.png";
import "./ItemProduct.css";

const ItemProduct = ({ data }) => {
	const linkTarget = (e) => {
		window.location.href = `/product/detail/${data._id}`;
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
					<Link to="/product/Cart" href="" className="item-detail">
						<img className="item-detail-img" src={Bag} alt="" />
					</Link>
				</div>
			</div>
		</div>
	);
};

export default ItemProduct;
