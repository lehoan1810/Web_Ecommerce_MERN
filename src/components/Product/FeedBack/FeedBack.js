import React from "react";
import "./FeedBack.css";
import Star from "../../../images/star.png";

const FeedBack = () => {
	return (
		<div className="feedback">
			<div className="feedback-item">
				<h1>Đánh Giá Sản Phẩm</h1>
				{/* <div className="send-feedback">
					<div className="avt-feedback">
						<img
							src="https://scontent.fsgn8-1.fna.fbcdn.net/v/t1.6435-9/119116308_2950540125251102_6477465873348125857_n.jpg?_nc_cat=110&ccb=1-5&_nc_sid=174925&_nc_ohc=yQDvZ7LoLLkAX-dmhSB&_nc_ht=scontent.fsgn8-1.fna&oh=502d247942146385fef35203f7f110c6&oe=617A6554"
							alt=""
						/>
						<span>Hồng Ghi</span>
					</div>
					<div className="text-feedback">
						<textarea placeholder="nhập vào ô trống ?" />
						<button> Send </button>
					</div>
				</div> */}
				<div className="show-feedback">
					<div className="avt-feedback">
						<img
							src="https://scontent.fsgn8-1.fna.fbcdn.net/v/t1.6435-9/119116308_2950540125251102_6477465873348125857_n.jpg?_nc_cat=110&ccb=1-5&_nc_sid=174925&_nc_ohc=yQDvZ7LoLLkAX-dmhSB&_nc_ht=scontent.fsgn8-1.fna&oh=502d247942146385fef35203f7f110c6&oe=617A6554"
							alt=""
						/>
						<div className="Name-feedback">
							<span>Hồng Ghi</span>
							<div className="icon-star">
								<img src={Star} alt="" />
								<img src={Star} alt="" />
								<img src={Star} alt="" />
								<img src={Star} alt="" />
								<img src={Star} alt="" />
							</div>
						</div>
						{/* <span>Đã mua hàng</span> */}
					</div>
					<div className="info-desc-feedback">
						<span>
							Glorious tên đầy đủ là Glorious PC Gaming Race có trụ sở tại
							Texas, Mỹ được thành lập năm 2014 với sứ mệnh thúc đẩy sự phát
							triển của thế giới PC Gaming Gear
						</span>
					</div>
				</div>
			</div>
		</div>
	);
};

export default FeedBack;
