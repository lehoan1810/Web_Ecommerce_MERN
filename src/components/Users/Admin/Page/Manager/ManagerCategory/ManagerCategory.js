import React from "react";
import "./ManagerCategory.css";

const ManagerCategory = () => {
	return (
		<div>
			<h2 className="title-admin">Quản Lý danh mục sản phẩm</h2>
			<div className="button-add-category">
				<input className="input-category" placeholder="nhập tên danh mục" />
				<button className="btn-add-category">tạo danh mục</button>
			</div>
			<div className="table-category">
				<div className="table">
					<table>
						<thead>
							<tr>
								<th>Danh mục</th>
								<th>Số lượng</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td>Bàn phím</td>
								<td>12</td>
								<td>
									<div className="action-handel">
										<button className="action-delete">Delete</button>
									</div>
								</td>
							</tr>
							<tr>
								<td>Màn hình</td>
								<td>9</td>

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

export default ManagerCategory;
