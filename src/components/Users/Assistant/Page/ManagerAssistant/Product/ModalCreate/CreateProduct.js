import axios from "axios";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import authHeader from "../../../../../../../service/AuthHeader.js";
import Loading from "../../../../../../Loading/Loading.js";
import upload from "../../../../../../../images/upload.png";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import "./CreateProduct.css";
import { Select } from "antd";
const { Option } = Select;

const CreateProduct = ({ setModalIsOpen }) => {
	const [dataCategory, setDataCategory] = useState([]);
	const [dataBrand, setDataBrand] = useState([]);

	const [name, setName] = useState("");
	const [description, setDescription] = useState("");
	const [price, setPrice] = useState("");
	const [selectCategory, setSelectCategory] = useState("");
	const [selectBrand, setSelectBrand] = useState("");
	const [specification, setSpecification] = useState("");

	// post image
	const [imageSelected, setImageSelected] = useState("");
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
	//
	const url = `${process.env.REACT_APP_API_LOCAL}/api/v1/category/getCategory`;

	useEffect(() => {
		const loadProduct = () => {
			axios
				.get(url)
				.then((res) => {
					setDataCategory(res.data.categoryList);
					console.log(res.data.categoryList);
				})
				.catch((err) => console.log(err));
		};
		loadProduct();
	}, [url]);
	const test = `${process.env.REACT_APP_API_LOCAL}/api/v1/category/getAllBrand/${selectCategory}`;
	useEffect(() => {
		if (!selectCategory) {
			return 0;
		}
		const loadBrand = () => {
			axios
				.get(test)
				.then((res) => {
					setDataBrand(res.data.categoryList);
					console.log(res.data.categoryList);
				})
				.catch((err) => console.log(err));
		};
		loadBrand();
	}, [test, selectCategory]);
	// const onSelectCategory = (e) => {
	// 	setSelectCategory(e.target.value);
	// };
	// const onSelectBrand = (e) => {
	// 	setSelectBrand(e.target.value);
	// 	console.log(e.target.value);
	// };
	const onSelectCategory = (item) => {
		setSelectCategory(item);
	};
	const onSelectBrand = (item) => {
		setSelectBrand(item);
	};

	const urlAddCategory = `${process.env.REACT_APP_API_LOCAL}/api/v1/category/addproduct`;
	const onAddClass = () => {
		axios
			.post(
				urlAddCategory,
				{
					name: name,
					description: description,
					price: price,
					category: selectBrand,
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
					<img className="settings-img" src={imageSelected} alt="" />
				)}
				<label className="custom-input-file">
					<img className="icon-upload" src={upload} alt="" />
					upload
					<input onChange={uploadImage} className="input-upload" type="file" />
				</label>
				<div className="button-add-product">
					<button onClick={(e) => setModalIsOpen(false)} className="btn-cancel">
						Cancel
					</button>
					<button onClick={onAddClass}>Add Product</button>
				</div>
			</div>
			<div className="add-product-right">
				<div className="add-name-product add-item">
					<span>Name Product</span>
					<input
						onChange={(e) => setName(e.target.value)}
						placeholder="Name Product ..."
					/>
				</div>

				<div className="add-category-product add-item-brand">
					<span className="title-select-category">Select Category</span>
					<Select
						defaultValue="select Category"
						style={{ width: "100%" }}
						onChange={onSelectCategory}
					>
						{dataCategory &&
							dataCategory.map((item, id) => (
								<Option className="option-item" key={id} value={item._id}>
									{item.name}
								</Option>
							))}
					</Select>
				</div>
				<div className="add-category-product add-item-brand">
					<span className="title-select-category">Select Brand</span>
					<Select
						defaultValue="select brand"
						style={{ width: "100%" }}
						onChange={onSelectBrand}
					>
						{dataBrand &&
							dataBrand.map((item, id) => (
								<Option className="option-item" key={id} value={item._id}>
									{item.name}
								</Option>
							))}
					</Select>
				</div>

				<div className="add-price-product add-item">
					<span>Price Product</span>
					<input
						onChange={(e) => setPrice(e.target.value)}
						placeholder="Price Product ..."
					/>
				</div>
				<div className="add-desc-product add-item item-Editor">
					<span>Description Product</span>
					<CKEditor
						editor={ClassicEditor}
						data={description}
						onChange={(event, editor) => {
							const data = editor.getData();
							setDescription(data);
						}}
					/>
					<span>Specification Product</span>
					<CKEditor
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

export default CreateProduct;
