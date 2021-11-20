import React from "react";
import "./Slider.css";
import leftArrow from "../../../images/left-arrow.svg";
import rightArrow from "../../../images/right-arrow.svg";

export default function BtnSlider({ direction, moveSlide }) {
	return (
		<button
			onClick={moveSlide}
			className={direction === "next" ? "btn-slide next" : "btn-slide prev"}
		>
			<img alt="" src={direction === "next" ? rightArrow : leftArrow} />
		</button>
	);
}
