import React, { useState } from "react";
import Modal from "react-modal";
import ModalOrder from "./ModalOrder/ModalOrder";
import Moment from "react-moment";
import axios from "axios";
import authHeader from "../../../../../../service/AuthHeader";
import { toast } from "react-toastify";

const ProductPending = ({ data }) => {
	const [modalIsOpen, setModalIsOpen] = useState(false);
	const [dataModa, setDataModal] = useState([]);

	const onHandleAccept = (idOrder) => {
		const url = `${process.env.REACT_APP_API_LOCAL}/api/v1/orders/${idOrder}`;
		axios
			.patch(
				url,
				{
					status: 1,
				},
				{ headers: authHeader() }
			)
			.then((res) => {
				toast.success("Success Accept!!!");
				window.location.reload();
				console.log(res.data);
			})
			.catch((err) => console.log(err));
	};

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
								<th>Thao Tác</th>
							</tr>
						</thead>
						<tbody>
							{data.map((item, id) => (
								<tr key={id}>
									<td>{item.nameUser}</td>
									<td>
										{new Intl.NumberFormat("it-IT", {
											style: "currency",
											currency: "VND",
										}).format(item.order.totalPrice)}
									</td>
									<td>
										<Moment format="DD-MM-YYYY">{item.order.date}</Moment>
									</td>
									<td>
										<span className="action-status">Waiting</span>
									</td>
									<td>
										<div className="action-handel">
											<button
												onClick={() => onHandleDetail(item.order._id)}
												className="action-accept"
											>
												Xem
											</button>
										</div>
									</td>
									<td>
										<div className="action-handel">
											<button
												onClick={() => onHandleAccept(item.order._id)}
												className="action-accept"
											>
												Accept
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
				<ModalOrder data={dataModa} setModalIsOpen={setModalIsOpen} />
			</Modal>
		</div>
	);
};

export default ProductPending;
