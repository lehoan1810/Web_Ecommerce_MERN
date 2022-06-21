import axios from "axios";
import React, { useEffect, useState } from "react";
import allProduct from "../../../../../../images/AllProducts.png";
import authHeader from "../../../../../../service/AuthHeader";

const StatisticsProduct = () => {
	const [countProducts, setCountProducts] = useState([]);
	const url = `${process.env.REACT_APP_API_LOCAL}/api/v1/category/getAllProduct`;

	useEffect(() => {
		const loadUser = () => {
			axios
				.get(url, { headers: authHeader() })
				.then((res) => {
					setCountProducts(res.data.allProducts);
					console.log("users: ", res.data.allProducts.length);
				})
				.catch((err) => console.log(err));
		};
		loadUser();
	}, [url]);
	return (
		<div>
			<div className="container-statistical">
				<div className="container-statistic-items">
					<span>Sản phẩm</span>
					<div className="data-statistic-user">
						<img src={allProduct} alt="" />
						<h2>{countProducts.length}</h2>
					</div>
				</div>
			</div>
		</div>
	);
};

export default StatisticsProduct;
