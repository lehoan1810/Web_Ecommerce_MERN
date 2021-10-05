import React from "react";
import { Link } from "react-router-dom";
import HeaderProduct from "../../Category/HeaderProduct/HeaderProduct";
import "./CategoryProduct.css";
import Slider from "../../Category/Slider/Slider";
import ItemProduct from "../../Product/ItemProduct/ItemProduct";
import Search from "../../../images/Search.png";

const CategoryProduct = () => {
	return (
		<div>
			<HeaderProduct />
			<div className="menu-product">
				<nav className="nav">
					{/* <i className="fal fa-bars menu-toggle"></i> */}
					<ul className="menu">
						<li className="menu-item has-child">
							<Link to="" href="#" className="menu-link">
								Bàn Phím
							</Link>
							<ul className="menu-child">
								<li className="menu-child-item has-child">
									<Link to="" href="#" className="menu-child-link">
										Chuột Logitech
									</Link>
									<ul className="menu-child menu-child1">
										<li className="menu-child-item">
											<Link to="" href="#" className="menu-child-link">
												New
											</Link>
										</li>
									</ul>
								</li>
								<li className="menu-child-item">
									<Link to="" href="#" className="menu-child-link">
										Chuột Corsair
									</Link>
								</li>
								<li className="menu-child-item">
									<Link to="" href="#" className="menu-child-link">
										Chuột Glorious
									</Link>
								</li>
							</ul>
						</li>
						<li className="menu-item">
							<Link to="" href="#" className="menu-link">
								Discover
							</Link>
						</li>
						<li className="menu-item">
							<Link to="" href="#" className="menu-link">
								Explore
							</Link>
						</li>
						<li className="menu-item">
							<Link to="" href="#" className="menu-link">
								Category
							</Link>
						</li>
						<li className="menu-item">
							<Link to="" href="#" className="menu-link">
								Branding
							</Link>
						</li>
					</ul>
				</nav>
				{/* <Slider /> */}
			</div>
			<div className="menu-product-item">
				<div className="handel-item-product">
					<div className="simple-search">
						<input type="text" placeholder="Type here and hit Enter" />
						<button>
							<img className="img-search" src={Search} alt="" />
						</button>
					</div>
				</div>
				<div className="show-item-product">
					<ItemProduct />
					<ItemProduct />
					<ItemProduct />
					<ItemProduct />
					<ItemProduct />
				</div>
			</div>
		</div>
	);
};

export default CategoryProduct;
