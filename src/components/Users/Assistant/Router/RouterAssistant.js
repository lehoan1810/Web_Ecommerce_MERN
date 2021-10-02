import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HeaderProduct from "../../../Category/HeaderProduct/HeaderProduct";
// import Profile from "../Page/Profile/Profile";
// import Purchase from "../Page/Purchase/Purchase";
import Footer from "../../../HomePage/Footer/Footer";
import DashboardAssistant from "../Dashboard/DashboardAssistant";
// import "./RouterClient.css";

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
						{/* <Switch>
							<Route exact path="/user/account/profile" component={Profile} />
							<Route exact path="/user/purchase" component={Purchase} />
						</Switch> */}
					</div>
				</div>
			</Router>
			<Footer />
		</>
	);
};

export default RouterAssistant;
