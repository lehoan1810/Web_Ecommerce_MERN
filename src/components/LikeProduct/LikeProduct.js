import React from "react";
import HeaderProduct from "../Category/HeaderProduct/HeaderProduct.js";
import Footer from "../HomePage/Footer/Footer.js";
import TableLike from "./TableLike.js";
import "antd/dist/antd.css";
import "./LikeProduct.css";
import { Link } from "react-router-dom";

const LikeProduct = () => {
	// const [loading, setloading] = useState(false);
	const dataSource = [
		{
			key: "1",
			nameProduct: "Mike",
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
						Detail
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
			<HeaderProduct />
			<div className="table-product-like">
				<TableLike columns={columns} data={dataSource} />
			</div>
			<Footer />
		</div>
	);
};

export default LikeProduct;
