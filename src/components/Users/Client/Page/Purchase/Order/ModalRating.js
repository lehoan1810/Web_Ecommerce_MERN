import { Rate } from "antd";
import React, { useState } from "react";

const ModalRating = () => {
	const [currentValue, setCurrentValue] = useState(1);
	const rating = (value) => {
		setCurrentValue(value);
	};

	return (
		<div className="form-rating">
			<div className="user-rating">
				<h3>Tên User: </h3>
				<span>Hồng Ghi</span>
			</div>

			<div className="product-rating">
				<h3>Tên Sản Phẩm:</h3>
				<span>Bàn Phím Cơ</span>
			</div>
			<div className="star-rating">
				<Rate onChange={rating} value={currentValue} />
			</div>
			<div className="desc-rating">
				<textarea placeholder="text" />
			</div>
			<div className="button-rating">
				<button>Send</button>
			</div>
		</div>
	);
};

export default ModalRating;
