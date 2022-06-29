import React, { useEffect, useState } from "react";
import { Line, Column } from "@ant-design/charts";
// import { Column } from "@ant-design/plots";
import StatisticsUser from "./StatisticsUser";
import StatisticsProduct from "./StatisticsProduct";
import { Select } from "antd";
import moment from "moment";

import "./ManagerData.css";
import axios from "axios";
import authHeader from "../../../../../../service/AuthHeader";

const { Option } = Select;

const ManagerData = () => {
	const [dataStatistic, setDataStatistic] = useState([]);
	const [dataTurnovers, setDataTurnovers] = useState([]);

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
	const [year, setYear] = useState(newYears);
	const handleChange = (item) => {
		setYear(item);
	};
	const url = `${process.env.REACT_APP_API_LOCAL}/api/v1/statistics/${year}`;
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

	const config = {
		data,
		xField: "month",
		yField: "total",
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
				<StatisticsUser />
			</div>

			<br />
			<div>
				<h2 className="title-graph">Đồ thị doanh thu qua các tháng</h2>
				<div className="graph-product">
					<Select
						defaultValue={year}
						style={{ width: 120 }}
						onChange={handleChange}
					>
						<Option value="2021">2021</Option>
						<Option value="2022">2022</Option>
					</Select>
				</div>
				<Line {...config} />
			</div>
			<br />
		</div>
	);
};

export default ManagerData;
