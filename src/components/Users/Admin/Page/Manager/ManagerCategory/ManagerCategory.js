import axios from "axios";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import authHeader from "../../../../../../Service/AuthHeader";
import "./ManagerCategory.css";

const ManagerCategory = () => {
	const [category, setCategory] = useState([]);
	const [nameCategory, setNameCategory] = useState("");
	const url = `${process.env.REACT_APP_API_LOCAL}/api/v1/category/getCategory`;

	useEffect(() => {
		const loadProduct = () => {
			axios
				.get(url)
				.then((res) => {
					setCategory(res.data.categoryList);
					console.log(res.data.categoryList);
				})
				.catch((err) => console.log(err));
		};
		loadProduct();
	}, [url]);

	const urlCategory = `${process.env.REACT_APP_API_LOCAL}/api/v1/category/create`;

	const addCategory = () => {
		axios
			.post(
				urlCategory,
				{
					name: nameCategory,
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
		<div>
			<h2 className="title-admin">Quản Lý danh mục sản phẩm</h2>
			<div className="button-add-category">
				<input
					onChange={(e) => setNameCategory(e.target.value)}
					className="input-category"
					placeholder="nhập tên danh mục"
				/>
				<button onClick={addCategory} className="btn-add-category">
					tạo danh mục
				</button>
			</div>
			<div className="table-category">
				<div className="table">
					<table>
						<thead>
							<tr>
								<th>Danh mục</th>
								<th>Số lượng</th>
							</tr>
						</thead>
						<tbody>
							{category.map((item, id) => (
								<tr key={id}>
									<td>{item.name}</td>
									<td>{item.children.length}</td>
									<td>
										<div className="action-handel">
											<button className="action-delete">Delete</button>
										</div>
									</td>
								</tr>
							))}
						</tbody>
					</table>
				</div>
			</div>
		</div>
	);
};

export default ManagerCategory;
