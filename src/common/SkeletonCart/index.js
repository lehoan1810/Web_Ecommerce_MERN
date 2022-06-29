import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import "./style.css";

const SkeletonCart = () => {
	return (
		<div>
			<div className="card-inside">
				<Skeleton height="140px" width="600px" />
			</div>
			<div className="card-inside">
				<Skeleton height="140px" width="600px" />
			</div>
		</div>
	);
};

export default SkeletonCart;
