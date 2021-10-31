import React, { useState } from "react";
import Modal from "react-modal";
import ModalProfile from "./ModalProfile/ModalProfile";
import "./Profile.css";

const Profile = () => {
	const [modalIsOpen, setModalIsOpen] = useState(false);
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
						<span>hồng Ghi</span>
					</div>
					<div className="info-item">
						<h3>Email nguời dùng:</h3>
						<span>HongGhi@gmail.com</span>
					</div>
					<div className="info-item">
						<h3>Số Điện Thoại:</h3>
						<span>09123456789</span>
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
					<img
						src="https://scontent.fsgn8-2.fna.fbcdn.net/v/t1.6435-9/119116308_2950540125251102_6477465873348125857_n.jpg?_nc_cat=110&ccb=1-5&_nc_sid=174925&_nc_ohc=69ec69ITmkMAX8AvtR_&_nc_ht=scontent.fsgn8-2.fna&oh=6f091027deefbeec40c8ac039ef8aaec&oe=61A5E6D4"
						alt=""
					/>
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
				<ModalProfile setModalIsOpen={setModalIsOpen} />
			</Modal>
		</div>
	);
};

export default Profile;
