import React, { useState } from "react";
import { Table } from "antd";

const TableBrand = ({ columns, data, loading }) => {
	const [page, setPage] = useState(1);
	const [pageSize, setPageSize] = useState(3);

	return (
		<div>
			<div className="table-Product">
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
					rowKey="_id"
				/>
			</div>
		</div>
	);
};

export default TableBrand;
