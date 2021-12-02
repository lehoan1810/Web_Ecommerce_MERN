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
				toast.success("Update Password Success !!!");
				logout();
				history.push("/login");
				window.location.reload("/login");
				console.log(res.data.data);
			})
			.catch((err) => {
				toast.error("faild");
				console.log(err);
			});
	};

	return (
		<div>
			<div className="current-password">
				<span className="title-update-password">Password Current</span>
				<input
					onChange={(e) => {
						setPasswordCurrent(e.target.value);
					}}
					type="password"
					placeholder="password old"
				/>
			</div>
			<div className="new-password">
				<span className="title-update-password">New Password</span>
				<input
					onChange={(e) => {
						setPassword(e.target.value);
					}}
					type="password"
					placeholder="password old"
				/>
			</div>
			<div className="confirm-new-password">
				<span className="title-update-password">Confirm Password</span>
				<input
					onChange={(e) => {
						setPasswordConfirm(e.target.value);
					}}
					type="password"
					placeholder="password old"
				/>
			</div>
			<div className="handle-update-password">
				<button
					onClick={() => setUpdateIsOpen(false)}
					className="btn-update-password-cancel"
				>
					Cancel
				</button>
				<button
					onClick={onUpdatePassword}
					className="btn-update-password-update"
				>
					Update and Log Out
				</button>
			</div>
		</div>
	);
};

export default UpdatePassword;
