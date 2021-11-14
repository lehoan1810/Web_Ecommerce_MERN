import React, { useEffect, useState } from "react";
import { Input } from "antd";
import Modal from "react-modal";
import TableBrand from "./TableBrand";
import axios from "axios";
import CreateBrand from "./ModalBrand/CreateBrand";
const { Search } = Input;

const ManagerBrand = () => {
	// const [loading, setloading] = useState(false);
	const [modalIsOpen, setModalIsOpen] = useState(false);
	const [dataBrand, setDataBrand] = useState([]);

	const url = "http://localhost:5000/api/v1/category/getCategory";

	useEffect(() => {
		const loadProduct = () => {
			axios
				.get(url)
				.then((res) => {
					setDataBrand(res.data.categoryList);
					console.log(res.data.categoryList);
				})
				.catch((err) => console.log(err));
		};
		loadProduct();
	}, [url]);

	const columns = [
		{
			title: "Tên brand",
			dataIndex: "name",
			responsive: ["md"],
			key: "name",
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
						delete
					</button>
				</div>
			),
		},
	];

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
						// onSearch={setFilterInput}
						className="search-product"
					/>
				</div>
				<button className="create-product" onClick={() => setModalIsOpen(true)}>
					Create Product
				</button>

				<TableBrand columns={columns} data={dataBrand} />
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
						width: "30%",
						margin: "auto",
						height: "41%",
					},
				}}
			>
				<CreateBrand setModalIsOpen={setModalIsOpen} />
			</Modal>
		</div>
	);
};

export default ManagerBrand;
