import React from "react";
import "./Content.css";
import item1 from "../../../images/keyboard.png";
import item2 from "../../../images/mourse.png";
import item3 from "../../../images/headphone.png";
import item4 from "../../../images/screen.png";
import { Link } from "react-router-dom";

const Content = () => {
	return (
		<div className="product-category">
			<div className="category-select">
				<div className="title-category">
					<h1>Danh mục</h1>
				</div>
				<div className="Category-list">
					<div className="category-item">
						<img className="category-img" src={item1} alt="" />
						<Link to="/" href="" className="link-product">
							Bàn Phím
						</Link>
					</div>
					<div className="category-item">
						<img className="category-img" src={item2} alt="" />
						<Link to="/" href="" className="link-product">
							Chuột
						</Link>
					</div>
					<div className="category-item">
						<img className="category-img" src={item3} alt="" />
						<Link to="/" href="" className="link-product">
							Tai Nghe
						</Link>
					</div>
					<div className="category-item">
						<img className="category-img" src={item4} alt="" />
						<Link to="/" className="link-product">
							Màn hình
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Content;
