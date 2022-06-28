import React, { useEffect, useState } from "react";
import { Input, Select } from "antd";
import "./ManagerVoucher.css";
import authHeader from "../../../../../../service/AuthHeader";
import axios from "axios";
import { toast } from "react-toastify";
const { Option } = Select;
const { TextArea } = Input;

const ModalCreateVoucher = ({ setModalIsOpen }) => {
	const [code, setCode] = useState("");
	const [discountPercent, setDiscountPercent] = useState("");
	const [describe, setDescribe] = useState("");
	const [valid, setValid] = useState(true);
	const [userVoucher, setUserVoucher] = useState("all");
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
	const urlAddCategory = `${process.env.REACT_APP_API_LOCAL}/api/v1/vouchers`;
	const onAddClass = () => {
		if (code === "" && discountPercent === "" && describe === "") {
			toast.error("Thông tin đang được để trống", {
				autoClose: 1500,
				hideProgressBar: true,
			});
			return;
		}

		axios
			.post(
				urlAddCategory,
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
				window.location.reload();
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
					placeholder="..."
					onChange={(e) => setCode(e.target.value)}
				/>
			</div>
			<div className="select-userVoucher">
				<span className="span-select-voucher">Tình trạng</span>
				<div className="select-show-product ">
					<Select
						defaultValue="Chọn tình trạng"
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
						defaultValue="Chọn đối tượng"
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
					placeholder="..."
					onChange={(e) => setDiscountPercent(e.target.value)}
				/>
			</div>
			<div className="title-send-email">
				<span>Nội dung giảm giá </span>
				<TextArea
					rows={4}
					placeholder="Nội dung ..."
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

export default ModalCreateVoucher;
