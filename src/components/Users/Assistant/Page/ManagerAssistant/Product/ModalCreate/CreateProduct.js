import React from "react";

const CreateProduct = () => {
	return (
		<div className="profile">
			<div className="profile-left">
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

				<img
					className="img-left"
					src="https://scontent.fsgn8-2.fna.fbcdn.net/v/t1.6435-9/178798943_3120069478298165_5504585504839378314_n.jpg?_nc_cat=110&ccb=1-5&_nc_sid=8bfeb9&_nc_ohc=eOOEH2EO8UoAX_iNqpa&_nc_ht=scontent.fsgn8-2.fna&oh=3e427c20580275813462db1e3bab8f20&oe=617D8523"
					alt=""
				/>
			</div>
			<div className="profile-right">
				<h1 className="title-profile-right">Personal information</h1>
				<div className="update-profile-item">
					<span className="item-info">Email:</span>
					<input placeholder="HongGhi@gmail.com" />
				</div>
				<div className="update-profile-item">
					<span className="item-info">Name:</span>
					<input placeholder="Hồng Ghi" />
				</div>

				<div className="update-profile-item">
					<span className="item-info">Full name:</span>
					<input placeholder="HongGhi@gmail.com" />
				</div>
				<div className="update-profile-item">
					<span className="item-info">Phone Number:</span>
					<input placeholder="HongGhi@gmail.com" />
				</div>
				<div className="update-profile-item">
					<span className="item-info">Address</span>
					<input placeholder="HongGhi@gmail.com" />
				</div>
				<button className="btn-update-account">Update Account</button>
			</div>
		</div>
	);
};

export default CreateProduct;
