import React from "react";
import HeaderProduct from "../Category/HeaderProduct/HeaderProduct.js";
import Footer from "../HomePage/Footer/Footer.js";
import "./CartProduct.css";
import CartTable from "./CartTable/CartTable.js";

const CartProduct = () => {
	return (
		<div>
			<HeaderProduct />
			<CartTable />
			<Footer />
		</div>
	);
};

export default CartProduct;
