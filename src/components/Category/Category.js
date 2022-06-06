import React from "react";
import Content from "./Content/Content.js";
import HeaderProduct from "./HeaderProduct/HeaderProduct.js";
import Slider from "./Slider/Slider.js";
import Footer from "../HomePage/Footer/Footer.js";
import ProductNew from "./ProductNew/ProductNew.js";
import SliderNew from "./SliderNew/index.js";

const Category = () => {
	return (
		<div>
			<HeaderProduct />
			{/* <Slider /> */}
			<SliderNew />
			<Content />
			<ProductNew />
			<Footer />
		</div>
	);
};

export default Category;
