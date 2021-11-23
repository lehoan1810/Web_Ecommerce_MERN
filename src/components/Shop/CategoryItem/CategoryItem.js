import React, { useEffect, useState } from "react";
import ItemProduct from "../../Product/ItemProduct/ItemProduct.js";
// import Search from "../../../images/Search.png";
import { useParams } from "react-router-dom";
import axios from "axios";
import authHeader from "../../../service/AuthHeader.js";
import "antd/dist/antd.css";
import { Slider, Input } from "antd";
import "./CategoryItem.css";

const CategoryItem = () => {
	const { id } = useParams();
	const [dataProduct, setDataProduct] = useState([]);

	const url = `${process.env.REACT_APP_API_LOCAL}/api/v1/category/getProductsId/${id}`;
	useEffect(() => {
		const loadProduct = () => {
			axios
				.get(url, { headers: authHeader() })
				.then((res) => {
					setDataProduct(res.data.products);
					console.log("dataProduct", res.data.products);
				})
				.catch((err) => console.log(err));
		};
		loadProduct();
	}, [url]);

	const [filterInput, setFilterInput] = useState("");
	const searchText = (e) => {
		setFilterInput(e.target.value);
	};
	const onChange = (value) => {
		console.log("onChange: ", value);
		setFilterInput(value);
	};
	const [sortPrice, setSortPrice] = useState([]);
	const maxPrice = () => {
		setSortPrice(
			dataProduct.sort((a, b) => {
				return a.price - b.price;
			})
		);
		console.log(sortPrice);
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
						<input
							onChange={(e) => searchText(e)}
							type="text"
							placeholder="Tìm kiếm sản phẩm"
						/>
					</div>
					<div className="change-price">
						<button className="button-sort" onClick={maxPrice}>
							Sắp xếp tăng dần
						</button>
						<Slider
							className="range-search"
							min={500000}
							max={27000000}
							step={100000}
							defaultValue={500000}
							onChange={onChange}
						/>
						<Input
							className="input-number"
							style={{ width: "10rem" }}
							value={filterInput}
							defaultValue={500000}
						/>
					</div>
				</div>
				<div className="show-item-product">
					{filterData().map((item, id) => (
						<div key={id} className="item-flex">
							<ItemProduct data={item} />
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default CategoryItem;
