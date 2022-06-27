import axios from "axios";
import React, { useEffect, useState } from "react";
import Message from "../../../../../../images/message.png";
import authHeader from "../../../../../../service/AuthHeader.js";
import Loading from "../../../../../Loading/Loading";
import { Select } from "antd";
import Modal from "react-modal";
import "./DetailUser.css";
import ModalSendEmail from "../../../../../../common/ModalSendEmail";
const { Option } = Select;

const DetailUser = () => {
	const [dataUser, setDataUser] = useState([]);
	const [loading, setLoading] = useState(false);
	const [userHasBuy, setUserHasBuy] = useState();
	const [modalIsOpen, setModalIsOpen] = useState(false);
	const [emailUser, setEmailUser] = useState("");
	const url = `${process.env.REACT_APP_API_LOCAL}/api/v1/users/getAllCustomer?userHasBuy=${userHasBuy}`;

	const dataUserHasBuy = [
		{
			id: "1",
			useHasBuy: -1,
			name: "Tất cả",
		},
		{
			id: "2",
			useHasBuy: "1",
			name: "Đã từng mua hàng",
		},
		{
			id: "3",
			useHasBuy: "0",
			name: "Chưa từng mua hàng",
		},
	];

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
	}, [url, userHasBuy]);
	const handleChange = (item) => {
		setUserHasBuy(item);
		setLoading(true);
	};
	const sendEmail = (email) => {
		setModalIsOpen(true);
		setEmailUser(email);
	};
	return (
		<div>
			<div>
				<div>
					<Select
						defaultValue="Lựa chọn"
						style={{ width: 200 }}
						onChange={handleChange}
					>
						{dataUserHasBuy &&
							dataUserHasBuy.map((item, id) => (
								<Option key={id} value={item.useHasBuy}>
									{item.name}
								</Option>
							))}
					</Select>
					<div className="total-data-user">
						<span>Số lượng: {dataUser && dataUser.length}</span>
					</div>
				</div>
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
								</tr>
							</thead>
							<tbody>
								{loading === true && (
									<tr>
										<td colSpan={5}>
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
													<button
														onClick={() => sendEmail(item.email)}
														className="action-detail"
													>
														<img src={Message} alt="" />
													</button>
												</div>
											</td>
										</tr>
									))}
							</tbody>
						</table>
					</div>
				</div>
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
				<ModalSendEmail setModalIsOpen={setModalIsOpen} email={emailUser} />
			</Modal>
		</div>
	);
};

export default DetailUser;
