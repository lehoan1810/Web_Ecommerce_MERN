import React from "react";
import "./CreateProduct.css";

const CreateProduct = () => {
	return (
		<div className="add-product">
			{/* <Image
						style={{ width: 200, height: 200 }}
						cloudName="dbml4nd68"
						publicId={dataimage}
						src={dataimage}
					/>
					<input
						onChange={(e) => setImageSelected(e.target.files[0])}
						className="course-desc"
						type="file"
					/>
					<button className="btn-loadImg-profile" onClick={uploadImage}>
						upload Image
					</button>
				</div> */}

			<div className="add-product-left">
				<img
					src="https://channel.mediacdn.vn/2019/8/26/photo-1-15668038321241232406768.jpg"
					alt=""
				/>
			</div>
			<div className="add-product-right">
				<div className="add-name-product add-item">
					<span>Name Product</span>
					<input placeholder="Name Product ..." />
				</div>
				<div className="add-desc-product add-item">
					<span>Description Product</span>
					<textarea placeholder="desc Product ..." />
				</div>
				<div className="add-category-product add-item">
					<span>Category Product</span>
					<input placeholder="Category Product ..." />
				</div>
				<div className="add-price-product add-item">
					<span>Price Product</span>
					<input placeholder="Price Product ..." />
				</div>
				<div className="button-add-product">
					<button>Add Product</button>
				</div>
			</div>
		</div>
	);
};

export default CreateProduct;
