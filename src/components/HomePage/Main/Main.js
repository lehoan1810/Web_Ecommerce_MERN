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
// import giado from "../../../images/giado.png";

const Main = () => {
	return (
		<div>
			<main>
				<section className="hero">
					<div className="container">
						<div className="hero-content">
							<h1 className="hero-heading">Computer</h1>
							<h3 className="hero-caption">Online Shop</h3>
							<div className="hero-video">
								<img src="" alt="" />
								<span>Open - 8:00 AM</span>
							</div>
						</div>
					</div>
				</section>
				<section className="feature">
					<div className="container">
						<div className="feature-main">
							<div className="feature-item">
								<div className="feature-icon">
									<img src={IconQuality} alt="" />
								</div>
								<h3 className="feature-title">Quality</h3>
								<div className="feature-desc text">
									Is a store that provides the most prestigious computer
									accessories, and does not disappoint customers.
								</div>
							</div>
							<div className="feature-item">
								<div className="feature-icon">
									<img src={IconModern} alt="" />
								</div>
								<h3 className="feature-title">Reputations</h3>
								<div className="feature-desc text">
									Is the most prestigious store today.
								</div>
							</div>
							<div className="feature-item">
								<div className="feature-icon">
									<img src={IconReputations} alt="" />
								</div>
								<h3 className="feature-title">Modern</h3>
								<div className="feature-desc text">
									The items are always the latest and most modern lines.
								</div>
							</div>
						</div>
					</div>
				</section>
				<section className="about" id="about">
					<div className="container">
						<div className="about-main">
							<div className="about-content">
								<h3 className="caption">About us</h3>
								<h2 className="heading">Give your workplace a modern look</h2>
								<div className="text">
									Phasellus pulvinar iaculis nunc at placerat. Sed porta
									sollicitudin eros, vel sagittis turpis consequat nec. Donec ac
									viverra ligula, in scelerisque leo.
								</div>
							</div>
							<div className="about-image">
								<img src={img3} alt="" className="about-phone-under" />
								<img src="" alt="" className="about-phone" />
							</div>
						</div>
					</div>
				</section>
				<section className="work" id="work">
					<div className="container">
						<div className="work-header">
							<h3 className="caption">work</h3>
							<h2 className="heading">Featured products</h2>
							<div className="text">
								These are the types of products that are most trusted by users
								of the shop
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
				<section className="experience" id="experience">
					<div className="container">
						<div className="experience-main">
							<div className="experience-number">
								<span className="experience-year">4</span>
								{/* <img src={giado} alt="" /> */}
								<img src="" alt="" className="experience-dots" />
							</div>
							<div className="experience-content">
								<h3 className="caption">Experience</h3>
								<h2 className="heading">Operational Experience</h2>
								<div className="text">
									Has many years of experience in providing the best quality
									computer products and accessories
								</div>
							</div>
						</div>
					</div>
				</section>
				<section className="partner" id="blog">
					<div className="container">
						<div className="partner-header">
							<h3 className="caption">Partner</h3>
						</div>
						<div className="partner-list">
							<div className="partner-item">
								<img src="" alt="" />
							</div>
							<div className="partner-item">
								<img src="" alt="" />
							</div>
							<div className="partner-item">
								<img src="" alt="" />
							</div>
							<div className="partner-item">
								<img src="" alt="" />
							</div>
							<div className="partner-item">
								<img src="" alt="" />
							</div>
							<div className="partner-item">
								<img src="" alt="" />
							</div>
							<div className="partner-item">
								<img src="" alt="" />
							</div>
							<div className="partner-item">
								<img src="" alt="" />
							</div>
						</div>
					</div>
				</section>
				<section className="review">
					<div className="container">
						<div className="review-header">
							<h3 className="caption">Testimonials</h3>
							<h2 className="heading">See our Customers’ Reviews</h2>
							<div className="text">
								Phasellus pulvinar iaculis nunc at placerat. Sed porta
								sollicitudin eros, vel sagittis.
							</div>
						</div>
						<div className="review-list">
							<div className="review-item">
								<img src="" alt="" className="review-icon" />
								<div className="review-desc">
									Rump spare ribs tail
									<strong>pastrami ham hock turducken</strong> fatback salami
									ham hock tender login drumstick pork bel.
								</div>
								<img src="" alt="" className="review-avatar" />
								<h3 className="review-author">Judie Lipsy</h3>
							</div>
						</div>
					</div>
				</section>
			</main>
		</div>
	);
};

export default Main;
