import React from "react";
import errImg from "../../images/err.gif";
import "./NotPage.css";
function NotPage() {
	return (
		<div className="err-form">
			<img className="err-img" src={errImg} alt="" />
		</div>
	);
}

export default NotPage;
