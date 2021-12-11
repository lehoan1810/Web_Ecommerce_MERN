import React, { useState } from "react";
import Moment from "react-moment";
import Modal from "react-modal";
import "./Order.css";
import ModalOrderUser from "./ModalOrderUser/ModalOrderUser";
import { getCurrentUser } from "../../../../../../service/AuthService";
import Loading from "../../../../../Loading/Loading";

const OrderConfirm = ({ loading, data }) => {
	const userName = getCurrentUser();
	const [modalIsOpen, setModalIsOpen] = useState(false);
	const [dataModa, setDataModal] = useState([]);

	const onHandleDetail = (idOrder) => {
		setModalIsOpen(true);
		setDataModal(idOrder);
	};

	return (
		<div>
			<div className="Order-table">
				<div className="table">
					<table>
						<thead>
							<tr>
								<th>Tên Khách hàng</th>
								<th>Tổng tiền đơn hàng</th>
								<th>Ngày</th>
								<th>Tình trạng</th>
								<th>Chi tiết</th>
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
								data.map((item, id) => (
									<tr key={id}>
										<td>{userName}</td>
										<td>
											{new Intl.NumberFormat("it-IT", {
												style: "currency",
												currency: "VND",
											}).format(item.totalPrice)}
										</td>
										<td>
											<Moment format="DD-MM-YYYY">{item.date}</Moment>
										</td>
										<td>
											<span className="action-status">Waiting</span>
										</td>
										<td>
											<div className="action-handel">
												<button
													onClick={() => onHandleDetail(item._id)}
													className="action-accept"
												>
													Xem
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
						width: "90rem",
						margin: "auto",
						height: "30rem",
					},
				}}
			>
				<ModalOrderUser data={dataModa} setModalIsOpen={setModalIsOpen} />
			</Modal>
		</div>
	);
};

export default OrderConfirm;
