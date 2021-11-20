import axios from "axios";
import React from "react";
import { toast } from "react-toastify";
import authHeader from "../../../../../../service/AuthHeader.js";

const ModalDeleteProduct = ({ idData, setModalIsOpen }) => {
	const url = `${process.env.REACT_APP_API_LOCAL}/api/v1/category/deleteProductById`;

	const DeleteProduct = () => {
		axios
			.delete(url, { params: { id: idData }, headers: authHeader() })
			.then((res) => {
				toast.success("Delete Success ");
				window.location.reload();
			})
			.catch((err) => toast.error(err));
	};
	return (
		<div>
			<div className="custom-delete">
				<h1>Thông Báo</h1>
				<span>Bạn có muốn xóa</span>
				<div className="button-handle">
					<button
						onClick={() => setModalIsOpen(false)}
						className="btn-delete-cancel"
					>
						Cancel
					</button>
					<button onClick={DeleteProduct} className="btn-delete-user">
						Delete
					</button>
				</div>
			</div>
		</div>
	);
};

export default ModalDeleteProduct;
