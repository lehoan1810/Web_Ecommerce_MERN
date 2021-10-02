import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HeaderProduct from "../../../Category/HeaderProduct/HeaderProduct";
import Footer from "../../../HomePage/Footer/Footer";
import DashboardAssistant from "../Dashboard/DashboardAssistant";
import Profile from "../../Client/Page/Profile/Profile";
import DetailUser from "../Page/ManagerAssistant/DetailUser/DetailUser";
import ManagerProduct from "../Page/ManagerAssistant/Product/ManagerProduct";
import ManagerOrder from "../Page/ManagerAssistant/ManagerOrder/ManagerOrder";

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
