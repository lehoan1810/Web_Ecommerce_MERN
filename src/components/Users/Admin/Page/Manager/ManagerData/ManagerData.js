import React, { useEffect, useState } from "react";
import { Line } from "@ant-design/charts";
import StatisticsUser from "./StatisticsUser";
import StatisticsProduct from "./StatisticsProduct";
import { Calendar } from "antd";
import moment from "moment";

import "./ManagerData.css";
import axios from "axios";
import authHeader from "../../../../../../service/AuthHeader";

const ManagerData = () => {
	const [dataStatistic, setDataStatistic] = useState([]);
	function onPanelChange(value, mode) {
		console.log(value, mode);
	}
	let today = new Date(),
		date =
			today.getFullYear() +
			"-" +
			(today.getMonth() + 1) +
			"-" +
			today.getDate();
	console.log("ngày", moment(date));

	let yearsCurrent = new Date(),
		newYears = yearsCurrent.getFullYear();
	console.log("years: ", newYears);
	const url = `${process.env.REACT_APP_API_LOCAL}/api/v1/statistics/${newYears}`;
	useEffect(() => {
		const loadUser = () => {
			axios
				.get(url, { headers: authHeader() })
				.then((res) => {
					setDataStatistic(res.data.data.months);
					console.log(res.data.data.months);
				})
				.catch((err) => console.log(err));
		};
		loadUser();
	}, [url]);

	let data = [...dataStatistic];
	console.log("test:", data);

	const config = {
		data,
		xField: "month",
		yField: "value",
		point: {
			size: 5,
			style: {
				opacity: 0.5,
				stroke: "#5AD8A6",
				fill: "#fff",
			},
			shape: "circle",
		},
		smooth: true,
		color: "#F44772",
		lineStyle: {
			lineWidth: 4,
			opacity: 0.5,
		},
	};
	return (
		<div>
			<h2 className="title-admin">Thống Kê</h2>
			<div className="first-part-statistics">
				<div className="statistics-count">
					<StatisticsUser />
					<StatisticsProduct />
				</div>
				<div className="site-calendar-demo-card">
					<Calendar fullscreen={false} onPanelChange={onPanelChange} />
				</div>
			</div>

			<br />
			<Line {...config} />
		</div>
	);
};

export default ManagerData;
