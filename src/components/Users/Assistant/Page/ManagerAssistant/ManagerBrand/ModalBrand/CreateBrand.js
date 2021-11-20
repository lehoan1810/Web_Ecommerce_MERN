import axios from "axios";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import authHeader from "../../../../../../../service/AuthHeader.js";
import "./CreateBrand.css";

const CreateBrand = () => {
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
	const onSelectCategory = (e) => {
		setSelectCategory(e.target.value);
	};

	const urlAddCategory = `${process.env.REACT_APP_API_LOCAL}/api/v1/category/create`;
	const onAddBrand = () => {
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
						placeholder="Name Product ..."
					/>
				</div>

				<div className="add-category-product add-item">
					<span>Select Category</span>
					<select
						value={selectCategory}
						name="product"
						className="select-category"
						id="product"
						onChange={(e) => onSelectCategory(e)}
					>
						<option value="" disabled selected>
							Chọn category tương ứng
						</option>
						{dataCategory.map((item, id) => {
							return (
								<option className="option-item" key={id} value={item._id}>
									{item.name}
								</option>
							);
						})}
					</select>
				</div>
				<div className="button-add-product">
					<button onClick={onAddBrand}>Add Product</button>
				</div>
			</div>
		</div>
	);
};

export default CreateBrand;
