import React, { useState } from "react";
import axios from "axios";
import { getCurrentIdUser } from "../../../../../../Service/AuthService";
import AuthHeader from "../../../../../../Service/AuthHeader";
import "./ModalProfile.css";
import Loading from "../../../../../Loading/Loading";
import upload from "../../../../../../images/upload.png";

const ModalProfile = ({ setModalIsOpen, data }) => {
	const [imageSelected, setImageSelected] = useState(data.photo);
	// const [dataimage, setDataImage] = useState(data.avatar);
	const [loading, setLoading] = useState(false);
	const uploadImage = (e) => {
		const files = e.target.files[0];
		const formData = new FormData();
		formData.append("upload_preset", "xwfcqasw");
		formData.append("file", files);
		setLoading(true);

		axios
			.post("https://api.cloudinary.com/v1_1/dbml4nd68/image/upload", formData)
			.then((res) => {
				setImageSelected(res.data.secure_url);
				setLoading(false);
			})
			.catch((err) => console.log(err));
	};

	return (
		<div className="profile">
			<div className="profile-left">
				{loading ? (
					<Loading />
				) : (
					<img className="settings-img" src={imageSelected} alt="" />
				)}
				<label className="custom-input-file">
					<img className="icon-upload" src={upload} alt="" />
					upload
					<input onChange={uploadImage} className="input-upload" type="file" />
				</label>
			</div>
			<div className="profile-right">
				<h1 className="title-profile-right">Personal information</h1>
				<div className="update-profile-item">
					<span className="item-info">Email:</span>
					<input placeholder="HongGhi@gmail.com" />
				</div>
				<div className="update-profile-item">
					<span className="item-info">Name:</span>
					<input placeholder="Hồng Ghi" />
				</div>

				<div className="update-profile-item">
					<span className="item-info">Full name:</span>
					<input placeholder="HongGhi@gmail.com" />
				</div>
				<div className="update-profile-item">
					<span className="item-info">Phone Number:</span>
					<input placeholder="HongGhi@gmail.com" />
				</div>
				<div className="update-profile-item">
					<span className="item-info">Address</span>
					<input placeholder="HongGhi@gmail.com" />
				</div>
				<button className="btn-update-account">Update Account</button>
			</div>
		</div>
	);
};

export default ModalProfile;
