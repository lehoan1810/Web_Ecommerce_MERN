import axios from "axios";
import React, { useEffect, useState } from "react";
import authHeader from "../../../../../../service/AuthHeader";

const StatisticsProduct = ({ dataStatistics }) => {
	const [dataUser, setDataUser] = useState([]);
	const url = `${process.env.REACT_APP_API_LOCAL}/api/v1/statistics/2022`;

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

	const checkStatistic = (dataUser, dataStatistics) => {
		const total = dataUser - dataStatistics;
		if (+total > 0) {
			return true;
		} else {
			return false;
		}
	};
	return (
		<div className="statistics-count">
			<div className="container-statistical">
				<div className="container-statistic-items">
					<span>Doanh thu năm 2022</span>
					<div className="data-statistic-user">
						<h2>{totalOneProduct(dataUser)}</h2>
					</div>
				</div>
			</div>
			<div className="container-statistical">
				<div className="container-statistic-items statistic-status">
					<span>
						Doanh thu đang{" "}
						{checkStatistic(dataUser, dataStatistics) === true
							? "TĂNG"
							: "GIẢM"}
					</span>
					<div className="data-statistic-user">
						<h2>{totalOneProduct(dataUser - dataStatistics)}</h2>
					</div>
				</div>
			</div>
		</div>
	);
};

export default StatisticsProduct;
