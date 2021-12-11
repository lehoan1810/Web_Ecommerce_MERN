import axios from "axios";
import React, { useState } from "react";
import ArrowRight from "../../../images/ArrowRight.png";
import { toast } from "react-toastify";

const ForgetPassword = () => {
	const [email, setEmail] = useState("");

	const onsubmit = (e) => {
		e.preventDefault();
		const url = `${process.env.REACT_APP_API_LOCAL}/api/v1/users/forgotPassword`;
		axios
			.post(url, { email: email })
			.then((res) => {
				console.log(email);
				toast.success("success", { autoClose: 1500 });
			})
			.catch((err) => toast.error("faild"));
	};

	return (
		<div className="login">
			<form className="login-form">
				<div className="login-header">
					<h1 className="login-title">Forget Password</h1>
					<span className="login-info">
						Please enter your email when you forget your password
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
				</div>
				<button className="btn-login" onClick={(e) => onsubmit(e)}>
					Send Email
					<img className="icon-resgister" src={ArrowRight} alt=" " />
				</button>
			</form>
		</div>
	);
};

export default ForgetPassword;
