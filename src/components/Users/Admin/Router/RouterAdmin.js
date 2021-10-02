import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HeaderProduct from "../../../Category/HeaderProduct/HeaderProduct";
// import Profile from "../Page/Profile/Profile";
// import Purchase from "../Page/Purchase/Purchase";
import Footer from "../../../HomePage/Footer/Footer";
import Profile from "../../Client/Page/Profile/Profile";
import DashboardAdmin from "../Dashboard/DashboardAdmin";
import ManagerAssistant from "../Page/Manager/ManagerAssistant/ManagerAssistant";
import ManagerData from "../Page/Manager/ManagerData/ManagerData";
import ManagerProduct from "../Page/Manager/ManagerProduct/ManagerProduct";
import ManagerUser from "../Page/Manager/ManagerUser/ManagerUser";
// import "./RouterClient.css";

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
						</Switch>
					</div>
				</div>
			</Router>
			<Footer />
		</>
	);
};

export default RouterAdmin;
