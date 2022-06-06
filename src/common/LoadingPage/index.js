import React from "react";
import "./style.css";

const LoadingPage = () => {
	return (
		<div className="form-loading">
			<div className="loader">
				<div className="ball"></div>
				<div className="ball"></div>
				<div className="ball"></div>
				<span>Loading...</span>
			</div>
		</div>
	);
};

export default LoadingPage;
