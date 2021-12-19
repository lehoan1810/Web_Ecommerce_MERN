import React from "react";
import Slider from "react-slick";
import New from "../../../images/crown.png";
import "./ProductNew.css";

const ProductNew = () => {
	var settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 3,
		slidesToScroll: 3,
	};
	return (
		<div>
			<div className="container-product-new">
				<h2 className="title-product-new">
					Sản phẩm mới
					<img className="icon-product-new" src={New} alt="" />
				</h2>

				<div className="list-product-new">
					<Slider {...settings}>
						<div>
							<img alt="" src="http://placekitten.com/g/400/200" />
						</div>
						<div>
							<img alt="" src="http://placekitten.com/g/400/200" />
						</div>
						<div>
							<img alt="" src="http://placekitten.com/g/400/200" />
						</div>
						<div>
							<img alt="" src="http://placekitten.com/g/400/200" />
						</div>
					</Slider>
				</div>
			</div>
		</div>
	);
};

export default ProductNew;
