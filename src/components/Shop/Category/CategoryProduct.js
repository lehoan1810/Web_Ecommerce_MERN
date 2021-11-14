import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./CategoryProduct.css";
import ArrowUp from "../../../images/arrowUp.png";
import ArrowDown from "../../../images/arrowDown.png";

const CategoryProduct = ({ item, id }) => {
	const [subnav, setSubnav] = useState(false);

	const showSubnav = () => setSubnav(!subnav);
	return (
		<div>
			<div className="menu-product">
				<div className="nav">
					<ul className="menu">
						<li
							className="menu-item-product"
							onClick={item.children && showSubnav}
						>
							<span>{item.name}</span>
							<div className="icon-handel">
								{item.children && subnav ? (
									<img src={ArrowDown} alt="" />
								) : item.children ? (
									<img src={ArrowUp} alt="" />
								) : null}
							</div>
						</li>
						{subnav &&
							item.children.map((test, id) => (
								<div className="sub-item-product" key={id}>
									<Link
										to={`/shop/category/${test._id}`}
										href="#"
										className="menu-link"
									>
										{test.name}
									</Link>
								</div>
							))}
					</ul>
				</div>
			</div>
		</div>
	);
};

export default CategoryProduct;
