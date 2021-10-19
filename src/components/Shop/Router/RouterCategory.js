import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HeaderProduct from "../../Category/HeaderProduct/HeaderProduct";
import MenuCategory from "../Category/MenuCategory";
import CategoryItem from "../CategoryItem/CategoryItem";

const RouterCategory = () => {
	return (
		<div>
			<HeaderProduct />
			<Router>
				<div className="form-category">
					<div className="sidebar-product">
						<MenuCategory />
					</div>
					<div className="siderbar-show-product">
						<Switch>
							<Route exact path="/shop/category/id" component={CategoryItem} />
						</Switch>
					</div>
				</div>
			</Router>
		</div>
	);
};

export default RouterCategory;
