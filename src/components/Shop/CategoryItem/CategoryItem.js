import React from "react";
import ItemProduct from "../../Product/ItemProduct/ItemProduct";
import Search from "../../../images/Search.png";

const CategoryItem = () => {
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
					<div className="item-flex">
						<ItemProduct />
					</div>
					<div className="item-flex">
						<ItemProduct />
					</div>
					<div className="item-flex">
						<ItemProduct />
					</div>

					<div className="item-flex">
						<ItemProduct />
					</div>
				</div>
			</div>
		</div>
	);
};

export default CategoryItem;
