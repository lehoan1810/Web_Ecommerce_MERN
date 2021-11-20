import React from "react";
import Content from "./Content/Content.js";
import HeaderProduct from "./HeaderProduct/HeaderProduct.js";
import Slider from "./Slider/Slider.js";
import Footer from "../HomePage/Footer/Footer.js";

const Category = () => {
	return (
		<div>
			<HeaderProduct />
			<Slider />
			<Content />
			{/* <Footer /> */}
			{/* <ProductHot /> */}
			<Footer />
		</div>
	);
};

export default Category;
