import React from "react";
import HeaderProduct from "../Category/HeaderProduct/HeaderProduct";
import Footer from "../HomePage/Footer/Footer";
import "./CartProduct.css";
import CartTable from "./CartTable/CartTable";
// import PaymentProduct from "./PaymentProduct/PaymentProduct";

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
