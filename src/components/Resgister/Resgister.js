import React from "react";
import { Link } from "react-router-dom";
import "./Resgister.css";
import ArrowRight from "../../images/ArrowRight.png";
function Resgister() {
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
						></input>
					</div>
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
					<div className="fill-confirm-password">
						<span className="title-confirm-password">
							Your Confirm Password
						</span>
						<input
							className="input-confirm-password"
							type="password"
							placeholder="Confirm password... "
						></input>
					</div>
				</div>
				<button className="btn-resgister">
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
