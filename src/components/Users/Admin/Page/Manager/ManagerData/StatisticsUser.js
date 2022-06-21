import axios from "axios";
import React, { useEffect, useState } from "react";
import allUser from "../../../../../../images/following.png";
import authHeader from "../../../../../../service/AuthHeader";

const StatisticsUser = () => {
	const [dataUser, setDataUser] = useState([]);
	const url = `${process.env.REACT_APP_API_LOCAL}/api/v1/users/getAllCustomer`;

	useEffect(() => {
		const loadUser = () => {
			axios
				.get(url, { headers: authHeader() })
				.then((res) => {
					setDataUser(res.data.data.users);
					console.log("users: ", res.data.data.users);
				})
				.catch((err) => console.log(err));
		};
		loadUser();
	}, [url]);
	return (
		<div>
			<div className="container-statistical">
				<div className="container-statistic-items">
					<span>Khách hàng</span>
					<div className="data-statistic-user">
						<img src={allUser} alt="" />
						<h2>{dataUser.length}</h2>
					</div>
				</div>
			</div>
		</div>
	);
};

export default StatisticsUser;
