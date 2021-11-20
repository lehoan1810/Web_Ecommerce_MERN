import React, { useState } from "react";
import { Rate } from "antd";
import "antd/dist/antd.css";
import "./FeedBack.css";
import { getCurrentIdUser } from "../../../service/AuthService.js";
import Moment from "react-moment";
import Modal from "react-modal";
import ModalEdit from "./ModalEdit.js";
import axios from "axios";
import authHeader from "../../../service/AuthHeader.js";
import { toast } from "react-toastify";

const FeedBack = ({ dataReview }) => {
	const idUser = getCurrentIdUser();
	console.log("test: ", dataReview);
	const [modalIsOpen, setModalIsOpen] = useState(false);
	const onDelete = (id) => {
		const url = `${process.env.REACT_APP_API_LOCAL}/api/v1/reviews/${id}`;
		axios
			.delete(url, { headers: authHeader() })
			.then((res) => {
				toast.success("success!!!");
				window.location.reload();
			})
			.catch((err) => {
				toast.error("faild");
			});
	};

	return (
		<div className="feedback">
			<div className="show-feedback">
				<div className="avt-feedback">
					<div className="border-image">
						<img src={dataReview.photo} alt="" />
					</div>
					<div className="Name-feedback">
						<span>{dataReview.name}</span>
						<div className="icon-star">
							<Rate
								className="show-star"
								disabled
								defaultValue={dataReview.rating}
							/>
						</div>
					</div>
					<p className="date-review">
						<Moment format="DD-MM-YYYY">{dataReview.createdAt}</Moment>
					</p>
					<div></div>
				</div>

				<div className="info-desc-feedback">
					<span>{dataReview.review}</span>
				</div>
				{idUser === dataReview.user ? (
					<div className="handle-review">
						<span onClick={() => setModalIsOpen(true)} className="edit-review">
							Edit
						</span>
						<span
							onClick={() => onDelete(dataReview._id)}
							className="delete-review"
						>
							Delete
						</span>
					</div>
				) : (
					""
				)}
			</div>
			<Modal
				isOpen={modalIsOpen}
				ariaHideApp={false}
				onRequestClose={() => setModalIsOpen(false)}
				style={{
					overlay: {
						backgroundColor: "rgba(0,0,0,0.4)",
					},
					content: {
						width: "40rem",
						margin: "auto",
						height: "25rem",
					},
				}}
			>
				<ModalEdit
					// dataProduct={id}
					dataReview={dataReview}
					setModalIsOpen={setModalIsOpen}
				/>
			</Modal>
		</div>
	);
};

export default FeedBack;
