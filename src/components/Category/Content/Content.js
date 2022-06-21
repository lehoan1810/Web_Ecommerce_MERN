import React, { useEffect, useState } from "react";
import "./Content.css";
import item1 from "../../../images/keyboard.png";
import item2 from "../../../images/mourse.png";
import item3 from "../../../images/headphone.png";
import item4 from "../../../images/screen.png";
import { Link } from "react-router-dom";
import axios from "axios";
import SkeletonCategry from "../../../common/SkeletonCategory";

const Content = () => {
	const [category, setCategory] = useState([]);
	const [loading, setLoading] = useState(false);
	const url = `${process.env.REACT_APP_API_LOCAL}/api/v1/category/getCategory`;

	useEffect(() => {
		const loadProduct = () => {
			setLoading(true);
			axios
				.get(url)
				.then((res) => {
					setCategory(res.data.categoryList);
					console.log(res.data.categoryList);
				})
				.catch((err) => console.log(err))
				.finally(() => {
					setLoading(false);
				});
		};
		loadProduct();
	}, [url]);
	return (
		<div className="product-category">
			<div className="category-select">
				<div className="title-category">
					<h1>Danh Mục</h1>
				</div>
				{loading && <SkeletonCategry />}
				<div className="Category-list">
					{category &&
						category.map((item, id) => (
							<div key={id} className="category-item">
								<img
									className="category-img1"
									src={item.imageCategory}
									loading="lazy"
									alt=""
								/>
								<Link
									to={
										item.children.length > 0
											? `/shop/category/${item.children[0]._id}`
											: `/shop/category`
									}
									href=""
									className="link-product"
								>
									{item.name}
								</Link>
							</div>
						))}
					{/* <div className="category-item">
						<img className="category-img" src={item1} alt="" />
						<Link to="/shop/category" href="" className="link-product">
							Bàn Phím
						</Link>
					</div>
					<div className="category-item">
						<img className="category-img" src={item2} alt="" />
						<Link to="/shop/category" href="" className="link-product">
							Chuột
						</Link>
					</div>
					<div className="category-item">
						<img className="category-img" src={item3} alt="" />
						<Link to="/shop/category" href="" className="link-product">
							Tai Nghe
						</Link>
					</div>
					<div className="category-item">
						<img className="category-img" src={item4} alt="" />
						<Link to="/shop/category" className="link-product">
							Màn hình
						</Link>
					</div> */}
				</div>
			</div>
		</div>
	);
};

export default Content;
