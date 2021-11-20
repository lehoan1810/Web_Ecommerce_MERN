import { Rate } from "antd";
import axios from "axios";
import React, { useState } from "react";
import { toast } from "react-toastify";
import authHeader from "../../../Service/AuthHeader.js";

const ModalEdit = ({ dataReview }) => {
	console.log(dataReview);
	const [review, setReview] = useState(dataReview.review);
	const [rating, setRating] = useState(dataReview.rating);
	// const [currentValue, setCurrentValue] = useState(1);

	// post review
	const url = `${process.env.REACT_APP_API_LOCAL}/api/v1/reviews/${dataReview._id}`;
	const onEditReview = () => {
		axios
			.patch(
				url,
				{
					review: review,
					rating: rating,
				},
				{ headers: authHeader() }
			)
			.then((res) => {
				toast.success("thành công");
				window.location.reload();
			})
			.catch((err) => {
				toast.error("faild");
			});
	};

	const onRating = (value) => {
		setRating(value);
	};

	return (
		<div className="form-rating">
			<div className="star-rating">
				<Rate onChange={onRating} value={rating} />
			</div>
			<div className="desc-rating">
				<textarea
					onChange={(e) => setReview(e.target.value)}
					placeholder="text"
					value={review}
				/>
			</div>
			<div className="button-rating">
				<button className="update-review" onClick={onEditReview}>
					Send
				</button>
			</div>
		</div>
	);
};

export default ModalEdit;
