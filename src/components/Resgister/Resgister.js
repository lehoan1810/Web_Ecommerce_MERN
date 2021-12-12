import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import "./Resgister.css";
import ArrowRight from "../../images/ArrowRight.png";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import LoadingPage from "../LoadingPage/LoadingPage";

toast.configure();
function Resgister() {
	const url = `${process.env.REACT_APP_API_LOCAL}/api/v1/users/signup`;
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [confirm, setConfirm] = useState("");
	const [success, setSuccess] = useState();

	const onSignUp = (e) => {
		e.preventDefault();

		if (name === "" || email === "" || password === "") {
			toast.error("Fill in the registration information completely", {
				autoClose: 1500,
			});
			return;
		}
		// if (confirm !== password) {
		// 	toast.error("Passwords did not match");
		// 	return;
		// }
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
				toast.success("Sign Up Success !!!", { autoClose: 1500 });
			})
			.catch((err) => {
				console.log(err.response.data.message);
				toast.error(err.response.data.message, { autoClose: 1500 });
				setSuccess();
				// setError(err.response.data.data[0].description);
			});
	};

	return (
		<div className="resgister">
			{success === true && <Redirect to="./login" />}
			{success === false && <LoadingPage />}
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
