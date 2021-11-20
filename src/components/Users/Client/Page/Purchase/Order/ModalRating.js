import { Rate } from "antd";
import axios from "axios";
import React, { useState } from "react";
import { toast } from "react-toastify";
import authHeader from "../../../../../../service/AuthHeader.js";

const ModalRating = ({ dataUser, dataProduct }) => {
	console.log("user review: ", dataUser);
	console.log("id product: ", dataProduct);
	const [review, setReview] = useState("");
	const [rating, setRating] = useState(1);
	// const [currentValue, setCurrentValue] = useState(1);

	// post review
	const url = `${process.env.REACT_APP_API_LOCAL}/api/v1/category/${dataProduct}/reviews`;
	const onCreateReview = () => {
		axios
			.post(
				url,
				{
					name: dataUser.name,
					photo: dataUser.photo,
					review: review,
					rating: rating,
				},
				{ headers: authHeader() }
			)
			.then((res) => {
				toast.success("thành công");
				window.location.reload();
			})
			.catch((err) => console.log(err));
	};

	const onRating = (value) => {
		setRating(value);
	};

	return (
		<div className="form-rating">
			<div className="user-rating">
				<h3>Tên User: </h3>
				<span>{dataUser.name}</span>
			</div>

			<div className="product-rating">
				<h3>Tên Sản Phẩm:</h3>
				<span>{dataProduct}</span>
			</div>
			<div className="star-rating">
				<Rate onChange={onRating} value={rating} />
			</div>
			<div className="desc-rating">
				<textarea
					onChange={(e) => setReview(e.target.value)}
					placeholder="text"
				/>
			</div>
			<div className="button-rating">
				<button onClick={onCreateReview}>Send</button>
			</div>
		</div>
	);
};

export default ModalRating;
