import React from "react";
import "./LoadingPage.css";
import loading from "../../images/loading-cat.gif";

const LoadingPage = () => {
	return (
		<div className="custom-loading-page">
			<img src={loading} alt="" />
		</div>
	);
};

export default LoadingPage;
