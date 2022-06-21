import axios from "axios";
import React, { useState } from "react";
import { toast } from "react-toastify";
import authHeader from "../../../service/AuthHeader";
import "./Voucher.css";

const ModalVoucher = ({ setModalIsOpen, onVoucherClick }) => {
	const [voucher, setVoucher] = useState("");
	const handleVoucher = () => {
		const url = `${process.env.REACT_APP_API_LOCAL}/api/v1/vouchers/${voucher}`;
		axios
			.get(url, { headers: authHeader() })
			.then((res) => {
				console.log(res.data.data.voucher);
				onVoucherClick(res.data.data.voucher);
				toast.success("Áp dụng thành công !");
				setModalIsOpen(false);
			})
			.catch((err) => {
				// console.log(err.response);
				console.log(err);
				toast.error("lỗi, hãy thử lại!");
			});
	};

	return (
		<>
			<div className="form-voucher">
				<h3>Nhập mã giảm giá</h3>
				<input
					onChange={(e) => setVoucher(e.target.value)}
					placeholder="code..."
				></input>
				<div className="handel-modal-voucher">
					<div>
						<button
							onClick={() => setModalIsOpen(false)}
							className="btn-cancel-voucher"
						>
							Thoát
						</button>
					</div>
					<div>
						<button onClick={handleVoucher} className="btn-delete-cancel">
							Xác nhận
						</button>
					</div>
				</div>
			</div>
		</>
	);
};

export default ModalVoucher;
