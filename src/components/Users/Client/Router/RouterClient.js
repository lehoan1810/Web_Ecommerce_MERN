import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HeaderProduct from "../../../Category/HeaderProduct/HeaderProduct.js";
import Dashboard from "../Dashboard/Dashboard.js";
import Profile from "../Page/Profile/Profile.js";
import Purchase from "../Page/Purchase/Purchase.js";
import Footer from "../../../HomePage/Footer/Footer.js";
import "./RouterClient.css";

const RouterClient = () => {
	return (
		<>
			<HeaderProduct />
			<Router>
				<div className="flex-form">
					<div className="user-handel">
						<Dashboard />
					</div>
					<div className="information-handel">
						<Switch>
							<Route exact path="/user/account/profile" component={Profile} />
							<Route exact path="/user/purchase" component={Purchase} />
						</Switch>
					</div>
				</div>
			</Router>
			<Footer />
		</>
	);
};

export default RouterClient;
