import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import "./Resgister.css";
import ArrowRight from "../../images/shopImg.png";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import LoadingPage from "../../common/LoadingPage";

toast.configure();
function Resgister() {
	const url = `${process.env.REACT_APP_API_LOCAL}/api/v1/users/signup`;
	// const url = `http://localhost:5000/api/v1/users/signup`;
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [confirm, setConfirm] = useState("");
	const [success, setSuccess] = useState();

	const onSignUp = (e) => {
		e.preventDefault();

		setSuccess(false);
		axios
			.post(url, {
				name: name,
				email: email,
				password: password,
				passwordConfirm: confirm,
			})
			.then((res) => {
				console.log(res.data);
				setSuccess(true);
				toast.success("Đăng ký thành công !!!", {
					autoClose: 1500,
					hideProgressBar: true,
				});
			})
			.catch((error) => {
				console.log(error.response.data.message);
				toast.error(error.response.data.message, {
					autoClose: 1500,
					hideProgressBar: true,
				});
				setSuccess();
				// setError(err.response.data.data[0].description);
			});
	};

	return (
		<div className="resgister">
			{success === true && <Redirect to="./RedirectEmail" />}
			{success === false && <LoadingPage />}
			<div className="image-form-login"></div>
			<form className="resgister-form">
				<div className="resgister-header">
					<h1 className="resgister-title">resgister to our platform</h1>
					<span className="resgister-info">
						resgister here using your username and password
					</span>
				</div>
				<div className="resgister-content">
					<div className="fill-userName">
						<span className="title-userName">Your Name</span>
						<input
							className="input-userName"
							type="text"
							placeholder="Name... "
							onChange={(e) => setName(e.target.value)}
						></input>
					</div>
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
						<input
							className="input-password"
							type="password"
							placeholder="Password... "
							onChange={(e) => setPassword(e.target.value)}
						></input>
					</div>
					<div className="fill-confirm-password">
						<span className="title-confirm-password">
							Your Confirm Password
						</span>
						<input
							className="input-confirm-password"
							type="password"
							placeholder="Confirm password... "
							onChange={(e) => setConfirm(e.target.value)}
						></input>
					</div>
				</div>
				<button onClick={(e) => onSignUp(e)} className="btn-resgister">
					Resgister
					<img className="icon-resgister" src={ArrowRight} alt=" " />
				</button>
				<span className="have-account">Have a account</span>
				<Link to="/login" className="create-account">
					Sign in ?
				</Link>
			</form>
		</div>
	);
}

export default Resgister;
