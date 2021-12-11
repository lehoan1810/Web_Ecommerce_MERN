import axios from "axios";
import React, { useEffect, useState } from "react";
import Show from "../../../../../../images/Show.png";
import authHeader from "../../../../../../service/AuthHeader.js";
import Loading from "../../../../../Loading/Loading";
import "./DetailUser.css";

const DetailUser = () => {
	const [dataUser, setDataUser] = useState([]);
	const [loading, setLoading] = useState(true);
	const url = `${process.env.REACT_APP_API_LOCAL}/api/v1/users/getAllCustomer`;

	useEffect(() => {
		const loadUser = () => {
			axios
				.get(url, { headers: authHeader() })
				.then((res) => {
					setDataUser(res.data.data.users);
					console.log(res.data.data.users);
					setLoading(false);
				})
				.catch((err) => console.log(err));
		};
		loadUser();
	}, [url]);
	return (
		<div>
			<div className="Order-table">
				<div className="table">
					<table>
						<thead>
							<tr>
								<th>Avatar</th>
								<th>Họ và Tên</th>
								<th>Email</th>
								<th>Phone</th>
								<th>Thao Tác</th>
							</tr>
						</thead>
						<tbody>
							{loading === true && (
								<tr>
									<td colSpan={5}>
										<Loading />
									</td>
								</tr>
							)}
							{loading === false &&
								dataUser.map((item, id) => (
									<tr key={id}>
										<td>
											<div className="avatar-center avatar-status">
												<span className="_status"></span>
												<img
													className="image-cover avatar-image"
													src={item.photo}
													alt=""
												/>
											</div>
										</td>
										<td>{item.name}</td>
										<td>{item.email}</td>
										<td>{item.phone}</td>

										<td>
											<div className="action-handel">
												<button className="action-detail">
													<img src={Show} alt="" />
												</button>
											</div>
										</td>
									</tr>
								))}
						</tbody>
					</table>
				</div>
			</div>
		</div>
	);
};

export default DetailUser;
