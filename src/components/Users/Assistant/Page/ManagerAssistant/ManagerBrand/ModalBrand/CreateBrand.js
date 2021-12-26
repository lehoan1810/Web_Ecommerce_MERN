import axios from "axios";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import authHeader from "../../../../../../../service/AuthHeader.js";
import { Select } from "antd";
import "./CreateBrand.css";
const { Option } = Select;

const CreateBrand = ({ setModalIsOpen }) => {
	const [dataCategory, setDataCategory] = useState([]);
	const [selectCategory, setSelectCategory] = useState("");
	const [name, setName] = useState("");

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
	const onSelectCategory = (item) => {
		setSelectCategory(item);
	};

	const urlAddCategory = `${process.env.REACT_APP_API_LOCAL}/api/v1/category/create`;
	const onAddBrand = () => {
		if (name === "") {
			toast.error("Name brand is empty!!!", { autoClose: 1500 });
			return 0;
		}
		if (selectCategory === "") {
			toast.error("No category selected !!!", { autoClose: 1500 });
			return 0;
		}
		if (name === "" && selectCategory === "") {
			toast.error("Information is empty !!!", { autoClose: 1500 });
			return 0;
		}
		axios
			.post(
				urlAddCategory,
				{
					name: name,
					parentId: selectCategory,
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
			<div className="add-product-right">
				<div className="add-name-product add-item">
					<span>Name Brand</span>
					<input
						onChange={(e) => setName(e.target.value)}
						placeholder="Name Brand ..."
					/>
				</div>

				<div className="add-category-product add-item-brand">
					<span className="titile-select">Select Category</span>

					<Select
						defaultValue="select brand"
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
				<div className="button-add-brand">
					<button className="btn-cancel" onClick={() => setModalIsOpen(false)}>
						Cancel
					</button>
					<button className="btn-add" onClick={onAddBrand}>
						Add Product
					</button>
				</div>
			</div>
		</div>
	);
};

export default CreateBrand;
