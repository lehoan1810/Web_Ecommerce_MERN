import React, { useState, useEffect } from "react";
import TableProduct from "./TableProduct.js";
import { Input } from "antd";
import Modal from "react-modal";
import axios from "axios";
import "./ManagerProduct.css";
import CreateProduct from "./ModalCreate/CreateProduct.js";
import authHeader from "../../../../../../Service/AuthHeader.js";
import ModalUpdate from "./ModalUpdate/ModalUpdate.js";
const { Search } = Input;

const ManagerProduct = () => {
	const [loading, setloading] = useState(false);

	const [modalIsOpen, setModalIsOpen] = useState(false);
	const [selectCategory, setSelectCategory] = useState("");
	const [selectBrand, setSelectBrand] = useState("");
	const [dataCategory, setDataCategory] = useState([]);
	const [dataBrand, setDataBrand] = useState([]);

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
	const onSelectCategory = (e) => {
		setSelectCategory(e.target.value);
	};
	const onSelectBrand = (e) => {
		setSelectBrand(e.target.value);
		console.log(e.target.value);
	};

	// load product
	const urlProduct = `${process.env.REACT_APP_API_LOCAL}/api/v1/category/getProductsId/${selectBrand}`;

	const [dataProduct, setDataProduct] = useState([]);
	useEffect(() => {
		const loadProduct = () => {
			if (!selectBrand) {
				return 0;
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
	}, [urlProduct, selectBrand]);

	const [updateIsOpen, setUpdateIsOpen] = useState(false);
	const [idUpdate, setIdUpdate] = useState("");
	const onUpdate = (item, e) => {
		e.preventDefault();
		setIdUpdate(item);
		setUpdateIsOpen(true);
	};

	const columns = [
		{
			title: "Image",
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
		},

		{
			title: "Giá Sản Phẩm",
			dataIndex: "price",
			responsive: ["md"],
			key: "price",
		},

		{
			title: "Action",
			dataIndex: "action",
			key: "action",
			render: (item, products) => (
				<div>
					<button
						className="check-detail"
						onClick={(e) => onUpdate(products, e)}
					>
						Update
					</button>
				</div>
			),
		},
	];
	const [filterInput, setFilterInput] = useState("");
	const filterData = () => {
		if (filterInput === "") return dataProduct;

		if (isNaN(filterInput)) {
			return dataProduct.filter(({ name }) => name.includes(filterInput));
		}
		return dataProduct.filter(({ price }) => price === +filterInput);
	};

	return (
		<div>
			<div className="table-manager-product">
				<h2 className="title-admin">Quản Lý Sản Phẩm</h2>

				<div>
					<Search
						placeholder="input search text"
						allowClear
						enterButton="Search"
						size="large"
						onSearch={setFilterInput}
						className="search-product"
					/>
					<button
						className="create-product"
						onClick={() => setModalIsOpen(true)}
					>
						Create Product
					</button>
				</div>
				<div className="select-show">
					<select
						value={selectCategory}
						name="product"
						className="select-category"
						id="product"
						onChange={(e) => onSelectCategory(e)}
					>
						<option value="" disabled selected>
							Chọn category tương ứng
						</option>
						{dataCategory.map((item, id) => (
							<option className="option-item" key={id} value={item._id}>
								{item.name}
							</option>
						))}
					</select>
				</div>
				<div className="select-show-product">
					<select
						value={selectBrand}
						name="product"
						className="select-category"
						id="product"
						onChange={(e) => onSelectBrand(e)}
					>
						<option value="" disabled selected>
							Chọn brand
						</option>
						{dataBrand.map((item, id) => (
							<option className="option-item" key={id} value={item._id}>
								{item.name}
							</option>
						))}
					</select>
				</div>
				<TableProduct columns={columns} data={filterData()} loading={loading} />
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
						width: "60%",
						margin: "auto",
						height: "80%",
					},
				}}
			>
				<CreateProduct setModalIsOpen={setModalIsOpen} />
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
						width: "70rem",
						margin: "auto",
						height: "50rem",
					},
				}}
			>
				<ModalUpdate data={idUpdate} setModalIsOpen={setUpdateIsOpen} />
			</Modal>
		</div>
	);
};

export default ManagerProduct;
