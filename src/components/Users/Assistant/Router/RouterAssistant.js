import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HeaderProduct from "../../../Category/HeaderProduct/HeaderProduct.js";
import Footer from "../../../HomePage/Footer/Footer.js";
import DashboardAssistant from "../Dashboard/DashboardAssistant.js";
import Profile from "../../Client/Page/Profile/Profile.js";
import DetailUser from "../Page/ManagerAssistant/DetailUser/DetailUser.js";
import ManagerProduct from "../Page/ManagerAssistant/Product/ManagerProduct.js";
import ManagerOrder from "../Page/ManagerAssistant/ManagerOrder/ManagerOrder.js";
import ManagerBrand from "../Page/ManagerAssistant/ManagerBrand/ManagerBrand.js";

const RouterAssistant = () => {
	return (
		<>
			<HeaderProduct />
			<Router>
				<div className="flex-form">
					<div className="user-handel">
						<DashboardAssistant />
					</div>
					<div className="information-handel">
						<Switch>
							<Route
								exact
								path="/assistant/account/profile"
								component={Profile}
							/>
							<Route
								exact
								path="/assistant/manager/user"
								component={DetailUser}
							/>
							<Route
								exact
								path="/assistant/product"
								component={ManagerProduct}
							/>
							<Route
								exact
								path="/assistant/manager/brand"
								component={ManagerBrand}
							/>
							<Route
								exact
								path="/assistant/manager/order"
								component={ManagerOrder}
							/>
						</Switch>
					</div>
				</div>
			</Router>
			<Footer />
		</>
	);
};

export default RouterAssistant;
