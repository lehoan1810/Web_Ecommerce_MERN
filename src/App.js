import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./components/Login/Login";
import Resgister from "./components/Resgister/Resgister";
import NotPage from "./components/NotPage/NotPage";
import Home from "./components/HomePage/Home/Home";
function App() {
	return (
		<Router>
			<div className="App">
				<Switch>
					<Route exact path="/" component={Home} />
					<Route exact path="/login" component={Login} />
					<Route exact path="/Resgister" component={Resgister} />
					<Route path="*" component={NotPage} />
				</Switch>
			</div>
		</Router>
	);
}

export default App;
