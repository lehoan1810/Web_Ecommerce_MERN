import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import "./Resgister.css";
import ArrowRight from "../../images/ArrowRight.png";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

toast.configure();
function Resgister() {
	const url = `${process.env.REACT_APP_API_LOCAL}/auth/register`;
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [confirm, setConfirm] = useState("");
	// const [error, setError] = useState("");
	const [success, setSuccess] = useState(false);

	const onSignUp = (e) => {
		e.preventDefault();
		if (name === "" || email === "" || password === "") {
			alert("Please enter your info");
			return;
		}
		if (confirm !== password) {
			alert("Passwords did not match");
			return;
		}
		axios
			.post(url, {
				name: name,
				email: email,
				password: password,
			})
			.then((res) => {
				console.log(res.data);
				setSuccess(true);
				toast.success("success");
			})
			.catch((err) => {
				console.log(err.response.data.data);
				// setError(err.response.data.data[0].description);
			});
	};

	if (success) {
		return <Redirect to="./login" />;
	}
	return (
		<div className="resgister">
			<form className="resgister-form">
				<div className="resgister-header">
					<h1 className="resgister-title">resgister to our platform</h1>
					<span className="resgister-info">
						resgister here using your username and password
					</span>
				</div>
				<div className="resgister-content">
					<div className="fill-userName">
						<span className="title-userName">Your UserName</span>
						<input
							className="input-userName"
							type="text"
							placeholder="userName... "
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
