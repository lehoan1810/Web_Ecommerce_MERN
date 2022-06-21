import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HeaderProduct from "../../Category/HeaderProduct/HeaderProduct.js";
import MenuCategory from "../Category/MenuCategory.js";
import CategoryItem from "../CategoryItem/CategoryItem.js";

const RouterCategory = () => {
	return (
		<div>
			<HeaderProduct />
			<Router>
				<div className="form-category">
					<div className="sidebar-product">
						<MenuCategory />
					</div>
					<div className="siderbar-show-product siderbar-product-relative">
						<Switch>
							<Route exact path="/shop/category/:id" component={CategoryItem} />
							{/* <Route path="/product/detail/:id" component={ItemDetail} /> */}
						</Switch>
					</div>
				</div>
			</Router>
		</div>
	);
};

export default RouterCategory;
