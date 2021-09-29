import React from "react";
import img1 from "../../../images/img2.jpg";
import "./CartTable.css";

const CartTable = () => {
	return (
		<div className="cart-table">
			<div className="table">
				<table>
					<thead>
						<tr>
							<th>Sản Phẩm</th>
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
									<span>Rachel</span>
								</div>
							</td>
							<td>Mike wazowski</td>
							<td>Mike Dawson</td>
							<td>
								<div className="image-list">
									<img src="/images/outer-space.png" alt="" />
									<img src="/images/rachelizmarvel.png" alt="" />
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
	);
};

export default CartTable;
