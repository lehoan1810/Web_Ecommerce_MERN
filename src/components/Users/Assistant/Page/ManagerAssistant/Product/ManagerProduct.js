import React, { useState } from "react";
import TableProduct from "./TableProduct";
import { Input } from "antd";
import Modal from "react-modal";
import "./ManagerProduct.css";
import CreateProduct from "./ModalCreate/CreateProduct";
const { Search } = Input;

const ManagerProduct = () => {
	// const [loading, setloading] = useState(false);
	const [modalIsOpen, setModalIsOpen] = useState(false);
	const dataSource = [
		{
			key: "1",
			nameProduct: "xin cahf",
			priceProduct: 32,
			image: "http://www.techrum.vn/chevereto/images/2017/11/21/q4OQY.jpg",
		},
		{
			key: "2",
			nameProduct: "Mike",
			priceProduct: 32,
		},
		{
			key: "3",
			nameProduct: "Mike",
			priceProduct: 32,
		},
		{
			key: "4",
			nameProduct: "Mike",
			priceProduct: 32,
		},
	];
	const columns = [
		{
			title: "Image",
			dataIndex: "image",
			key: "image",
			render: (item) => (
				<div className="img-product-like">
					<img src={item} alt="" />
				</div>
			),
		},

		{
			title: "Tên Sản Phẩm",
			dataIndex: "nameProduct",
			responsive: ["md"],
			key: "nameProduct",
		},

		{
			title: "Giá Sản Phẩm",
			dataIndex: "priceProduct",
			responsive: ["md"],
			key: "priceProduct",
		},

		{
			title: "Action",
			dataIndex: "action",
			key: "action",
			render: (item, teacher) => (
				<div>
					<button
						className="check-detail"
						// onClick={(e) => onAssign(teacher.idTeacher, e)}
					>
						Detail
					</button>
				</div>
			),
		},
	];
	const [filterInput, setFilterInput] = useState("");
	const filterData = () => {
		if (filterInput === "") return dataSource;

		if (isNaN(filterInput)) {
			return dataSource.filter(({ nameProduct }) =>
				nameProduct.includes(filterInput)
			);
		}
		return dataSource.filter(
			({ priceProduct }) => priceProduct === +filterInput
		);
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
				</div>
				<button className="create-product" onClick={() => setModalIsOpen(true)}>
					Create Product
				</button>

				<TableProduct columns={columns} data={filterData()} />
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
						width: "50%",
						margin: "auto",
						height: "65%",
					},
				}}
			>
				<CreateProduct setModalIsOpen={setModalIsOpen} />
			</Modal>
		</div>
	);
};

export default ManagerProduct;
