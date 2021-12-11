import axios from "axios";
import React, { useEffect, useState } from "react";
import Modal from "react-modal";
import Moment from "react-moment";
import authHeader from "../../../../../../service/AuthHeader.js";
import { getCurrentUser } from "../../../../../../service/AuthService.js";
import Loading from "../../../../../Loading/Loading.js";
import ModalOrderUser from "./ModalOrderUser/ModalOrderUser.js";

const OrderComplete = () => {
	const userName = getCurrentUser();
	const [modalIsOpen, setModalIsOpen] = useState(false);
	const [dataModal, setDataModal] = useState([]);
	const [dataOrder, setDataOrder] = useState([]);
	const [loading, setLoading] = useState(true);

	const url = `${process.env.REACT_APP_API_LOCAL}/api/v1/orders/customer?sort=date&status=2`;
	useEffect(() => {
		const loadData = () => {
			axios
				.get(url, { headers: authHeader() })
				.then((res) => {
					setDataOrder(res.data.data.orders);
					console.log(res.data.data.orders);
					setLoading(false);
				})
				.catch((err) => console.log(err));
		};
		loadData();
	}, [url]);
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
								dataOrder.map((item, id) => (
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
											<span className="action-status">Hoàn Thành</span>
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
						height: "50rem",
					},
				}}
			>
				<ModalOrderUser data={dataModal} setModalIsOpen={setModalIsOpen} />
			</Modal>
		</div>
	);
};

export default OrderComplete;
