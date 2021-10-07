import React from "react";
import "./PaymentProduct.css";

const PaymentProduct = () => {
	return (
		<div className="form-payment">
			<div className="desc-order-user">
				<h3>Họ và tên</h3>
				<span>Hồng Ghi</span>
			</div>
			<div className="desc-order-address">
				<h3>Địa chỉ nhận hàng</h3>
				<span>Quận 1, Thành Phố hồ Chí Minh</span>
			</div>
			<div className="payment-product">
				<div className="price-product">
					<h3>Tạm tính</h3>
					<span>99.000 VNĐ</span>
				</div>
				<div className="discount-product">
					<h3>Giảm Giá</h3>
					<span>0 VNĐ</span>
				</div>
			</div>
			<div className="btn-payment-price">
				<button>Thanh Toán</button>
			</div>
		</div>
	);
};

export default PaymentProduct;
