import axios from "axios";
import React, { useState } from "react";
import { toast } from "react-toastify";
import authHeader from "../../../../../../service/AuthHeader";
import { logout } from "../../../../../../service/AuthService";
import { useHistory } from "react-router-dom";
import "./UpdatePassword.css";

const UpdatePassword = ({ setUpdateIsOpen }) => {
	let history = useHistory();
	const [passwordCurrent, setPasswordCurrent] = useState("");
	const [password, setPassword] = useState("");
	const [passwordConfirm, setPasswordConfirm] = useState("");

	const url = `${process.env.REACT_APP_API_LOCAL}/api/v1/users/updateMyPassword`;

	const onUpdatePassword = () => {
		axios
			.patch(
				url,
				{
					passwordCurrent: passwordCurrent,
					passwordConfirm: passwordConfirm,
					password: password,
				},
				{ headers: authHeader() }
			)
			.then((res) => {
				toast.success("Cập nhập mật khẩu thành công !!!");
				logout();
				history.push("/login");
				window.location.reload("/login");
				console.log(res.data.data);
			})
			.catch((err) => {
				toast.error("lỗi, vui lòng thử lại!");
				console.log(err);
			});
	};

	return (
		<div>
			<div className="current-password">
				<span className="title-update-password">Mật khẩu cũ</span>
				<input
					onChange={(e) => {
						setPasswordCurrent(e.target.value);
					}}
					type="password"
					placeholder="Mật khẩu cũ"
				/>
			</div>
			<div className="new-password">
				<span className="title-update-password">Mật khẩu mới</span>
				<input
					onChange={(e) => {
						setPassword(e.target.value);
					}}
					type="password"
					placeholder="Mật khẩu mới"
				/>
			</div>
			<div className="confirm-new-password">
				<span className="title-update-password">Nhập lại mật khẩu</span>
				<input
					onChange={(e) => {
						setPasswordConfirm(e.target.value);
					}}
					type="password"
					placeholder="Nhập lại mật khẩu"
				/>
			</div>
			<div className="handle-update-password">
				<button
					onClick={() => setUpdateIsOpen(false)}
					className="btn-update-password-cancel"
				>
					Hủy
				</button>
				<button
					onClick={onUpdatePassword}
					className="btn-update-password-update"
				>
					Cập nhập và đăng xuất
				</button>
			</div>
		</div>
	);
};

export default UpdatePassword;
