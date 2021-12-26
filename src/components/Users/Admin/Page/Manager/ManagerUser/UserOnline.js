import axios from "axios";
import React, { useEffect, useState } from "react";
import Lock from "../../../../../../images/lock.png";
import authHeader from "../../../../../../service/AuthHeader.js";
import Modal from "react-modal";
import ModalDelete from "./ModalDelete.js";
import Loading from "../../../../../Loading/Loading";

const UserOnline = () => {
	const [dataUser, setDataUser] = useState([]);
	const [modalIsOpen, setModalIsOpen] = useState(false);
	const [idUser, setIdUser] = useState("");
	const [nameUser, setNameUser] = useState("");
	const [loading, setLoading] = useState(true);

	const url = `${process.env.REACT_APP_API_LOCAL}/api/v1/users/getAllCustomer`;

	useEffect(() => {
		const loadUser = () => {
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
								<th>Block</th>
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
											<div className="action-handel">
												<button className="action-lock">
													<img src={Lock} alt="" />
												</button>
											</div>
										</td>

										<td>
											<div className="action-handel">
												<button
													onClick={(e) => deleteUser(item._id, item.name, e)}
													className="action-delete"
												>
													Delete
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
						width: "30rem",
						margin: "auto",
						height: "18rem",
					},
				}}
			>
				<ModalDelete
					idData={idUser}
					nameUser={nameUser}
					setModalIsOpen={setModalIsOpen}
				/>
			</Modal>
		</div>
	);
};

export default UserOnline;
