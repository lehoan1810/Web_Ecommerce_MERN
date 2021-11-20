import axios from "axios";
import React, { useState, useEffect } from "react";
import authHeader from "../../../service/AuthHeader.js";
import CategoryProduct from "./CategoryProduct.js";

const MenuCategory = () => {
	const [data, setData] = useState([]);
	const url = `${process.env.REACT_APP_API_LOCAL}/api/v1/category/getCategory`;

	useEffect(() => {
		const loadProduct = () => {
			axios
				.get(url, { headers: authHeader() })
				.then((res) => {
					setData(res.data.categoryList);
					console.log(res.data.categoryList);
				})
				.catch((err) => console.log(err));
		};
		loadProduct();
	}, [url]);

	return (
		<div>
			{data.map((item, id) => (
				<div key={id}>
					<CategoryProduct id={id} item={item} />
				</div>
			))}
		</div>
	);
};

export default MenuCategory;
