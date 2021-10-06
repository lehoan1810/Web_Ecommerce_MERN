import React from "react";
import "./PaymentProduct.css";

const PaymentProduct = () => {
	return (
		<div>
			<div className="form-payment">
				<div className="desc-order-user">
					<h3>Họ và tên</h3>
					<span>Hồng Ghi</span>
				</div>
				<div className="desc-order-address">
					<h3>Địa chỉ nhận hàng</h3>
					<span>Quận 1, Thành Phố hồ Chí Minh</span>
				</div>
			</div>
		</div>
	);
};

export default PaymentProduct;
