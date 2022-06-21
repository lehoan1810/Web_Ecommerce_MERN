import axios from "axios";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import authHeader from "../../../../../../service/AuthHeader.js";
import "./ManagerCategory.css";
import ModalCreateCategory from "./ModalCreateCategory.js";
import Modal from "react-modal";

const ManagerCategory = () => {
	const [category, setCategory] = useState([]);
	const [nameCategory, setNameCategory] = useState("");
	const [modalIsOpen, setModalIsOpen] = useState(false);

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

	const onDelete = (id) => {
		let urlDelete = `${process.env.REACT_APP_API_LOCAL}/api/v1/category/deleteCategory/${id}`;
		axios
			.delete(urlDelete, { headers: authHeader() })
			.then((res) => {
				toast.success("Delete Success !!!");
				window.location.reload();
			})
			.catch((err) => toast.error(err));
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
												<button
													onClick={() => onDelete(item._id)}
													className="action-delete"
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
