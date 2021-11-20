import React, { useState } from "react";
import axios from "axios";
import AuthHeader from "../../../../../../service/AuthHeader.js";
import "./ModalProfile.css";
import Loading from "../../../../../Loading/Loading.js";
import upload from "../../../../../../images/upload.png";

const ModalProfile = ({ data }) => {
	// update field
	const [email, setEmail] = useState(data.email);
	const [address, setAddress] = useState(data.address);
	const [phone, setPhone] = useState(data.phone);
	const [name, setName] = useState(data.name);
	const [gender, setGender] = useState(data.gender);
	// const IdUser = getCurrentIdUser();

	// upload image
	const [imageSelected, setImageSelected] = useState(data.photo);
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

	// update data
	const url = `${process.env.REACT_APP_API_LOCAL}/api/v1/users/updateMe`;
	function onUpdateUser() {
		axios
			.patch(
				url,
				{
					phone: phone,
					address: address,
					email: email,
					name: name,
					gender: gender,
					photo: imageSelected,
				},
				{ headers: AuthHeader() }
			)
			.then((res) => {
				console.log(res.data);
				window.location.reload();
			})
			.catch((err) => console.log("Lỗi." + err));
	}

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
					<input
						placeholder={email}
						onChange={(e) => setEmail(e.target.value)}
						value={data.email}
					/>
				</div>
				<div className="update-profile-item">
					<span className="item-info">Name:</span>
					<input
						placeholder={data.name}
						onChange={(e) => setName(e.target.value)}
						value={name}
					/>
				</div>

				<div className="update-profile-item">
					<span className="item-info">Gender</span>
					<input
						placeholder={data.gender}
						onChange={(e) => setGender(e.target.value)}
						value={gender}
					/>
				</div>
				<div className="update-profile-item">
					<span className="item-info">Phone Number:</span>
					<input
						placeholder={data.phone}
						onChange={(e) => setPhone(e.target.value)}
						value={phone}
					/>
				</div>
				<div className="update-profile-item">
					<span className="item-info">Address</span>
					<input
						placeholder={data.address}
						onChange={(e) => setAddress(e.target.value)}
						value={address}
					/>
				</div>
				<button className="btn-update-account" onClick={onUpdateUser}>
					Update Account
				</button>
			</div>
		</div>
	);
};

export default ModalProfile;
