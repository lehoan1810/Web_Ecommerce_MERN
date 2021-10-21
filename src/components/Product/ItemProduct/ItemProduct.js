import React from "react";
import { Link } from "react-router-dom";
import item1 from "../../../images/img4.jpg";
import Show from "../../../images/Show.png";
import Bag from "../../../images/Bag.png";
import Like from "../../../images/like.png";
import "./ItemProduct.css";

const ItemProduct = () => {
	// const history = useHistory();
	const linkTarget = (e) => {
		// e.preventDefault();
		// history.push("/product/detail/123");
		window.location.href = "/product/detail/123";
	};
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
					{/* <a to="" href="/product/detail/123" className="item-detail">
						<img className="item-detail-img" src={Show} alt="" />
					</a> */}
					<Link
						// to="/product/detail/123"
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
