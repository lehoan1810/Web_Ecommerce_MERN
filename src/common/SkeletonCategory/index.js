import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import "./style.css";

const SkeletonCategry = () => {
	return (
		<div className="skeleton-category-flex">
			<div className="card-inside">
				<Skeleton height="200px" width="290px" />
				<h4 className="card-title">
					<Skeleton height={36} width={`290px`} />
				</h4>
				<p className="card-channel">
					<Skeleton width={`290px`} />
				</p>
			</div>
			<div className="card-inside">
				<Skeleton height="200px" width="290px" />
				<h4 className="card-title">
					<Skeleton height={36} width={`290px`} />
				</h4>
				<p className="card-channel">
					<Skeleton width={`290px`} />
				</p>
			</div>
			<div className="card-inside">
				<Skeleton height="200px" width="290px" />
				<h4 className="card-title">
					<Skeleton height={36} width={`290px`} />
				</h4>
				<p className="card-channel">
					<Skeleton width={`290px`} />
				</p>
			</div>
			<div className="card-inside">
				<Skeleton height="200px" width="290px" />
				<h4 className="card-title">
					<Skeleton height={36} width={`290px`} />
				</h4>
				<p className="card-channel">
					<Skeleton width={`290px`} />
				</p>
			</div>
			<div className="card-inside">
				<Skeleton height="200px" width="290px" />
				<h4 className="card-title">
					<Skeleton height={36} width={`290px`} />
				</h4>
				<p className="card-channel">
					<Skeleton width={`290px`} />
				</p>
			</div>
			<div className="card-inside">
				<Skeleton height="200px" width="290px" />
				<h4 className="card-title">
					<Skeleton height={36} width={`290px`} />
				</h4>
				<p className="card-channel">
					<Skeleton width={`290px`} />
				</p>
			</div>
		</div>
	);
};

export default SkeletonCategry;
