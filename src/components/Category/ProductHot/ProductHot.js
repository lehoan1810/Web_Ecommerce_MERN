import React, { useEffect } from "react";
import axios from "axios";

import "./ProductHot.css";
import ItemProduct from "../../Product/ItemProduct/ItemProduct.js";

const ProductHot = () => {
	const url = `${process.env.REACT_APP_API_LOCAL}/api/v1/products/`;
	useEffect(() => {
		const getPostsData = () => {
			axios
				.get(url)
				.then((res) => {
					console.log(res.data);
				})
				.catch((error) => console.log("lỗi"));
		};
		getPostsData();
	}, [url]);

	return (
		<div className="product-category">
			<h2 className="title-product-hot">Sản Phẩm HOT</h2>
			<div className="product-list">
				<ItemProduct />
				<ItemProduct />
				<ItemProduct />
				<ItemProduct />
			</div>
		</div>
	);
};

export default ProductHot;
