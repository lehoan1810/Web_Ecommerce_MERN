import React from "react";
import "./style.css";

const RedirectEmail = () => {
	const onSubmit = () => {
		window.location.href = "https://mail.google.com/";
	};
	return (
		<div>
			<div className="login">
				<form className="login-form">
					<div className="login-header">
						<h1 className="login-title">Đăng ký thành công</h1>
						<span className="login-info">
							<strong>Vui lòng check email để đăng nhập !</strong>
						</span>
					</div>

					<button type="button" className="btn-login" onClick={onSubmit}>
						Go to Email
					</button>
				</form>
			</div>
		</div>
	);
};

export default RedirectEmail;
