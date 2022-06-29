import axios from "axios";
import React, { useEffect, useState } from "react";
import allUser from "../../../../../../images/following.png";
import authHeader from "../../../../../../service/AuthHeader";
import StatisticsProduct from "./StatisticsProduct";

const StatisticsUser = () => {
	const [dataUser, setDataUser] = useState([]);
	const url = `${process.env.REACT_APP_API_LOCAL}/api/v1/statistics/2021`;

	useEffect(() => {
		const loadUser = () => {
			axios
				.get(url, { headers: authHeader() })
				.then((res) => {
					setDataUser(res.data.data.totalSoldProduct);
					console.log("users: ", res.data.data.totalSoldProduct);
				})
				.catch((err) => console.log(err));
		};
		loadUser();
	}, [url]);
	const totalOneProduct = (value) => {
		return new Intl.NumberFormat("it-IT", {
			style: "currency",
			currency: "VND",
		}).format(value);
	};
	return (
		<div className="statistics-count">
			<div className="container-statistical">
				<div className="container-statistic-items">
					<span>Doanh thu năm 2021</span>
					<div className="data-statistic-user">
						<h2>{totalOneProduct(dataUser)}</h2>
					</div>
				</div>
			</div>
			<StatisticsProduct dataStatistics={dataUser} />
		</div>
	);
};

export default StatisticsUser;
