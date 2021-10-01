import React, { useState } from "react";
import { Table } from "antd";
import "./LikeProduct.css";

const TableLike = ({ columns, data, loading }) => {
	const [page, setPage] = useState(1);
	const [pageSize, setPageSize] = useState(3);

	return (
		<div>
			<h2 className="table-like-title">SẢN PHẨM ĐÃ THÍCH</h2>
			<div className="table-like">
				<Table
					columns={columns}
					dataSource={data}
					pagination={{
						current: page,
						pageSize: pageSize,
						onChange: (page, pageSize) => {
							setPage(page);
							setPageSize(pageSize);
						},
					}}
					loading={loading}
					// rowKey="idTeacher"
				/>
			</div>
		</div>
	);
};

export default TableLike;
