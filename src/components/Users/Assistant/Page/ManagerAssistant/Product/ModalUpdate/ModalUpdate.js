import axios from "axios";
import React, { useState } from "react";
import { toast } from "react-toastify";
import authHeader from "../../../../../../../service/AuthHeader.js";
import Loading from "../../../../../../Loading/Loading.js";
import upload from "../../../../../../../images/upload.png";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

const ModalUpdate = ({ data, setModalIsOpen }) => {
	console.log(data);
	const [name, setName] = useState(data.name);
	const [description, setDescription] = useState(data.description);
	const [price, setPrice] = useState(data.price);
	const [specification, setSpecification] = useState(data.specification);

	// post image
	const [imageSelected, setImageSelected] = useState(data.productPicture);
	const [loading, setLoading] = useState(false);
	const uploadImage = (e) => {
		const files = e.target.files[0];
		const formData = new FormData();
		formData.append("upload_preset", "xwfcqasw");
		formData.append("file", files);
		setLoading(true);

		axios
			.post("https://api.cloudinary.com/v1_1/dbml4nd68/image/upload", formData)
			.then((res) => {
				setImageSelected(res.data.secure_url);
				setLoading(false);
			})
			.catch((err) => console.log(err));
	};

	const urlUpdate = `${process.env.REACT_APP_API_LOCAL}/api/v1/category/updateProductById/${data._id}`;

	const onUpdate = () => {
		axios
			.patch(
				urlUpdate,
				{
					name: name,
					description: description,
					price: price,
					productPicture: imageSelected,
					specification: specification,
				},
				{
					headers: authHeader(),
				}
			)
			.then((res) => {
				console.log(res.data);
				toast.success("Create success");
				window.location.reload();
			})
			.catch((err) => {
				console.log(err);
				toast.error("faild");
			});
	};

	return (
		<div className="add-product">
			<div className="add-product-left">
				{loading ? (
					<Loading />
				) : (
					<img className="img-product-update" src={imageSelected} alt="" />
				)}
				<label className="custom-input-file">
					<img className="icon-upload" src={upload} alt="" />
					upload
					<input onChange={uploadImage} className="input-upload" type="file" />
				</label>
				<div className="button-add-product">
					<button className="btn-cancel" onClick={(e) => setModalIsOpen(false)}>
						Cancel
					</button>
					<button onClick={onUpdate}>Add Product</button>
				</div>
			</div>
			<div className="add-product-right">
				<div className="add-name-product add-item">
					<span>Name Product</span>
					<input
						onChange={(e) => setName(e.target.value)}
						placeholder={data.name}
						value={name}
					/>
				</div>
				<div className="add-price-product add-item">
					<span>Price Product</span>
					<input
						onChange={(e) => setPrice(e.target.value)}
						placeholder={data.price}
						value={price}
					/>
				</div>
				<div className="add-desc-product add-item">
					<span>Description Product</span>
					<CKEditor
						placeholder={data.description}
						editor={ClassicEditor}
						data={description}
						onChange={(event, editor) => {
							const data = editor.getData();
							setDescription(data);
						}}
					/>
					<span>Specification Product</span>
					<CKEditor
						placeholder={data.description}
						editor={ClassicEditor}
						data={specification}
						onChange={(event, editor) => {
							const data = editor.getData();
							setSpecification(data);
						}}
					/>
				</div>
			</div>
		</div>
	);
};

export default ModalUpdate;
