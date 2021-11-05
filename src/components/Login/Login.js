import React, { useState } from "react";
import { Link } from "react-router-dom";
// import { Link } from "react-router-dom";
import ArrowRight from "../../images/ArrowRight.png";
import "./Login.css";
import { useHistory } from "react-router-dom";
import { login } from "../../Service/AuthService";
import iconShow from "../../../src/images/Show.png";
import iconHide from "../../../src/images/Hide.png";

function Login() {
	const [email, setEmail] = useState();
	const [password, setPassword] = useState();
	const [isShowPassword, setIsShowPassWord] = useState(false);
	const history = useHistory();

	const onSubmit = async (e) => {
		const formData = { email, password };
		e.preventDefault();
		try {
			const res = await login(formData);
			console.log(res);
			history.push("/");
		} catch (err) {
			console.log(err);
		}
	};

	const handleShowHidePassword = () => {
		setIsShowPassWord(!isShowPassword);
	};

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
							<span className="title-forget">Forget password ?</span>
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
		</div>
	);
}
export default Login;
