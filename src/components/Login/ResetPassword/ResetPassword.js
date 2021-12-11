import React, { useState } from "react";
import iconShow from "../../../../src/images/Show.png";
import iconHide from "../../../../src/images/Hide.png";
import ArrowRight from "../../../images/ArrowRight.png";
import { useParams } from "react-router";
import { toast } from "react-toastify";
import axios from "axios";

const ResetPassword = () => {
	const { id } = useParams();
	const [password, setPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");
	const [isShowPassword, setIsShowPassWord] = useState(false);
	const url = `${process.env.REACT_APP_API_LOCAL}/api/v1/users/resetPassword/${id}`;

	const onResetPassword = (e) => {
		// e.preventDefault();
		axios
			.patch(url, { password: password, passwordConfirm: confirmPassword })
			.then((res) => {
				console.log("thành công");
				toast.success("Reset Success !!!", {
					autoClose: 1500,
				});
				window.location.href = "/login";
			})
			.catch((err) => {
				toast.error("faild", { autoClose: 1500 });
				console.log(err);
			});
	};
	const handleShowHidePassword = () => {
		setIsShowPassWord(!isShowPassword);
	};
	return (
		<div className="login">
			<form className="login-form">
				<div className="login-header">
					<h1 className="login-title">Create New Password</h1>
					<span className="login-info">
						Create a new password to log into your account
					</span>
				</div>
				<div className="login-content">
					<div className="fill-password padding-bottom">
						<span className="title-password">New Password</span>
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

					<div className="fill-password ">
						<span className="title-password">Confirm Password</span>
						<div className="custom-input-password">
							<input
								className="input-password"
								type="password"
								placeholder="Password... "
								onChange={(e) => setConfirmPassword(e.target.value)}
							></input>
						</div>
					</div>
				</div>
				<button className="btn-login" onClick={(e) => onResetPassword(e)}>
					Login
					<img className="icon-resgister" src={ArrowRight} alt=" " />
				</button>
			</form>
		</div>
	);
};

export default ResetPassword;
