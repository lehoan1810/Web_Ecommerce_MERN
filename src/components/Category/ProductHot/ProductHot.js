import React from "react";

import "./ProductHot.css";
import ItemProduct from "../../Product/ItemProduct/ItemProduct";

const ProductHot = () => {
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
