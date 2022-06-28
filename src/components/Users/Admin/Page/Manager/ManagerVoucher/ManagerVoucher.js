import axios from "axios";
import React, { useEffect, useState } from "react";
import authHeader from "../../../../../../service/AuthHeader";
import TableVoucher from "./TableVoucher";
import Modal from "react-modal";
import "./ManagerVoucher.css";
import ModalCreateVoucher from "./ModalCreateVoucher";
import { Select } from "antd";
import ModalDeleteVoucher from "./ModalDeleteVoucher";
import ModalUpdateVoucher from "./ModalUpdateVoucher";
const { Option } = Select;

const ManagerVoucher = () => {
	const [loading, setLoading] = useState(false);
	const [dataProduct, setDataProduct] = useState([]);
	const [modalIsOpen, setModalIsOpen] = useState(false);
	const [modalIsOpenDelete, setModalIsOpenDelete] = useState(false);
	const [modalIsOpenUpdate, setModalIsOpenUpdate] = useState(false);
	const [dataChange, setDataChange] = useState(null);
	const [userVoucher, setUserVoucher] = useState("");
	const [valid, setValid] = useState();

	const [idDelete, setIdDelete] = useState("");
	const onDelete = (item, e) => {
		e.preventDefault();
		setIdDelete(item._id);
		setModalIsOpenDelete(true);
	};

	const [idUpdate, setIdUpdate] = useState("");
	const onUpdate = (item, e) => {
		e.preventDefault();
		setIdUpdate(item);
		setModalIsOpenUpdate(true);
	};

	const dataUserVoucher = [
		{
			id: "1",
			userVoucher: "",
			name: "Tất cả",
		},
		{
			id: "2",
			userVoucher: "all",
			name: "Mọi tài khoản",
		},
		{
			id: "3",
			userVoucher: "user",
			name: "Một tài khoản",
		},
	];
	const dataValid = [
		{
			id: "1",
			valid: "",
			name: "Tất cả",
		},
		{
			id: "2",
			valid: true,
			name: "Còn sử dụng",
		},
		{
			id: "3",
			valid: false,
			name: "Ngừng sử dụng",
		},
	];

	const columns = [
		{
			title: "Mã Code",
			dataIndex: "code",
			responsive: ["md"],
			key: "code",
			render: (item) => (
				<div className="item-voucher-code">
					<span>{item}</span>
				</div>
			),
		},

		{
			title: "% giảm giá",
			dataIndex: "discountPercent",
			responsive: ["md"],
			key: "discountPercent",
			render: (item) => (
				<div className="item-voucher-discountPercent">
					<span>{item} %</span>
				</div>
			),
		},
		{
			title: "Đối tượng",
			dataIndex: "userVoucher",
			responsive: ["md"],
			key: "userVoucher",
			render: (item) => (
				<div className="item-voucher-discountPercent">
					{item === "all" ? <span>Mọi tài khoản</span> : <span>{item}</span>}
				</div>
			),
		},
		{
			title: "Nội dung",
			dataIndex: "describe",
			responsive: ["md"],
			key: "describe",
			render: (item) => (
				<div className="item-voucher-desc">
					<span>{item}</span>
				</div>
			),
		},
		{
			title: "Tình trạng",
			dataIndex: "valid",
			responsive: ["md"],
			key: "valid",
			render: (item) => (
				<div className="item-voucher-discountPercent">
					{item === true ? (
						<span className="onl-product">Còn hạn</span>
					) : (
						<span className="off-product">Hết hạn</span>
					)}
				</div>
			),
		},
		{
			title: "Xử lý",
			dataIndex: "action",
			key: "action",
			render: (item, products) => (
				<div className="handel-delete-update">
					<button
						className="check-detail"
						onClick={(e) => onUpdate(products, e)}
					>
						Sửa
					</button>
					<button
						className="check-delete"
						onClick={(e) => onDelete(products, e)}
					>
						Xóa
					</button>
				</div>
			),
		},
	];

	const urlProduct = `${process.env.REACT_APP_API_LOCAL}/api/v1/vouchers?duration=${valid}&userVouchers=${userVoucher}`;
	useEffect(() => {
		const loadProduct = () => {
			// if (dataUpdate) {
			// 	console.log("show dataTest: ", dataUpdate);
			// }
			setLoading(true);
			axios
				.get(urlProduct, { headers: authHeader() })
				.then((res) => {
					setDataProduct(res.data.data.data);
					console.log("show voucher: ", res.data.data.data);
					setLoading(false);
				})
				.catch((err) => console.log(err));
		};
		loadProduct();
	}, [urlProduct, valid, userVoucher, dataChange]);

	const onSelectUserVoucher = (item) => {
		setUserVoucher(item);
	};
	const onSelectValid = (item) => {
		setValid(item);
	};
	const checkHandle = (item) => {
		setDataChange(item);
	};

	return (
		<div>
			<h2 className="title-admin">Quản Lý Voucher</h2>
			<div>
				<button className="create-product" onClick={() => setModalIsOpen(true)}>
					Tạo sản phẩm
				</button>
			</div>
			<br />
			<div className="select-show-product ">
				<Select
					defaultValue="Chọn tình trạng"
					style={{ width: "180px" }}
					onChange={onSelectUserVoucher}
				>
					{dataUserVoucher &&
						dataUserVoucher.map((item, id) => (
							<Option className="option-item" key={id} value={item.userVoucher}>
								{item.name}
							</Option>
						))}
				</Select>
			</div>
			<div className="select-show-product status-product-assistant">
				<Select
					defaultValue="Chọn đối tượng"
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

			<div>
				<TableVoucher columns={columns} data={dataProduct} loading={loading} />
			</div>
			<Modal
				isOpen={modalIsOpen}
				ariaHideApp={false}
				onRequestClose={() => setModalIsOpen(false)}
				style={{
					overlay: {
						backgroundColor: "rgba(0,0,0,0.4)",
					},
					content: {
						top: "50%",
						left: "50%",
						right: "auto",
						bottom: "auto",
						marginRight: "-50%",
						transform: "translate(-50%, -50%)",
						width: "50rem",
					},
				}}
			>
				<ModalCreateVoucher setModalIsOpen={setModalIsOpen} />
			</Modal>
			<Modal
				isOpen={modalIsOpenDelete}
				ariaHideApp={false}
				onRequestClose={() => setModalIsOpenDelete(false)}
				style={{
					overlay: {
						backgroundColor: "rgba(0,0,0,0.4)",
					},
					content: {
						width: "30rem",
						margin: "auto",
						height: "20rem",
					},
				}}
			>
				<ModalDeleteVoucher
					setModalIsOpen={setModalIsOpenDelete}
					idData={idDelete}
					productUpdate={checkHandle}
				/>
			</Modal>
			<Modal
				isOpen={modalIsOpenUpdate}
				ariaHideApp={false}
				onRequestClose={() => setModalIsOpenUpdate(false)}
				style={{
					overlay: {
						backgroundColor: "rgba(0,0,0,0.4)",
					},
					content: {
						top: "50%",
						left: "50%",
						right: "auto",
						bottom: "auto",
						marginRight: "-50%",
						transform: "translate(-50%, -50%)",
						width: "50rem",
					},
				}}
			>
				<ModalUpdateVoucher
					setModalIsOpen={setModalIsOpenUpdate}
					idUpdate={idUpdate}
					productUpdate={checkHandle}
				/>
			</Modal>
		</div>
	);
};

export default ManagerVoucher;
