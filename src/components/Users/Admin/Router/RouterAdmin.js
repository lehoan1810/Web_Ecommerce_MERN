import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HeaderProduct from "../../../Category/HeaderProduct/HeaderProduct.js";
import Footer from "../../../HomePage/Footer/Footer.js";
import Profile from "../../Client/Page/Profile/Profile.js";
import DashboardAdmin from "../Dashboard/DashboardAdmin.js";
import ManagerAssistant from "../Page/Manager/ManagerAssistant/ManagerAssistant.js";
import ManagerCategory from "../Page/Manager/ManagerCategory/ManagerCategory.js";
import ManagerData from "../Page/Manager/ManagerData/ManagerData.js";
import ManagerProduct from "../Page/Manager/ManagerProduct/ManagerProduct.js";
import ManagerUser from "../Page/Manager/ManagerUser/ManagerUser.js";

const RouterAdmin = () => {
	return (
		<>
			<HeaderProduct />
			<Router>
				<div className="flex-form">
					<div className="user-handel">
						<DashboardAdmin />
					</div>
					<div className="information-handel">
						<Switch>
							<Route exact path="/admin/account/profile" component={Profile} />
							<Route exact path="/admin/manager/user" component={ManagerUser} />
							<Route
								exact
								path="/admin/manager/assistant"
								component={ManagerAssistant}
							/>
							<Route exact path="/admin/manager/data" component={ManagerData} />
							<Route
								exact
								path="/admin/manager/product"
								component={ManagerProduct}
							/>
							<Route
								exact
								path="/admin/manager/category"
								component={ManagerCategory}
							/>
						</Switch>
					</div>
				</div>
			</Router>
			<Footer />
		</>
	);
};

export default RouterAdmin;
