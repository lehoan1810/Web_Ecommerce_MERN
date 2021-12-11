import React from "react";
import { Line } from "@ant-design/charts";
const ManagerData = () => {
	const data = [
		{ month: "Tháng 1", value: 3 },
		{ month: "Tháng 2", value: 4 },
		{ month: "Tháng 3", value: 3.5 },
		{ month: "Tháng 4", value: 5 },
		{ month: "Tháng 5", value: 4.9 },
		{ month: "Tháng 6", value: 6 },
		{ month: "Tháng 7", value: 7 },
		{ month: "Tháng 8", value: 9 },
		{ month: "Tháng 9", value: 13 },
		{ month: "Tháng 10", value: 13 },
		{ month: "Tháng 11", value: 8 },
		{ month: "Tháng 12", value: 9 },
	];

	const config = {
		data,
		xField: "month",
		yField: "value",
		point: {
			size: 5,
			shape: "diamond",
		},
		// smooth: true,
	};
	return (
		<div>
			<h2 className="title-admin">Thống Kê</h2>
			<Line {...config} />
		</div>
	);
};

export default ManagerData;
