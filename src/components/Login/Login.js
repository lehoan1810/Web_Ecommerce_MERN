import React from "react";
import { Link } from "react-router-dom";
// import { Link } from "react-router-dom";
import ArrowRight from "../../images/ArrowRight.png";
import "./Login.css";

function Login() {
	return (
		<div className="login">
			<form className="login-form">
				<div className="login-header">
					<h1 className="login-title">Login to our platform</h1>
					<span className="login-info">
						Login here using your username and password
					</span>
				</div>
				<div className="login-content">
					<div className="fill-email">
						<span className="title-email">Your Email</span>
						<input
							className="input-email"
							type="email"
							placeholder="Email... "
						></input>
					</div>
					<div className="fill-password">
						<span className="title-password">Your Password</span>
						<input
							className="input-password"
							type="password"
							placeholder="Password... "
						></input>
					</div>
					<div className="login-handel">
						<div className="fill-remember">
							<input type="radio" />
							<span className="title-remember">Remember me</span>
						</div>
						<div className="fill-forget">
							<span className="title-forget">Forget password ?</span>
						</div>
					</div>
				</div>
				<button className="btn-login">
					Login
					<img className="icon-resgister" src={ArrowRight} alt=" " />
				</button>
				<span className="not-register">Not register</span>
				<Link to="/Resgister" className="create-account">
					Create account ?
				</Link>
			</form>
		</div>
	);
}
export default Login;
