import React, { useState } from "react";
import "./ItemDetail.css";
import HeaderProduct from "../../Category/HeaderProduct/HeaderProduct";
import img1 from "../../../images/img2.jpg";
import { Link } from "react-router-dom";
import Like from "../../../images/like.png";
import FeedBack from "../FeedBack/FeedBack";

const ItemDetail = () => {
	const [count, setCount] = useState(0);
	const Increase = () => {
		setCount(count + 1);
	};
	const Decrease = () => {
		count <= 0 ? setCount(0) : setCount(count - 1);
	};
	return (
		<div className="product-background">
			<HeaderProduct />
			<div className="container-detail">
				<div className="container-detail-flex">
					<div className="detail-image">
						<img src={img1} alt="" />
					</div>
					<div className="detail-info-item">
						<h2 className="name-detail-item">
							Bàn phím cơ custom Glorious GMMK PRO RGB Black Slate (Custom Build
							/ Aluminum / ANSI / Hot Swap)
						</h2>
						<span className="detail-version">
							Phiên bản Custom build chưa bao gồm: Switch, Keycap
						</span>
						<span className="detail-desc">
							GMMK Pro là bàn phím cơ custom nhôm nguyên khối với phần plate
							kiểu gasket-mount, layout 75% mạch Hot-Swap phù hợp với những
							người bắt đầu chơi bàn phím cơ, người chơi bàn phím cơ lâu năm và
							game thủ yêu thích bàn phím cơ.
						</span>
						<span className="detail-insurance">Bảo hành: 24 tháng</span>
						<span className="detail-price">1.2000.000 VND</span>
						<div className="quantity-item">
							<button className="btn-quantity " onClick={Decrease}>
								-
							</button>
							<span>{count}</span>
							<button className="btn-quantity" onClick={Increase}>
								+
							</button>
						</div>
						<div className="handle-item-detail">
							<Link to="" className="detail-add-card">
								Thêm vào giỏ hàng
							</Link>
							<Link to="" className="buy-now">
								Mua ngay
							</Link>
							<button className="detail-item-like">
								<img className="item-like-img" src={Like} alt="" />
							</button>
						</div>
					</div>
				</div>
			</div>
			<FeedBack />
		</div>
	);
};

export default ItemDetail;
