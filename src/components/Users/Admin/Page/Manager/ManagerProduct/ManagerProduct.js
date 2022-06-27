import axios from "axios";
import React, { useEffect, useState } from "react";
import authHeader from "../../../../../../service/AuthHeader.js";
import TableProduct from "./TableProduct.js";
import Modal from "react-modal";
import ModalDeleteProduct from "./ModalDeleteProduct.js";
import { Select } from "antd";
import "./ManagerProduct.css";
import ModalUpdate from "../../../../Assistant/Page/ManagerAssistant/Product/ModalUpdate/ModalUpdate.js";
const { Option } = Select;

const ManagerProduct = () => {
	const [loading, setloading] = useState(false);
	const [selectCategory, setSelectCategory] = useState("");
	const [selectBrand, setSelectBrand] = useState("");
	const [dataCategory, setDataCategory] = useState([]);
	const [dataBrand, setDataBrand] = useState([]);
	const [dataUpdate, setDataUpdate] = useState(null);
	const [statusWorking, setStatusWorking] = useState("");

	const statusProduct = [
		{
			id: "1",
			isWorking: "",
			name: "Tất cả",
		},
		{
			id: "2",
			isWorking: true,
			name: "Đang kinh doanh",
		},
		{
			id: "3",
			isWorking: false,
			name: "Ngừng kinh doanh",
		},
	];

	const url = `${process.env.REACT_APP_API_LOCAL}/api/v1/category/getCategory`;

	useEffect(() => {
		const loadProduct = () => {
			axios
				.get(url)
				.then((res) => {
					setDataCategory(res.data.categoryList);
					console.log(res.data.categoryList);
				})
				.catch((err) => console.log(err));
		};
		loadProduct();
	}, [url]);
	const test = `${process.env.REACT_APP_API_LOCAL}/api/v1/category/getAllBrand/${selectCategory}`;
	useEffect(() => {
		if (!selectCategory) {
			return 0;
		}
		const loadBrand = () => {
			axios
				.get(test)
				.then((res) => {
					setDataBrand(res.data.categoryList);
					console.log(res.data.categoryList);
				})
				.catch((err) => console.log(err));
		};
		loadBrand();
	}, [test, selectCategory]);
	const onSelectCategory = (item) => {
		setSelectCategory(item);
	};
	const onSelectBrand = (item) => {
		setSelectBrand(item);
	};

	// load product
	const onSelectStatus = (item) => {
		setStatusWorking(item);
	};
	const [dataProduct, setDataProduct] = useState([]);
	useEffect(() => {
		const urlProduct = `${process.env.REACT_APP_API_LOCAL}/api/v1/category/getProductsId/${selectBrand}?status=${statusWorking}`;
		const loadProduct = () => {
			if (!selectBrand) {
				return 0;
			}
			if (dataUpdate) {
				console.log("show dataTest: ", dataUpdate);
			}
			setloading(true);
			axios
				.get(urlProduct, { headers: authHeader() })
				.then((res) => {
					setDataProduct(res.data.products);
					console.log(res.data.products);
					setloading(false);
				})
				.catch((err) => console.log(err));
		};
		loadProduct();
	}, [selectBrand, dataUpdate, statusWorking]);
	const [modalIsOpen, setModalIsOpen] = useState(false);
	const [idDelete, setIdDelete] = useState("");
	const onDelete = (item, e) => {
		e.preventDefault();
		setIdDelete(item._id);
		setModalIsOpen(true);
	};
	const [updateIsOpen, setUpdateIsOpen] = useState(false);
	const [idUpdate, setIdUpdate] = useState("");
	const onUpdate = (item, e) => {
		e.preventDefault();
		setIdUpdate(item);
		setUpdateIsOpen(true);
	};

	const columns = [
		{
			title: "Hình ảnh",
			dataIndex: "productPicture",
			key: "productPicture",
			render: (item) => (
				<div className="img-product-like">
					<img src={item} alt="" />
				</div>
			),
		},

		{
			title: "Tên Sản Phẩm",
			dataIndex: "name",
			responsive: ["md"],
			key: "name",
			render: (item) => (
				<div className="desc-name-table-admin">
					<span>{item}</span>
				</div>
			),
		},

		{
			title: "Giá Sản Phẩm",
			dataIndex: "price",
			responsive: ["md"],
			key: "price",
			render: (item) => (
				<div>
					<span>
						{new Intl.NumberFormat("it-IT", {
							style: "currency",
							currency: "VND",
						}).format(item)}
					</span>
				</div>
			),
		},
		{
			title: "Tình trạng",
			dataIndex: "isWorking",
			responsive: ["md"],
			key: "isWorking",
			render: (item) => (
				<div>
					{item === false ? (
						<span className="off-product">Ngừng kinh doanh</span>
					) : (
						<span className="onl-product">Đang kinh doanh</span>
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
	const checkUpdate = (value) => {
		console.log("show value update: ", value);
		setDataUpdate(value);
	};
	return (
		<div>
			<div className="table-manager-product">
				<h2 className="title-admin">Quản Lý Sản Phẩm</h2>
				<div></div>
				<div className="select-show">
					<Select
						defaultValue="Lựa chọn danh mục"
						style={{ width: "180px" }}
						onChange={onSelectCategory}
					>
						{dataCategory &&
							dataCategory.map((item, id) => (
								<Option className="option-item" key={id} value={item._id}>
									{item.name}
								</Option>
							))}
					</Select>
				</div>
				<div className="select-show-product">
					<Select
						defaultValue="Lựa chọn nhãn hiệu"
						style={{ width: "180px" }}
						onChange={onSelectBrand}
					>
						{dataBrand &&
							dataBrand.map((item, id) => (
								<Option className="option-item" key={id} value={item._id}>
									{item.name}
								</Option>
							))}
					</Select>
				</div>
				<div className="select-show-product status-product-assistant">
					<Select
						defaultValue="Chọn tình trạng"
						style={{ width: "180px" }}
						onChange={onSelectStatus}
					>
						{statusProduct &&
							statusProduct.map((item, id) => (
								<Option className="option-item" key={id} value={item.isWorking}>
									{item.name}
								</Option>
							))}
					</Select>
				</div>
				<TableProduct columns={columns} data={dataProduct} loading={loading} />
			</div>
			<Modal
				isOpen={modalIsOpen}
				//err
				ariaHideApp={false}
				//
				onRequestClose={() => setModalIsOpen(false)}
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
				<ModalDeleteProduct
					idData={idDelete}
					setModalIsOpen={setModalIsOpen}
					productUpdate={checkUpdate}
				/>
			</Modal>
			<Modal
				isOpen={updateIsOpen}
				ariaHideApp={false}
				onRequestClose={() => setUpdateIsOpen(false)}
				style={{
					overlay: {
						backgroundColor: "rgba(0,0,0,0.4)",
					},
					content: {
						width: "80vw",
						margin: "auto",
						height: "60rem",
					},
				}}
			>
				<ModalUpdate
					data={idUpdate}
					setModalIsOpen={setUpdateIsOpen}
					productUpdate={checkUpdate}
				/>
			</Modal>
		</div>
	);
};

export default ManagerProduct;
