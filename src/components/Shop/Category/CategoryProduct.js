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
							onClick={item.subData && showSubnav}
						>
							<Link to="/shop/category/id" href="#" className="menu-link">
								{item.data}
							</Link>
							<div className="icon-handel">
								{item.subData && subnav ? (
									<img src={ArrowDown} alt="" />
								) : item.subData ? (
									<img src={ArrowUp} alt="" />
								) : null}
							</div>
						</li>
						{subnav &&
							item.subData.map((test, id) => (
								<div className="sub-item-product" key={id}>
									<span>{test.data}</span>
								</div>
							))}
					</ul>
				</div>
			</div>
		</div>
	);
};

export default CategoryProduct;
