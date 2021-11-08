import axios from "axios";
import React, { useEffect, useState } from "react";
import Modal from "react-modal";
// import { useParams } from "react-router";
import authHeader from "../../../../../Service/AuthHeader";
import ModalProfile from "./ModalProfile/ModalProfile";
import { getCurrentIdUser } from "../../../../../Service/AuthService";
import "./Profile.css";

const Profile = () => {
	const idUser = getCurrentIdUser();
	// let { id } = useParams();

	const [dataUser, setDataUser] = useState("");
	const [modalIsOpen, setModalIsOpen] = useState(false);

	const url = `${process.env.REACT_APP_API_LOCAL}/api/v1/users/profile/${idUser}`;

	useEffect(() => {
		const loadProfile = () => {
			if (idUser == null) return 0;
			axios
				.get(url, { headers: authHeader() })
				.then((res) => {
					setDataUser(res.data.data.userData);
					console.log(res.data.data);
				})
				.catch((err) => console.log(err));
		};
		loadProfile();
	}, [url, idUser]);

	return (
		<div className="form-profile-user">
			<div className="title-profile-user">
				<h2>Hồ Sơ Của Tôi</h2>
				<span>Quản lý thông tin hồ sơ để bảo mật tài khoản</span>
			</div>
			<form className="info-profile">
				<div className="info-profile-left">
					<div className="info-item">
						<h3>Tên Đăng Nhập:</h3>
						<span>{dataUser.name}</span>
					</div>
					<div className="info-item">
						<h3>Email:</h3>
						<span>{dataUser.email}</span>
					</div>
					<div className="info-item">
						<h3>Số Điện Thoại:</h3>
						<span>09123456789</span>
					</div>
					<div className="info-item">
						<h3>Địa chỉ:</h3>
						<span>Quận 1</span>
					</div>
					<div className="info-item">
						<h3>Giới Tính:</h3>
						<span>Nữ</span>
					</div>
					<div className="info-item">
						<h3>Ngày Sinh:</h3>
						<span>22/02/2000</span>
					</div>
				</div>
				<div className="avt-profile-right">
					<img src={dataUser.photo} alt="" />
				</div>
			</form>
			<div className="button-update">
				<button
					className="btn-update-profile"
					onClick={() => setModalIsOpen(true)}
				>
					UPDATE
				</button>
			</div>
			<Modal
				isOpen={modalIsOpen}
				//err
				ariaHideApp={false}
				//
				onRequestClose={() => setModalIsOpen(false)}
				style={{
					overlay: {
						backgroundColor: "rgba(0,0,0,0.4)",
					},
					content: {
						width: "50%",
						margin: "auto",
						height: "65%",
					},
				}}
			>
				<ModalProfile data={dataUser} setModalIsOpen={setModalIsOpen} />
			</Modal>
		</div>
	);
};

export default Profile;
