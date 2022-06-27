import axios from "axios";
import React from "react";
import { toast } from "react-toastify";
import authHeader from "../../../../../../service/AuthHeader.js";

const ModalDeleteProduct = ({ idData, setModalIsOpen, productUpdate }) => {
	const url = `${process.env.REACT_APP_API_LOCAL}/api/v1/category/deleteProductById`;

	const DeleteProduct = () => {
		axios
			.delete(url, { params: { id: idData }, headers: authHeader() })
			.then((res) => {
				toast.success("Xóa thành công !!! ", {
					autoClose: 1500,
					hideProgressBar: true,
				});
				setModalIsOpen(false);
				productUpdate(res.data);
				console.log(res.data);
			})
			.catch((err) =>
				toast.error("lỗi, vui lòng thử lại!", {
					autoClose: 1500,
					hideProgressBar: true,
				})
			);
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
						Hủy
					</button>
					<button onClick={DeleteProduct} className="btn-delete-user">
						Xóa
					</button>
				</div>
			</div>
		</div>
	);
};

export default ModalDeleteProduct;
