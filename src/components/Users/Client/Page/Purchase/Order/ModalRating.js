import { Rate } from "antd";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import authHeader from "../../../../../../service/AuthHeader.js";
import {
	ref,
	uploadBytes,
	getDownloadURL,
	deleteObject,
} from "firebase/storage";
import { storage } from "../../../../../../firebase/config";

import uploadClound from "../../../../../../images/upload-clound.png";
// import { Upload } from "antd";

const ModalRating = ({ dataUser, dataProduct, idProduct }) => {
	const [review, setReview] = useState("");
	const [rating, setRating] = useState(1);

	const [imageUpload, setImageUpload] = useState([]);
	const [imageUrls, setImageUrls] = useState([]);
	const [loading, setLoading] = useState(false);

	// const imagesListRef = ref(storage, "images/");
	const onChangeImage = (e) => {
		setImageUpload([...e.target.files]);
		setLoading(true);
		uploadFile([...e.target.files]);
	};

	//upload image
	const uploadFile = (imageUpload) => {
		if (imageUpload.length === 0) {
			return;
		} else {
			// setLoading(true);
			for (let i = 0; i < imageUpload.length; i++) {
				const imageRef = ref(
					storage,
					`images/${Date.now() + imageUpload[i].name}`
				);
				setLoading(true);
				uploadBytes(imageRef, imageUpload[i]).then((snapshot) => {
					getDownloadURL(snapshot.ref).then((url) => {
						setImageUrls((prev) => [...prev, url]);
					});
				});
			}
		}
	};

	//Delete image
	const deleteFromFirebase = async (imageUrl) => {
		try {
			const storageRef = ref(storage, imageUrl);
			await deleteObject(storageRef);
			setImageUrls(imageUrls.filter((image) => image !== imageUrl));
		} catch (error) {
			console.log(error);
		}
	};

	// post review
	const url = `${process.env.REACT_APP_API_LOCAL}/api/v1/category/${idProduct}/reviews`;
	// const url = `http://localhost:5000/api/v1/category/${idProduct}/reviews`;
	const onCreateReview = () => {
		if (review === "") {
			toast.error("Đánh giá đang trống", { autoClose: 1500 });
			return 0;
		}
		axios
			.post(
				url,
				{
					name: dataUser.name,
					photo: dataUser.photo,
					review: review,
					rating: rating,
					photoReviews: imageUrls,
				},
				{ headers: authHeader() }
			)
			.then((res) => {
				toast.success("Đánh giá thành công!!!");
				window.location.reload();
			})
			.catch((err) => console.log("lỗi, vui lòng thử lại!"));
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
			<div className="photo-reviews">
				<label htmlFor="uploadFirebase">
					<div className="upload-firbase-label">
						<span>Chọn hình ảnh</span>
						<img src={uploadClound} alt="" />
					</div>
				</label>
				<input
					id="uploadFirebase"
					type="file"
					hidden
					multiple
					onChange={(event) => {
						onChangeImage(event);
					}}
				/>
			</div>
			<div className="show-image-upload">
				{imageUrls &&
					imageUrls.map((url, id) => {
						return (
							<div className="show-image-item" key={id}>
								<span
									className="delete-image-firebase"
									onClick={() => deleteFromFirebase(url)}
								>
									x
								</span>
								<img src={url} alt="" onLoad="loading..." />
							</div>
						);
					})}
			</div>

			<div className="desc-rating">
				<textarea
					onChange={(e) => setReview(e.target.value)}
					placeholder="text"
				/>
			</div>

			<div className="button-rating">
				<button onClick={onCreateReview}>
					<span>Gửi đánh giá</span>
				</button>
			</div>
		</div>
	);
};

export default ModalRating;
