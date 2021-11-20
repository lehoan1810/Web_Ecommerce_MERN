import React, { useEffect, useState } from "react";
import ItemProduct from "../../Product/ItemProduct/ItemProduct.js";
import Search from "../../../images/Search.png";
import { useParams } from "react-router-dom";
import axios from "axios";
import authHeader from "../../../Service/AuthHeader.js";

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
					console.log(res.data.products);
				})
				.catch((err) => console.log(err));
		};
		loadProduct();
	}, [url]);
	return (
		<div>
			<div className="menu-product-item">
				<div className="handel-item-product">
					<div className="simple-search">
						<input type="text" placeholder="Type here and hit Enter" />
						<button>
							<img className="img-search" src={Search} alt="" />
						</button>
					</div>
				</div>
				<div className="show-item-product">
					{dataProduct.map((item, id) => (
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
