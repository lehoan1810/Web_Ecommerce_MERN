import React, { useEffect, useState } from "react";
import { Input } from "antd";
import Modal from "react-modal";
import TableBrand from "./TableBrand.js";
import axios from "axios";
import CreateBrand from "./ModalBrand/CreateBrand.js";
import { Select } from "antd";
import "./ManagerBrand.css";

const { Option } = Select;
const { Search } = Input;

const ManagerBrand = () => {
	const [loading, setloading] = useState(false);
	const [modalIsOpen, setModalIsOpen] = useState(false);
	const [dataBrand, setDataBrand] = useState([]);
	const [itemBrand, setItemBrand] = useState([]);

	const url = `${process.env.REACT_APP_API_LOCAL}/api/v1/category/getCategory`;

	useEffect(() => {
		const loadProduct = () => {
			setloading(true);
			axios
				.get(url)
				.then((res) => {
					setDataBrand(res.data.categoryList);
					console.log(res.data.categoryList);
					setloading(false);
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
						Xóa
					</button>
				</div>
			),
		},
	];
	const handleChange = (item) => {
		const test = `${process.env.REACT_APP_API_LOCAL}/api/v1/category/getAllBrand/${item}`;
		setloading(true);
		axios
			.get(test)
			.then((res) => {
				setItemBrand(res.data.categoryList);
				console.log(res.data.categoryList);
				setloading(false);
			})
			.catch((err) => console.log(err));

		console.log(item);
	};

	return (
		<div>
			<div className="table-manager-product">
				<h2 className="title-admin">Quản Lý Nhãn Hiệu</h2>

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
				<button className="create-brand" onClick={() => setModalIsOpen(true)}>
					Tạo nhãn hiệu
				</button>
				<Select
					defaultValue="select brand"
					style={{ width: 120 }}
					onChange={handleChange}
				>
					{dataBrand &&
						dataBrand.map((item, id) => (
							<Option key={id} value={item._id}>
								{item.name}
							</Option>
						))}
				</Select>

				<TableBrand loading={loading} columns={columns} data={itemBrand} />
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
						width: "40rem",
						margin: "auto",
						height: "30rem",
					},
				}}
			>
				<CreateBrand setModalIsOpen={setModalIsOpen} />
			</Modal>
		</div>
	);
};

export default ManagerBrand;
