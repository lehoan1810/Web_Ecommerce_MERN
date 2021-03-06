import React, { useState } from "react";
import { Link } from "react-router-dom";
import ArrowRight from "../../images/shopImg.png";
import "./Login.css";
import { useHistory } from "react-router-dom";
import { login } from "../../service/AuthService.js";
import iconShow from "../../images/Show.png";
import iconHide from "../../images/Hide.png";
import LoadingPage from "../../common/LoadingPage/index";

function Login() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [isShowPassword, setIsShowPassWord] = useState(false);
	const history = useHistory();
	const [loading, setLoading] = useState();

	const onSubmit = async (e) => {
		const formData = { email, password };
		e.preventDefault();
		setLoading(false);
		try {
			const res = await login(formData);
			setLoading(true);
			console.log(res);
			// history.push("/");
		} catch (err) {
			console.log(err);
			setLoading();
		}
	};

	const handleShowHidePassword = () => {
		setIsShowPassWord(!isShowPassword);
	};

	return (
		<div className="login">
			{loading === true && history.push("/")}
			{loading === false && <LoadingPage />}
			<form className="login-form">
				<div className="login-header">
					<h1 className="login-title">Welcome back</h1>
					<span className="login-info">
						Welcome back! Please enter your details.
					</span>
				</div>
				<div className="login-content">
					<div className="fill-email">
						<span className="title-email">Your Email</span>
						<input
							className="input-email"
							type="email"
							placeholder="Email... "
							onChange={(e) => setEmail(e.target.value)}
						></input>
					</div>
					<div className="fill-password">
						<span className="title-password">Your Password</span>
						<div className="custom-input-password">
							<input
								className="input-password"
								type={isShowPassword ? "text" : "password"}
								placeholder="Password... "
								onChange={(e) => setPassword(e.target.value)}
							></input>
							<span onClick={() => handleShowHidePassword()}>
								<img
									className="show-password"
									alt=""
									src={isShowPassword ? iconShow : iconHide}
								/>
							</span>
						</div>
					</div>
					<div className="login-handel">
						<div className="fill-remember">
							<input type="radio" />
							<span className="title-remember">Remember me</span>
						</div>
						<div className="fill-forget">
							<Link to="/forgetPassword" className="title-forget">
								Forget password ?
							</Link>
						</div>
					</div>
				</div>
				<button className="btn-login" onClick={onSubmit}>
					Login
					<img className="icon-resgister" src={ArrowRight} alt=" " />
				</button>
				<span className="not-register">Not register</span>
				<Link to="/Resgister" className="create-account">
					Create account ?
				</Link>
			</form>
			<div className="image-form-login"></div>
		</div>
	);
}
export default Login;
