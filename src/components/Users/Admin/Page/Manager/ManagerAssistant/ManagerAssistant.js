import axios from "axios";
import React, { useEffect, useState } from "react";
import authHeader from "../../../../../../service/AuthHeader.js";
import ModalDelete from "../ManagerUser/ModalDelete.js";
import Message from "../../../../../../images/message.png";
import Modal from "react-modal";
import Loading from "../../../../../Loading/Loading.js";
import ModalSendEmail from "../../../../../../common/ModalSendEmail/index.js";

const ManagerAssistant = () => {
	const [dataUser, setDataUser] = useState([]);
	const [modalIsOpen, setModalIsOpen] = useState(false);
	const [modalOpen, setModalOpen] = useState(false);
	const [idUser, setIdUser] = useState("");
	const [nameUser, setNameUser] = useState("");
	const [loading, setLoading] = useState(false);
	const [emailUser, setEmailUser] = useState("");

	const url = `${process.env.REACT_APP_API_LOCAL}/api/v1/users/getAllAssistant`;

	useEffect(() => {
		const loadUser = () => {
			setLoading(true);
			axios
				.get(url, { headers: authHeader() })
				.then((res) => {
					setDataUser(res.data.data.users);
					console.log(res.data.data.users);
					setLoading(false);
				})
				.catch((err) => console.log(err));
		};
		loadUser();
	}, [url]);
	const deleteUser = (id, name, e) => {
		e.preventDefault();
		setIdUser(id);
		setNameUser(name);
		setModalIsOpen(true);
	};
	const sendEmail = (email) => {
		setModalOpen(true);
		setEmailUser(email);
	};

	return (
		<div>
			<div className="Order-table">
				<div className="table">
					<table>
						<thead>
							<tr>
								<th>Avatar</th>
								<th>Họ và Tên</th>
								<th>Email</th>
								<th>Phone</th>
								<th>Liên hệ</th>
								<th>Thao Tác</th>
							</tr>
						</thead>
						<tbody>
							{loading === true && (
								<tr>
									<td colSpan={6}>
										<Loading />
									</td>
								</tr>
							)}
							{loading === false &&
								dataUser.map((item, id) => (
									<tr key={id}>
										<td>
											<div className="avatar-center avatar-status">
												<span className="_status"></span>
												<img
													className="image-cover avatar-image"
													src={item.photo}
													alt=""
												/>
											</div>
										</td>
										<td>{item.name}</td>
										<td>{item.email}</td>
										<td>{item.phone}</td>
										<td>
											<div
												onClick={() => sendEmail(item.email)}
												className="action-handel"
											>
												<button className="action-lock">
													<img src={Message} alt="" />
												</button>
											</div>
										</td>
										<td>
											<div className="action-handel">
												<button
													onClick={(e) => deleteUser(item._id, item.name, e)}
													className="action-delete"
												>
													Xóa
												</button>
											</div>
										</td>
									</tr>
								))}
						</tbody>
					</table>
				</div>
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
						width: "22%",
						margin: "auto",
						height: "25%",
					},
				}}
			>
				<ModalDelete
					idData={idUser}
					nameUser={nameUser}
					setModalIsOpen={setModalIsOpen}
				/>
			</Modal>
			<Modal
				isOpen={modalOpen}
				ariaHideApp={false}
				onRequestClose={() => setModalOpen(false)}
				style={{
					overlay: {
						backgroundColor: "rgba(0,0,0,0.4)",
					},
					content: {
						top: "50%",
						left: "50%",
						right: "auto",
						bottom: "auto",
						marginRight: "-50%",
						transform: "translate(-50%, -50%)",
						width: "50rem",
					},
				}}
			>
				<ModalSendEmail setModalIsOpen={setModalOpen} email={emailUser} />
			</Modal>
		</div>
	);
};

export default ManagerAssistant;
