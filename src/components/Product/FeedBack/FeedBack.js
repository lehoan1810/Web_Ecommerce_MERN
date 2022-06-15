import React, { useState } from "react";
import { Rate, Image } from "antd";
import "antd/dist/antd.css";
import "./FeedBack.css";
import { getCurrentIdUser } from "../../../service/AuthService.js";
import Moment from "react-moment";
import Modal from "react-modal";
import ModalEdit from "./ModalEdit.js";
import ModalDelete from "./ModalDelete";

const FeedBack = ({ dataReview }) => {
	const idUser = getCurrentIdUser();
	console.log("test: ", dataReview);
	console.log("show data review: ", dataReview.photo);
	const [modalIsOpen, setModalIsOpen] = useState(false);
	const [modalDeleteOpen, setModalDeleteOpen] = useState(false);

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
					<div className="views-image-feedback">
						{dataReview.photoReviews &&
							dataReview.photoReviews.map((item, id) => (
								<div className="views-image-feedback-item" key={id}>
									<img src={item} alt="" />
								</div>
							))}
					</div>
				</div>

				{idUser === dataReview.user ? (
					<div className="handle-review">
						<span onClick={() => setModalIsOpen(true)} className="edit-review">
							Edit
						</span>
						<span
							onClick={() => setModalDeleteOpen(true)}
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
			<Modal
				isOpen={modalDeleteOpen}
				ariaHideApp={false}
				onRequestClose={() => setModalDeleteOpen(false)}
				style={{
					overlay: {
						backgroundColor: "rgba(0,0,0,0.4)",
					},
					content: {
						width: "30rem",
						margin: "auto",
						height: "20rem",
					},
				}}
			>
				<ModalDelete
					// dataProduct={id}
					idReview={dataReview._id}
					dataReview={dataReview}
					setModalIsOpen={setModalDeleteOpen}
				/>
			</Modal>
		</div>
	);
};

export default FeedBack;
