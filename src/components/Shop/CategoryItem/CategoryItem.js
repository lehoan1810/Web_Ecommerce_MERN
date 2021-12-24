import React, { useEffect, useState } from "react";
import ItemProduct from "../../Product/ItemProduct/ItemProduct.js";
import { useParams } from "react-router-dom";
import axios from "axios";
import authHeader from "../../../service/AuthHeader.js";
import { Pagination } from "antd";
import List from "../../../images/options-lines.png";
import Net from "../../../images/category.png";
import Filter from "../../../images/Filter.png";
import Search from "../../../images/searchProduct.png";
import "antd/dist/antd.css";
import "./CategoryItem.css";

const CategoryItem = () => {
	const { id } = useParams();
	const [dataProduct, setDataProduct] = useState([]);
	const [size, setSize] = useState([]);
	const [pageCurrent, setPageCurrent] = useState();

	const handelPagination = (page) => {
		setPageCurrent(page);
		console.log("page: ", page);
	};
	const url = `${process.env.REACT_APP_API_LOCAL}/api/v1/category/pagination/${id}/`;
	useEffect(() => {
		const loadProduct = () => {
			axios
				.get(
					url,
					{
						params: { page: pageCurrent, size: 8 },
					},
					{ headers: authHeader() }
				)
				.then((res) => {
					setDataProduct(res.data.products);
					setSize(res.data);

					console.log("dataProduct", res.data.products);
					console.log("pages size: ", res.data);
				})
				.catch((err) => console.log(err));
		};
		loadProduct();
	}, [url, pageCurrent]);

	// const maxPrice = () => {
	// 	const url = `http://localhost:5000/api/v1/category/sortMinMax/${id}`;
	// 	axios
	// 		.get(url, { headers: authHeader() })
	// 		.then((res) => {
	// 			setDataProduct(res.data.sortProduct);
	// 			console.log("min to max: ", res.data.sortProduct);
	// 		})
	// 		.catch((err) => console.log(err));
	// };

	// const minPrice = () => {
	// 	const url = `http://localhost:5000/api/v1/category/sortMaxMin/${id}`;
	// 	axios
	// 		.get(url, { headers: authHeader() })
	// 		.then((res) => {
	// 			setDataProduct(res.data.sortProduct);
	// 			console.log("max to min: ", res.data.sortProduct);
	// 		})
	// 		.catch((err) => console.log(err));
	// };
	const handleChange = (item) => {
		if (item === 1) {
			let url = `${process.env.REACT_APP_API_LOCAL}/api/v1/category/sortMaxMin/${id}`;
			axios
				.get(url, { headers: authHeader() })
				.then((res) => {
					setDataProduct(res.data.sortProduct);
					console.log("max to min: ", res.data.sortProduct);
				})
				.catch((err) => console.log(err));
		}
		if (item === 2) {
			let url = `${process.env.REACT_APP_API_LOCAL}/api/v1/category/sortMinMax/${id}`;
			axios
				.get(url, { headers: authHeader() })
				.then((res) => {
					setDataProduct(res.data.sortProduct);
					console.log("min to max: ", res.data.sortProduct);
				})
				.catch((err) => console.log(err));
		}
	};
	const [filterInput, setFilterInput] = useState("");
	const searchText = (e) => {
		setFilterInput(e.target.value);
	};
	const filterData = () => {
		if (filterInput === "") return dataProduct;

		if (isNaN(filterInput)) {
			return dataProduct.filter(({ name }) => name.includes(filterInput));
		}
		return dataProduct.filter(({ price }) => price <= filterInput);
	};

	return (
		<div>
			<div className="menu-product-item">
				<div className="handel-item-product">
					<div className="simple-search">
						<img src={Search} alt="" />
						<input
							onChange={(e) => searchText(e)}
							type="text"
							placeholder="Tìm kiếm sản phẩm"
						></input>
					</div>
					<div className="handel-product">
						<div className="layout-icon layout-list">
							<img src={List} alt="" />
						</div>
						<div className="layout-icon layout-net">
							<img src={Net} alt="" />
						</div>

						<div className="dropdown">
							<div className="dropdown__select">
								<span className="dropdown__selected">Sắp xếp</span>
								<img className="dropdown__icon" src={Filter} alt="" />
							</div>
							<ul className="dropdown__list">
								<div onClick={() => handleChange(1)} className="dropdown__item">
									<span className="dropdown__text">Cao đến thấp</span>
								</div>
								<div onClick={() => handleChange(2)} className="dropdown__item">
									<span className="dropdown__text">Thấp đến cao</span>
								</div>
							</ul>
						</div>
					</div>
				</div>
				<div className="show-item-product">
					{filterData().map((item, id) => (
						<div key={id} className="item-flex">
							<ItemProduct data={item} />
						</div>
					))}
				</div>
				<div className="pagination-list">
					{size && size.pages && (
						<Pagination
							current={size.current}
							pageSize={size.pages}
							onChange={(page) => handelPagination(page)}
							total={parseInt(size.pages) * parseInt(size.pages)}
						/>
					)}
				</div>
			</div>
		</div>
	);
};

export default CategoryItem;
