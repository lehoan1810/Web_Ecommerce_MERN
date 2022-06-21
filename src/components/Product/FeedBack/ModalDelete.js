import axios from "axios";
import React from "react";
import { toast } from "react-toastify";
import authHeader from "../../../service/AuthHeader";

const ModalDelete = ({ idReview, setModalIsOpen }) => {
	const onDelete = (id) => {
		const url = `${process.env.REACT_APP_API_LOCAL}/api/v1/reviews/${id}`;
		axios
			.delete(url, { headers: authHeader() })
			.then((res) => {
				toast.success("Xóa thành công!!!");
				window.location.reload();
			})
			.catch((err) => {
				toast.error("lỗi, vui lòng thử lại !");
			});
	};
	return (
		<>
			<div className="custom-delete">
				<h1>Thông Báo</h1>
				<span>Bạn có muốn xóa review này ?</span>
				<div className="button-handle">
					<button
						onClick={() => setModalIsOpen(false)}
						className="btn-delete-cancel"
					>
						Hủy
					</button>
					<button
						onClick={() => onDelete(idReview)}
						className="btn-delete-user"
					>
						Xóa
					</button>
				</div>
			</div>
		</>
	);
};

export default ModalDelete;
