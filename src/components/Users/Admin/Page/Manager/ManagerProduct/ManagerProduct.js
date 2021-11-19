import axios from "axios";
import React, { useEffect, useState } from "react";
import authHeader from "../../../../../../Service/AuthHeader";
import TableProduct from "./TableProduct";
import Modal from "react-modal";
import ModalDeleteProduct from "./ModalDeleteProduct";

const ManagerProduct = () => {
	const [loading, setloading] = useState(false);
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
	};

	// load product

	const [dataProduct, setDataProduct] = useState([]);
	useEffect(() => {
		const urlProduct = `${process.env.REACT_APP_API_LOCAL}/api/v1/category/getProductsId/${selectBrand}`;
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
	}, [selectBrand]);
	const [modalIsOpen, setModalIsOpen] = useState(false);
	const [idDelete, setIdDelete] = useState("");
	const onDelete = (item, e) => {
		e.preventDefault();
		setIdDelete(item._id);
		setModalIsOpen(true);
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
					{/* <Link
						to="./detail"
						className="check-detail"
						// onClick={(e) => onDetail(teacher.idTeacher, e)}
					>
						Accept
					</Link> */}
					<button
						className="check-delete"
						onClick={(e) => onDelete(products, e)}
					>
						Delete
					</button>
				</div>
			),
		},
	];

	return (
		<div>
			<div className="table-manager-product">
				<h2 className="title-admin">Quản Lý Sản Phẩm</h2>
				<div></div>
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
				<ModalDeleteProduct idData={idDelete} setModalIsOpen={setModalIsOpen} />
			</Modal>
		</div>
	);
};

export default ManagerProduct;
