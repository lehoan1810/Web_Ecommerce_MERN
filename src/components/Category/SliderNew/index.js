import React from "react";
import { Pagination, Navigation, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react/swiper-react";

import "swiper/swiper.min.css";
import "swiper/modules/pagination/pagination.min.css";
import "swiper/modules/navigation/navigation.min.css";
import "./style.css";
import Banner1 from "../../../images/banner1.png";

const SliderNew = () => {
	return (
		<div className="container-slider">
			<Swiper
				slidesPerView={1}
				spaceBetween={30}
				loop={true}
				pagination={{
					clickable: true,
				}}
				navigation={true}
				modules={[Pagination, Navigation]}
				className="mySwiper"
			>
				<SwiperSlide>
					<img
						src="https://img.freepik.com/free-photo/trendy-stylish-office-studio-workspace-interior-design-with-computer-decor-wood-table_67155-22063.jpg?w=1380"
						alt=""
					/>
				</SwiperSlide>
				<SwiperSlide>
					<img
						src="https://ucarecdn.com/c9c62495-04ca-4db2-b796-5759deae96e0/-/format/auto/-/preview/3000x3000/-/quality/lighter/glorious_gaming_gmmk_pro_gaming_keyboard_4_1728x_1.jpg"
						alt=""
					/>
				</SwiperSlide>
				<SwiperSlide>
					<img src={Banner1} alt="" />
				</SwiperSlide>
			</Swiper>
		</div>
	);
};

export default SliderNew;
