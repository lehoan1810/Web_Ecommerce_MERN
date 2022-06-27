import axios from "axios";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import authHeader from "../../../../../../service/AuthHeader.js";
import "./ManagerCategory.css";
import ModalCreateCategory from "./ModalCreateCategory.js";
import Modal from "react-modal";
import Loading from "../../../../../Loading/Loading.js";
import { Select } from "antd";
const { Option } = Select;

const ManagerCategory = () => {
	const [category, setCategory] = useState([]);
	const [checkDelete, setCheckDelete] = useState(null);
	const [modalIsOpen, setModalIsOpen] = useState(false);
	const [loading, setLoading] = useState(false);
	const [hasCategory, setHasCategory] = useState(-1);

	const url = `${process.env.REACT_APP_API_LOCAL}/api/v1/category/getCategory?haveProduct=${hasCategory}`;
	const dataHasCategory = [
		{
			id: "1",
			hasCategory: "",
			name: "Tất cả",
		},
		{
			id: "2",
			hasCategory: 2,
			name: "Đã có nhãn hiệu",
		},
		{
			id: "3",
			hasCategory: 1,
			name: "Chưa có nhãn hiệu",
		},
	];

	useEffect(() => {
		const loadProduct = () => {
			setLoading(true);
			axios
				.get(url)
				.then((res) => {
					setCategory(res.data.categoryList);
					console.log(res.data.categoryList);
					setLoading(false);
				})
				.catch((err) => console.log(err));
		};
		loadProduct();
	}, [url, checkDelete, hasCategory]);

	const onDelete = (id) => {
		let urlDelete = `${process.env.REACT_APP_API_LOCAL}/api/v1/category/deleteCategory/${id}`;
		axios
			.delete(urlDelete, { headers: authHeader() })
			.then((res) => {
				setCheckDelete(res.data);
				toast.success("Xóa danh mục thành công", {
					autoClose: 1500,
					hideProgressBar: true,
				});
			})
			.catch((err) =>
				toast.error("Lỗi, vui lòng thử lại!", {
					autoClose: 1500,
					hideProgressBar: true,
				})
			);
	};
	const handleChange = (item) => {
		setHasCategory(item);
	};

	return (
		<div>
			<div>
				<h2 className="title-admin">Quản Lý danh mục sản phẩm</h2>
				<div className="button-add-category">
					<button
						onClick={() => setModalIsOpen(true)}
						className="btn-add-category"
					>
						tạo danh mục
					</button>
					<div className="total-data-user">
						<span>Số Lượng: {category && category.length}</span>
					</div>
				</div>
				<div className="table-category">
					<div>
						<Select
							defaultValue="Lọc danh mục"
							style={{ width: 180 }}
							onChange={handleChange}
						>
							{dataHasCategory &&
								dataHasCategory.map((item, id) => (
									<Option key={id} value={item.hasCategory}>
										{item.name}
									</Option>
								))}
						</Select>
					</div>
					<br />
					<div className="table table-scroll">
						<table>
							<thead>
								<tr>
									<th>Danh mục</th>
									<th>Số lượng</th>
									<th>Thao tác</th>
								</tr>
							</thead>
							<tbody>
								{loading === true && (
									<tr className="loadings-center">
										<td colSpan={7}>
											<Loading />
										</td>
									</tr>
								)}
								{loading === false &&
									category.map((item, id) => (
										<tr key={id}>
											<td>{item.name}</td>
											<td>{item.children.length}</td>
											<td>
												<div className="action-handel">
													<button
														onClick={() => onDelete(item._id)}
														className="action-delete button-remove-category"
													>
														Xóa
													</button>
												</div>
											</td>
										</tr>
									))}
							</tbody>
						</table>
					</div>
				</div>
			</div>
			<Modal
				isOpen={modalIsOpen}
				//err
				ariaHideApp={false}
				//
				onRequestClose={() => setModalIsOpen(false)}
				style={{
					overlay: {
						backgroundColor: "rgba(0,0,0,0.4)",
					},
					content: {
						width: "60rem",
						margin: "auto",
						height: "25rem",
					},
				}}
			>
				<ModalCreateCategory setModalIsOpen={setModalIsOpen} />
			</Modal>
		</div>
	);
};

export default ManagerCategory;
