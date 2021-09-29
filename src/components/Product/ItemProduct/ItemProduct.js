import React from "react";
import { Link } from "react-router-dom";
import item1 from "../../../images/img4.jpg";
import Show from "../../../images/Show.png";
import Bag from "../../../images/Bag.png";
import Like from "../../../images/like.png";
import "./ItemProduct.css";

const ItemProduct = () => {
	return (
		<div className="product-item">
			<img className="product-item-img" src={item1} alt="" />
			<div className="description">
				<h3>Mountain Morning</h3>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
					eiusmod.
				</p>
				<div className="item-detail-handel">
					<Link to="/product/detail" className="item-detail" href="#">
						<img className="item-detail-img" src={Show} alt="" />
					</Link>
					<button className="item-detail">
						<img className="item-detail-img" src={Like} alt="" />
					</button>
					<button className="item-detail">
						<img className="item-detail-img" src={Bag} alt="" />
					</button>
				</div>
			</div>
		</div>
	);
};

export default ItemProduct;
