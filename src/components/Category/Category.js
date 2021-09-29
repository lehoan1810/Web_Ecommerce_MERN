import React from "react";
import Content from "./Content/Content";
import HeaderProduct from "./HeaderProduct/HeaderProduct";
import ProductHot from "./ProductHot/ProductHot";
import Slider from "./Slider/Slider";
// import Footer from "../HomePage/Footer/Footer";

const Category = () => {
	return (
		<div>
			<HeaderProduct />
			<Slider />
			<Content />
			{/* <Footer /> */}
			<ProductHot />
		</div>
	);
};

export default Category;
