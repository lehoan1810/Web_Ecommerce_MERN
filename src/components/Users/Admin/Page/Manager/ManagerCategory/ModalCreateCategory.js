import React, { useState } from "react";
import axios from "axios";
import authHeader from "../../../../../../service/AuthHeader";
import { toast } from "react-toastify";
import {
	ref,
	uploadBytes,
	getDownloadURL,
	deleteObject,
} from "firebase/storage";
import { storage } from "../../../../../../firebase/config";
import "./ManagerCategory.css";
import imageDefault from "../../../../../../images/image-default.png";

const ModalCreateCategory = (prop) => {
	const { setModalIsOpen } = prop;

	const [nameCategory, setNameCategory] = useState("");
	const [imageCategory, setImageCategory] = useState("");
	const [imageUrls, setImageUrls] = useState("");

	const onChangeImage = (e) => {
		// setImageUpload([...e.target.files]);
		// setLoading(true);
		uploadFile(e.target.files[0]);
	};
	const uploadFile = (imageUpload) => {
		if (imageUpload === "") {
			return;
		} else {
			// setLoading(true);
			const imageRef = ref(
				storage,
				`category/${Date.now() + imageUpload.name}`
			);
			uploadBytes(imageRef, imageUpload).then((snapshot) => {
				getDownloadURL(snapshot.ref).then((url) => {
					setImageUrls(url);
				});
			});
		}
	};

	const urlCategory = `${process.env.REACT_APP_API_LOCAL}/api/v1/category/create`;

	const addCategory = () => {
		if (nameCategory === "") {
			toast.error("Category name is empty !!!", { autoClose: 1500 });
			return 0;
		}
		axios
			.post(
				urlCategory,
				{
					name: nameCategory,
					imageCategory: imageUrls,
				},
				{ headers: authHeader() }
			)
			.then((res) => {
				toast.success("Add Success !!!");
				console.log(res.data.categoryList);
				window.location.reload();
			})
			.catch((err) => toast.error(err));
	};

	return (
		<div className="form-create-category">
			<div className="item-input-category">
				<h1 className="title-form-category">Tạo Danh Mục</h1>
				<span>Nhập tên danh mục (*)</span>
				<div className="input-category-add">
					<input
						type="text"
						placeholder="..."
						onChange={(e) => setNameCategory(e.target.value)}
					/>
				</div>
				<div className="btn-handle-add-category">
					<button onClick={() => setModalIsOpen(false)}>Hủy</button>
					<button onClick={addCategory}>Tạo mới</button>
				</div>
			</div>
			<div className="item-image-category">
				<label htmlFor="imagesfirebase">
					<div className="item-image-dashed-border">
						<div className="item-image-relative ">
							<img
								src={imageUrls ? imageUrls : imageDefault}
								alt="upload-default"
							/>
						</div>
					</div>
				</label>
				<input
					id="imagesfirebase"
					type="file"
					onChange={onChangeImage}
					hidden
					multiple
					accept="image/*"
				/>
			</div>
		</div>
	);
};

export default ModalCreateCategory;
