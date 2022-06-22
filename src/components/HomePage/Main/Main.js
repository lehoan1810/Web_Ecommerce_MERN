import React from "react";
import { Link } from "react-router-dom";
import img3 from "../../../images/img3.png";
import IconQuality from "../../../images/IconQuality.png";
import IconReputations from "../../../images/IconReputation.png";
import IconModern from "../../../images/IconModern.png";
import img4 from "../../../images/img4.jpg";
import img5 from "../../../images/img5.png";
import img6 from "../../../images/img6.png";
import img7 from "../../../images/img7.png";
import ArrowRight from "../../../images/ArrowRight.png";
import ProductNew from "../../Category/ProductNew/ProductNew";

const Main = () => {
	return (
		<div>
			<main>
				{/* <section className="hero">
					<div className="container">
						<div className="hero-content">
							<h2 className="hero-heading">Computer</h2>
							<h3 className="hero-caption">Shop Online</h3>
							<div className="hero-video">
								<span>Open - 8:00 AM</span>
								<span>Close - 5:00 PM</span>
							</div>
						</div>
					</div>
				</section> */}
				<div className="banner1">
					<div className="container1">
						<div className="hero-content">
							<h2 className="hero-heading">Computer</h2>
							<p className="hero-caption">
								Everything That You Want To Know Woolib Shop
							</p>
							<form>
								<input
									type="text"
									className="search-input"
									placeholder="Tìm kiếm sản phẩm . . ."
								/>
							</form>
						</div>
					</div>
				</div>
				<section className="feature">
					<div className="container">
						<div className="feature-main">
							<div className="feature-item">
								<div className="feature-icon">
									<img src={IconQuality} alt="" />
								</div>
								<h3 className="feature-title">Chất Lượng</h3>
								<div className="feature-desc text">
									Sản phẩm chất lượng hàng đầu
								</div>
							</div>
							<div className="feature-item">
								<div className="feature-icon">
									<img src={IconModern} alt="" />
								</div>
								<h3 className="feature-title">Bảo Hành</h3>
								<div className="feature-desc text">
									Bảo hành toàn sản phẩm trong 2 năm
								</div>
							</div>
							<div className="feature-item">
								<div className="feature-icon">
									<img src={IconReputations} alt="" />
								</div>
								<h3 className="feature-title">Hiện đại</h3>
								<div className="feature-desc text">
									Những mặt hàng, sản phẩm đều là model mới nhất
								</div>
							</div>
						</div>
					</div>
				</section>
				<section className="about">
					<div className="container">
						<div className="work-header">
							<h3 className="caption">Dòng sản phẩm mới </h3>
							<div className="text">
								Đây là những dòng sản phẩm hot nhất là cửa hàng có được
							</div>
						</div>
						<ProductNew />
					</div>
				</section>
				<section className="about">
					<div className="container">
						<div className="work-header">
							<h3 className="caption">Những phụ kiện nổi bật </h3>
							<div className="text">
								Những dòng phụ kiện được người dùng ưu chuộng nhất
							</div>
						</div>
						<div className="card-outstanding-flex">
							<div className="card-outstanding">
								<img
									className="card-outstanding-images"
									src="https://cdn.dribbble.com/users/486985/screenshots/14161095/media/a2efbe029701f63c428679e356c6771d.jpg?compress=1&resize=400x300"
									alt=""
								/>
								<span>Laptop</span>
							</div>
							<div className="card-outstanding">
								<img
									className="card-outstanding-images"
									src="https://cdn.dribbble.com/users/99875/screenshots/11050290/isolation-office_dribbble.png?compress=1&resize=400x300"
									alt=""
								/>
								<span>Chuột</span>
							</div>
							<div className="card-outstanding">
								<img
									className="card-outstanding-images"
									src="https://cdn.dribbble.com/userupload/2713130/file/original-c5eeea77c5957ad47ccfd665f85d3eb9.png?compress=1&resize=400x300&vertical=top"
									alt=""
								/>
								<span>Tai nghe</span>
							</div>
							<div className="card-outstanding">
								<img
									className="card-outstanding-images"
									src="https://design4users.com/wp-content/uploads/2020/02/3d-illustration-workspace.jpg.pagespeed.ce.Fx4pca0q_y.jpg"
									alt=""
								/>
								<span>Bàn phím</span>
							</div>
						</div>
						<div className="card-outstanding-see-more">
							<Link to="/product">Xem thêm</Link>
							<img src={ArrowRight} alt="" />
						</div>
					</div>
				</section>
				<section className="about" id="about">
					<div className="container">
						<div className="about-main">
							<div className="about-image">
								<img src={img3} alt="" className="about-phone-under" />
							</div>
							<div className="about-content">
								<h3 className="caption">Về chúng tôi</h3>
								<div className="text">
									<strong>WooLib Computer </strong>
									là nhà phân phối độc quyền các thương hiệu lớn trên thế giới
									như bàn phím cơ Filco (từ tập đoàn Diatec – Nhật Bản), bàn
									phím cơ Realforce (từ tập đoàn Topre – Nhật Bản), cân màu
									Spyder (từ tập đoàn Datacolor – Mỹ), gaming gear thương hiệu
									Glorious (Glorious PC Gaming Race - Mỹ) và Pulsar đến từ Hàn
									Quốc.
								</div>
							</div>
						</div>
					</div>
				</section>
				<section className="work" id="work">
					<div className="container">
						<div className="work-header">
							<h3 className="caption">Nổi Bật</h3>
							<div className="text">
								Đây là những loại sản phẩm được người dùng tin tưởng nhất của
								shop
							</div>
						</div>
						<div className="work-list">
							<div className="work-item">
								<img src={img4} alt="" />
							</div>
							<div className="work-item">
								<img src={img5} alt="" />
							</div>
							<div className="work-item">
								<img src={img6} alt="" />
							</div>
							<div className="work-item">
								<img src={img7} alt="" />
							</div>
						</div>
						<Link to="/product" href="#" className="btn btn--primary work-link">
							All works
						</Link>
					</div>
				</section>
			</main>
		</div>
	);
};

export default Main;
