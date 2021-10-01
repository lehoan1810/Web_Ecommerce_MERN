import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HeaderProduct from "../../../Category/HeaderProduct/HeaderProduct";
import Dashboard from "../Dashboard/Dashboard";
import Profile from "../Page/Profile/Profile";
import Purchase from "../Page/Purchase/Purchase";
import Footer from "../../../HomePage/Footer/Footer";
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
