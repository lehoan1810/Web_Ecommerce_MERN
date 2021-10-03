import React from "react";

const ProductPending = () => {
	return (
		<div>
			<div className="Order-table">
				<div className="table">
					<table>
						<thead>
							<tr>
								<th>Tên Khách hàng</th>
								<th>Tên Sản Phẩm</th>
								<th>Đơn Giá</th>
								<th>Số Lượng</th>
								<th>Số Tiền</th>
								<th>Thao Tác</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td>Mike wazowski</td>
								<td>
									Bàn phím cơ custom Glorious GMMK PRO RGB White Ice (Custom
									Build / Aluminum / ANSI / Hot Swap)
								</td>
								<td>15.000.000 VND</td>
								<td>2</td>
								<td>30.000.000 VND</td>
								<td>
									<div className="action-handel">
										<button className="action-accept">Accept</button>
									</div>
								</td>
							</tr>
							<tr>
								<td>Mike wazowski</td>
								<td>
									Bàn phím cơ Filco Majestouch Minila-R Convertible Sky Gray
								</td>
								<td>15.000.000 VND</td>
								<td>2</td>
								<td>30.000.000 VND</td>

								<td>
									<div className="action-handel">
										<button className="action-accept">Accept</button>
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

export default ProductPending;
