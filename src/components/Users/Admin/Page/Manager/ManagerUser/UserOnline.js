import React from "react";
import Lock from "../../../../../../images/lock.png";

const UserOnline = () => {
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
								<th>Block</th>
								<th>Thao Tác</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td>
									<div className="avatar-center avatar-status">
										<span className="_status"></span>
										<img
											className="image-cover avatar-image"
											src="https://scontent.fsgn3-1.fna.fbcdn.net/v/t1.6435-9/82398379_2724049827900134_6357295022559199232_n.jpg?_nc_cat=107&ccb=1-5&_nc_sid=8bfeb9&_nc_ohc=CPdfaerbjkcAX9dJZJD&_nc_ht=scontent.fsgn3-1.fna&oh=0885b39ffc7a9bec323b7d1de1650da2&oe=617C6254"
											alt=""
										/>
									</div>
								</td>
								<td>Hồng Ghi</td>
								<td>HongGi@gmail.com</td>
								<td>090123456</td>
								<td>
									<div className="action-handel">
										<button className="action-lock">
											<img src={Lock} alt="" />
										</button>
									</div>
								</td>

								<td>
									<div className="action-handel">
										<button className="action-delete">Delete</button>
									</div>
								</td>
							</tr>
							<tr>
								<td>
									<div className="avatar-center avatar-status">
										<span className="_status"></span>
										<img
											className="image-cover avatar-image"
											src="https://scontent.fsgn3-1.fna.fbcdn.net/v/t1.6435-9/82398379_2724049827900134_6357295022559199232_n.jpg?_nc_cat=107&ccb=1-5&_nc_sid=8bfeb9&_nc_ohc=CPdfaerbjkcAX9dJZJD&_nc_ht=scontent.fsgn3-1.fna&oh=0885b39ffc7a9bec323b7d1de1650da2&oe=617C6254"
											alt=""
										/>
									</div>
								</td>
								<td>Hồng Ghi</td>
								<td>HongGi@gmail.com</td>
								<td>090123456</td>
								<td>
									<div className="action-handel">
										<button className="action-lock">
											<img src={Lock} alt="" />
										</button>
									</div>
								</td>

								<td>
									<div className="action-handel">
										<button className="action-delete">Delete</button>
									</div>
								</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
		</div>
	);
};

export default UserOnline;
