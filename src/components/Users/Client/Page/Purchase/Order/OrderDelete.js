import React from "react";

const OrderDelete = () => {
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
								<th>Trạng Thái</th>
								<th>Thao Tác</th>
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
										<span>Delete</span>
									</div>
								</td>
								<td>
									<div className="action-handel">
										<button className="action-delete">Delete</button>
									</div>
								</td>
							</tr>
							<tr>
								<td>Mike wazowski</td>
								<td>15.000.000 VND</td>
								<td>2</td>
								<td>30.000.000 VND</td>
								<td>
									<div className="action-status">
										<span>Delete</span>
									</div>
								</td>
								<td>
									<div className="action-handel">
										<button className="action-delete">Delete</button>
									</div>
								</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
		</div>
	);
};

export default OrderDelete;
