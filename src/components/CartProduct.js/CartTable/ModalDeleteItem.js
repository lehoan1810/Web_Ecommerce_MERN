import axios from "axios";
import React from "react";
import { toast } from "react-toastify";
import authHeader from "../../../Service/AuthHeader";

const ModalDeleteItem = ({ data, setModalIsOpen }) => {
	console.log(data);
	const urlDelete = `${process.env.REACT_APP_API_LOCAL}/api/v1/cart/deleteFromCart`;
	const onDelete = () => {
		axios
			.post(urlDelete, { productId: data._id }, { headers: authHeader() })
			.then((res) => {
				toast.success("delete success !!!");
				window.location.reload();
			})
			.catch((err) => toast.error("faild"));
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
					<button onClick={onDelete} className="btn-delete-user">
						Delete
					</button>
				</div>
			</div>
		</div>
	);
};

export default ModalDeleteItem;
