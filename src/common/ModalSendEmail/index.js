import React, { useState } from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import axios from "axios";
import { toast } from "react-toastify";
import "./style.css";
import authHeader from "../../service/AuthHeader";

const ModalSendEmail = ({ email, setModalIsOpen }) => {
	const emailAdmin = "hoanhao18102000@gmail.com";
	const [title, setTitle] = useState("");
	const [description, setDescription] = useState("");

	const url = `${process.env.REACT_APP_API_LOCAL}/api/v1/users/sendEmailUser`;

	const SendEmailToUser = () => {
		console.log(email, title, description);
		axios
			.post(
				url,
				{
					email: email,
					title: title,
					desc: description,
				},
				{ Headers: authHeader }
			)
			.then((res) => {
				console.log(res.data);
				toast.success("Gửi thành công", {
					autoClose: 1500,
					hideProgressBar: true,
				});
			})
			.catch((err) => {
				console.log(err);
				toast.error(err.response.data.message, {
					autoClose: 1500,
					hideProgressBar: true,
				});
			})
			.finally(() => {
				setModalIsOpen(false);
			});
	};

	return (
		<div>
			<h1 className="title-email-contact">Liên Hệ</h1>
			<div className="from-email">
				<span>Người gửi</span>
				<input type="text" defaultValue={emailAdmin} disabled />
			</div>
			<div className="to-email">
				<span>Người nhận</span>
				<input type="text" defaultValue={email} />
			</div>
			<div className="title-send-email">
				<span>Tiêu đề gửi</span>
				<input type="text" onChange={(e) => setTitle(e.target.value)} />
			</div>
			<div className="desc-send-email">
				<span>Nội dung gửi</span>
				<CKEditor
					editor={ClassicEditor}
					data={description}
					onChange={(event, editor) => {
						const data = editor.getData();
						setDescription(data);
					}}
				/>
			</div>
			<div className="handel-email-user">
				<button
					onClick={() => setModalIsOpen(false)}
					className="email-user-cancel"
				>
					Hủy
				</button>
				<button onClick={SendEmailToUser} className="email-user-send">
					Gửi
				</button>
			</div>
		</div>
	);
};

export default ModalSendEmail;
