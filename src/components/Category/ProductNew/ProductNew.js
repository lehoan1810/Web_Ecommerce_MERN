import axios from "axios";
import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import New from "../../../images/crown.png";
import authHeader from "../../../service/AuthHeader";
import Like from "../../../images/Heart-new.png";
import Detail from "../../../images/Show-new.png";
import Cart from "../../../images/Buy-new.png";
import "./ProductNew.css";
import { Link } from "react-router-dom";

const ProductNew = () => {
	const [newProducts, setNewProducts] = useState([]);
	const url = `${process.env.REACT_APP_API_LOCAL}/api/v1/category/get5ProductsNew`;

	useEffect(() => {
		const loadUser = () => {
			axios
				.get(url, { headers: authHeader() })
				.then((res) => {
					setNewProducts(res.data.products);
					console.log("users: ", res.data.products);
				})
				.catch((err) => console.log(err));
		};
		loadUser();
	}, [url]);
	var settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 4,
		slidesToScroll: 3,
	};
	return (
		<div>
			<div className="container-product-new">
				<h2 className="title-product-new">
					Sản phẩm mới
					<img className="icon-product-new" src={New} alt="" />
				</h2>

				<div className="list-product-new">
					<Slider {...settings}>
						{newProducts &&
							newProducts.map((item, id) => (
								<div key={id}>
									<div className="container-new-products">
										<div className="new-product-image">
											<img
												className="img-new-product"
												src={item.productPicture}
												alt=""
											/>
										</div>
										<div className="new-product-icon">
											<div>
												<Link to="">
													<img src={Cart} alt="" />
												</Link>
											</div>
											<div>
												<Link to="">
													<img src={Like} alt="" />
												</Link>
											</div>
											<div>
												<Link to={`product/detail/${item.id}`}>
													<img src={Detail} alt="" />
												</Link>
											</div>
										</div>
										<div className="new-product-desc">
											<span>{item.name}</span>
											<h3 className="price">
												{new Intl.NumberFormat("it-IT", {
													style: "currency",
													currency: "VND",
												}).format(item.price)}
											</h3>
										</div>
										{/* <div className="new-product-icon"></div> */}
									</div>
								</div>
							))}
					</Slider>
				</div>
			</div>
		</div>
	);
};

export default ProductNew;
