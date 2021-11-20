import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./components/Login/Login.js";
import Resgister from "./components/Resgister/Resgister.js";
import NotPage from "./components/NotPage/NotPage.js";
import Home from "./components/HomePage/Home/Home.js";
import Category from "./components/Category/Category.js";
import ItemDetail from "./components/Product/ItemDetail/ItemDetail.js";
import CartProduct from "./components/CartProduct.js/CartProduct.js";
import LikeProduct from "./components/LikeProduct/LikeProduct.js";
import RouterClient from "./components/Users/Client/Router/RouterClient.js";
import RouterAdmin from "./components/Users/Admin/Router/RouterAdmin.js";
import RouterAssistant from "./components/Users/Assistant/Router/RouterAssistant.js";
import RouterCategory from "./components/Shop/Router/RouterCategory.js";
import ForgetPassword from "./components/Login/ForgetPassword/ForgetPassword.js";
import ResetPassword from "./components/Login/ResetPassword/ResetPassword.js";
function App() {
	return (
		<Router>
			<div className="App">
				<Switch>
					<Route exact path="/" component={Home} />

					<Route exact path="/login" component={Login} />

					<Route exact path="/forgetPassword" component={ForgetPassword} />

					<Route exact path="/resetPassword" component={ResetPassword} />

					<Route exact path="/Resgister" component={Resgister} />

					<Route exact path="/product" component={Category} />

					<Route path="/product/detail/:id" component={ItemDetail} />

					<Route exact path="/product/Cart" component={CartProduct} />

					<Route exact path="/product/Like" component={LikeProduct} />

					<Route path="/user" component={RouterClient} />

					<Route path="/admin" component={RouterAdmin} />

					<Route path="/assistant" component={RouterAssistant} />

					{/* <Route path="/shop/category" component={CategoryProduct} /> */}

					<Route path="/shop/category" component={RouterCategory} />

					<Route path="*" component={NotPage} />
				</Switch>
			</div>
		</Router>
	);
}

export default App;
