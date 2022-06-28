import axios from "axios";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import authHeader from "../../../service/AuthHeader";
import Coupon from "../../../images/coupon.png";
import "./Voucher.css";
import SkeletonVoucher from "../../../common/SkeletonVoucher";

const ModalVoucher = ({ setModalIsOpen, onVoucherClick }) => {
	// const [voucher, setVoucher] = useState("");
	const getEmail = sessionStorage.getItem("email");
	const [dataVoucher, setDataVoucher] = useState([]);
	const [chooseVoucher, setChooseVoucher] = useState("");
	const [loading, setLoading] = useState(false);

	const urlProduct = `${process.env.REACT_APP_API_LOCAL}/api/v1/vouchers`;
	useEffect(() => {
		const loadProduct = () => {
			// if (dataUpdate) {
			// 	console.log("show dataTest: ", dataUpdate);
			// }
			setLoading(true);
			axios
				.get(urlProduct, { headers: authHeader() })
				.then((res) => {
					setDataVoucher(res.data.data.data);
					// setLoading(false);
				})
				.catch((err) => console.log(err))
				.finally(() => {
					setLoading(false);
				});
		};
		loadProduct();
	}, [urlProduct]);

	const handleVoucher = () => {
		if (chooseVoucher === "") {
			toast.error("Vui lòng chọn mã giảm giá, hãy thử lại!", {
				autoClose: 1500,
				hideProgressBar: true,
			});
			return;
		}
		const url = `${process.env.REACT_APP_API_LOCAL}/api/v1/vouchers/${chooseVoucher}`;
		axios
			.get(url, { headers: authHeader() })
			.then((res) => {
				console.log(res.data.data.voucher);
				onVoucherClick(res.data.data.voucher);
				toast.success("Áp dụng thành công !", {
					autoClose: 1500,
					hideProgressBar: true,
				});
				setModalIsOpen(false);
			})
			.catch((err) => {
				// console.log(err.response);
				console.log(err);
				toast.error("lỗi, hãy thử lại!", {
					autoClose: 1500,
					hideProgressBar: true,
				});
			});
	};

	const checkConditionVoucher = (dataVoucher) => {
		const data = dataVoucher.filter((item) => {
			return (
				item.valid === true &&
				(item.userVoucher === "all" || item.userVoucher === getEmail)
			);
		});
		return data;
	};

	return (
		<>
			<div className="form-voucher">
				<h3>Nhập mã giảm giá</h3>
				<input
					// onChange={(e) => setVoucher(e.target.value)}
					value={chooseVoucher}
					placeholder="Mã code..."
					disabled
				></input>
				<div className="list-coupon">
					{loading === true && <SkeletonVoucher />}
					{loading === false &&
						dataVoucher &&
						checkConditionVoucher(dataVoucher).map((item, id) => (
							<div
								onClick={() => {
									setChooseVoucher(item.code);
								}}
								key={id}
								className="coupon-item"
								tabIndex={-1}
							>
								<img src={Coupon} alt="" />
								<div className="coupon-item-desc">
									<h2>{item.code}</h2>
									<span className="coupon-item-desc-discount">
										GIẢM {item.discountPercent}%
									</span>
									<span className="coupon-item-desc-content">
										{item.describe}
									</span>
								</div>
							</div>
						))}
				</div>
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
