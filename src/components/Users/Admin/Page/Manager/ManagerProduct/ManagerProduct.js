import React from "react";
import { Link } from "react-router-dom";
import TableProduct from "./TableProduct";

const ManagerProduct = () => {
	// const [loading, setloading] = useState(false);
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
					<Link
						to="./detail"
						className="check-detail"
						// onClick={(e) => onDetail(teacher.idTeacher, e)}
					>
						Accept
					</Link>
					<button
						className="check-delete"
						// onClick={(e) => onAssign(teacher.idTeacher, e)}
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
				<TableProduct columns={columns} data={dataSource} />
			</div>
		</div>
	);
};

export default ManagerProduct;
