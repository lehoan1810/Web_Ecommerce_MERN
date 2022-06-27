import axios from "axios";
import React from "react";
import { toast } from "react-toastify";
import authHeader from "../../../service/AuthHeader.js";

const ModalDeleteItem = ({ data, setModalIsOpen, checkDelete }) => {
	console.log(data);

	const urlDelete = `${process.env.REACT_APP_API_LOCAL}/api/v1/cart/deleteFromCart`;
	const onDelete = () => {
		axios
			.post(urlDelete, { productId: data }, { headers: authHeader() })
			.then((res) => {
				toast.success("Xóa thành công !", {
					autoClose: 1500,
					hideProgressBar: true,
				});
				checkDelete(res.data);
				setModalIsOpen(false);
				window.location.reload();
			})
			.catch((err) =>
				toast.error("lỗi, hãy thử lại!", {
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
					<button onClick={onDelete} className="btn-delete-user">
						Xóa
					</button>
				</div>
			</div>
		</div>
	);
};

export default ModalDeleteItem;
