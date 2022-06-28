import React, { useEffect, useState } from "react";
import { Input, Select } from "antd";
import "./ManagerVoucher.css";
import authHeader from "../../../../../../service/AuthHeader";
import axios from "axios";
import { toast } from "react-toastify";
const { Option } = Select;
const { TextArea } = Input;

const ModalUpdateVoucher = ({ setModalIsOpen, productUpdate, idUpdate }) => {
	const [code, setCode] = useState(idUpdate.code);
	const [discountPercent, setDiscountPercent] = useState(
		idUpdate.discountPercent
	);
	const [describe, setDescribe] = useState(idUpdate.describe);
	const [valid, setValid] = useState(idUpdate.valid);
	const [userVoucher, setUserVoucher] = useState(idUpdate.userVoucher);
	const [dataUser, setDataUser] = useState([]);

	// fake data
	const dataValid = [
		{
			id: "1",
			valid: true,
			name: "Còn sử dụng",
		},
		{
			id: "2",
			valid: false,
			name: "Ngừng sử dụng",
		},
	];

	const url = `${process.env.REACT_APP_API_LOCAL}/api/v1/vouchers/getAllCustomerVoucher`;
	useEffect(() => {
		const loadUser = () => {
			// setLoading(true);
			axios
				.get(url, { headers: authHeader() })
				.then((res) => {
					setDataUser(res.data.data.users);
					// setLoading(false);
				})
				.catch((err) => console.log(err));
		};
		loadUser();
	}, [url]);

	//
	const urlUpdateVoucher = `${process.env.REACT_APP_API_LOCAL}/api/v1/vouchers/${idUpdate._id}`;
	const onAddClass = () => {
		if (code === "" && discountPercent === "" && describe === "") {
			toast.error("Thông tin đang được để trống", {
				autoClose: 1500,
				hideProgressBar: true,
			});
			return;
		}

		axios
			.patch(
				urlUpdateVoucher,
				{
					code: code,
					discountPercent: discountPercent,
					describe: describe,
					valid: valid,
					userVoucher: userVoucher,
				},
				{
					headers: authHeader(),
				}
			)
			.then((res) => {
				console.log(res.data);
				toast.success("Tạo thành công", {
					autoClose: 1500,
					hideProgressBar: true,
				});
				productUpdate(res.data);
				setModalIsOpen(false);
			})
			.catch((err) => {
				console.log(err);
				toast.error("lỗi, vui lòng thử lại!", {
					autoClose: 1500,
					hideProgressBar: true,
				});
			});
	};
	// function
	const onSelectValid = (item) => {
		setValid(item);
	};
	const onSelectUserVoucher = (item) => {
		setUserVoucher(item);
	};

	return (
		<div>
			<h1 className="title-email-contact">Tạo Voucher</h1>

			<div className="from-email">
				<span>Mã Code</span>
				<input
					type="text"
					onChange={(e) => setCode(e.target.value)}
					placeholder={idUpdate.code}
					value={code}
				/>
			</div>
			<div className="select-userVoucher">
				<span className="span-select-voucher">Tình trạng</span>
				<div className="select-show-product ">
					<Select
						defaultValue={valid}
						style={{ width: "180px" }}
						onChange={onSelectValid}
					>
						{dataValid &&
							dataValid.map((item, id) => (
								<Option className="option-item" key={id} value={item.valid}>
									{item.name}
								</Option>
							))}
					</Select>
				</div>
			</div>
			<div className="select-userVoucher input-show-userVoucher">
				<span className="span-select-voucher">Đối tượng</span>
				<div className="select-show-product ">
					<Select
						defaultValue={userVoucher}
						style={{ width: "250px" }}
						onChange={onSelectUserVoucher}
					>
						{dataUser &&
							dataUser.map((item, id) => (
								<Option className="option-item" key={id} value={item.email}>
									{item.email}
								</Option>
							))}
					</Select>
					<button
						className="all-user-voucher"
						type="button"
						onClick={() => {
							setUserVoucher("all");
						}}
					>
						Tất cả
					</button>
					<input type="text" value={userVoucher} disabled />
				</div>
			</div>
			<div className="to-email">
				<span>% giảm giá</span>
				<input
					type="text"
					placeholder={idUpdate.discountPercent}
					value={discountPercent}
					onChange={(e) => setDiscountPercent(e.target.value)}
				/>
			</div>
			<div className="title-send-email">
				<span>Nội dung giảm giá </span>
				<TextArea
					rows={4}
					placeholder={idUpdate.describe}
					value={describe}
					onChange={(e) => setDescribe(e.target.value)}
				/>
				{/* <input type="text" onChange={(e) => setDescribe(e.target.value)} /> */}
			</div>

			<div className="handel-email-user voucher-margin">
				<button
					onClick={() => setModalIsOpen(false)}
					className="email-user-cancel"
				>
					Hủy
				</button>
				<button onClick={onAddClass} className="email-user-send">
					Gửi
				</button>
			</div>
		</div>
	);
};

export default ModalUpdateVoucher;
