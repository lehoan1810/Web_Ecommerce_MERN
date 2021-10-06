import React from "react";
import img1 from "../../../images/img2.jpg";
import PaymentProduct from "../PaymentProduct/PaymentProduct";
import "./CartTable.css";

const CartTable = () => {
	return (
		<div className="cart-table">
			<div className="table">
				<table>
					<thead>
						<tr>
							<th>Sản Phẩm</th>
							<th>Tên Sản Phẩm</th>
							<th>Đơn Giá</th>
							<th>Số Lượng</th>
							<th>Số Tiền</th>
							<th>Thao Tác</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>
								<div className="image-text">
									<img src={img1} alt="" />
								</div>
							</td>
							<td>Mike wazowski</td>
							<td>15.000.000 VND</td>
							<td>2</td>
							<td>30.000.000 VND</td>
							<td>
								<div className="action-handel">
									<button className="action-delete">Delete</button>
								</div>
							</td>
						</tr>
					</tbody>
				</table>
			</div>
			<PaymentProduct />
		</div>
	);
};

export default CartTable;
