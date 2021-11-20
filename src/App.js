import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./components/Login/Login";
import Resgister from "./components/Resgister/Resgister";
import NotPage from "./components/NotPage/NotPage";
import Home from "./components/HomePage/Home/Home";
import Category from "./components/Category/Category";
import ItemDetail from "./components/Product/ItemDetail/ItemDetail";
import CartProduct from "./components/CartProduct.js/CartProduct";
import LikeProduct from "./components/LikeProduct/LikeProduct";
import RouterClient from "./components/Users/Client/Router/RouterClient";
import RouterAdmin from "./components/Users/Admin/Router/RouterAdmin";
import RouterAssistant from "./components/Users/Assistant/Router/RouterAssistant";
import RouterCategory from "./components/Shop/Router/RouterCategory";
import ForgetPassword from "./components/Login/ForgetPassword/ForgetPassword";
import ResetPassword from "./components/Login/ResetPassword/ResetPassword";
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
