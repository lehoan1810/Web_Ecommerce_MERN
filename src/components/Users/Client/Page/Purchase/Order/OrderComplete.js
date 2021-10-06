import React, { useState } from "react";
import Modal from "react-modal";
import ModalAccess from "./ModalRating";

const OrderComplete = () => {
	const [modalIsOpen, setModalIsOpen] = useState(false);
	return (
		<div>
			<div className="Order-table">
				<div className="table">
					<table>
						<thead>
							<tr>
								<th>Tên Sản Phẩm</th>
								<th>Đơn Giá</th>
								<th>Số Lượng</th>
								<th>Số Tiền</th>
								<th>Đánh giá</th>
								{/* <th>Thao Tác</th> */}
							</tr>
						</thead>
						<tbody>
							<tr>
								<td>Mike wazowski</td>
								<td>15.000.000 VND</td>
								<td>2</td>
								<td>30.000.000 VND</td>
								<td>
									<div className="action-status">
										<span>Complete</span>
									</div>
								</td>
								{/* <td>
										<div className="action-handel">
											<button className="action-delete">Delete</button>
										</div>
									</td> */}
							</tr>
							<tr>
								<td>Mike wazowski</td>
								<td>15.000.000 VND</td>
								<td>2</td>
								<td>30.000.000 VND</td>
								<td>
									<div className="action-status">
										<button onClick={() => setModalIsOpen(true)}>assess</button>
									</div>
								</td>
								{/* <td>
									<div className="action-handel">
										<button className="action-delete">Delete</button>
									</div>
								</td> */}
							</tr>
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
						width: "30%",
						margin: "auto",
						height: "43%",
					},
				}}
			>
				<ModalAccess setModalIsOpen={setModalIsOpen} />
			</Modal>
		</div>
	);
};

export default OrderComplete;
