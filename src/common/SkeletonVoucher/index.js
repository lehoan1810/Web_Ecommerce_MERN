import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import "./style.css";

const SkeletonVoucher = () => {
	return (
		<div>
			<div className="card-inside">
				<Skeleton height="140px" width="100%" />
			</div>
			<div className="card-inside">
				<Skeleton height="140px" width="100%" />
			</div>
			<div className="card-inside">
				<Skeleton height="140px" width="100%" />
			</div>
		</div>
	);
};

export default SkeletonVoucher;
