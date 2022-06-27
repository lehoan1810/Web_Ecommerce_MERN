import React, { useEffect, useState } from "react";
import Modal from "react-modal";
import ModalOrder from "./ModalOrder/ModalOrder";
import Moment from "react-moment";
import axios from "axios";
import authHeader from "../../../../../../service/AuthHeader";
import { toast } from "react-toastify";
import Loading from "../../../../../Loading/Loading";
import { Select, Input } from "antd";
const { Option } = Select;
const { Search } = Input;

const ProductPending = () => {
	const [modalIsOpen, setModalIsOpen] = useState(false);
	const [dataModa, setDataModal] = useState([]);
	const [nameUser, setNameUser] = useState([]);
	const [chooseDay, setChooseDay] = useState(30);
	const [valueSearch, setValueSearch] = useState("");

	const dataChooseDay = [
		{
			id: "1",
			date: 3,
			name: "3 ngày gần nhất",
		},
		{
			id: "2",
			date: 10,
			name: "10 ngày gần nhất",
		},
		{
			id: "3",
			date: 30,
			name: "30 ngày gần nhất",
		},
	];
	const [dataOrder, setDataOrder] = useState([]);
	const [loading, setLoading] = useState(true);

	const onSearch = (value) => {
		setValueSearch(value);
	};

	const handleChange = (item) => {
		setChooseDay(item);
	};
	const urls = `${process.env.REACT_APP_API_LOCAL}/api/v1/orders?sort=date&status=0&chooseDay=${chooseDay}&search=${valueSearch}`;
	useEffect(() => {
		const loadData = () => {
			axios
				.get(urls, { headers: authHeader() })
				.then((res) => {
					setDataOrder(res.data.data.resultProductData);
					setLoading(false);
				})
				.catch((err) => console.log(err));
		};
		loadData();
	}, [urls, chooseDay]);

	const onHandleAccept = (idOrder) => {
		const url = `${process.env.REACT_APP_API_LOCAL}/api/v1/orders/${idOrder}`;
		axios
			.patch(
				url,
				{
					status: 1,
					// chooseDay: chooseDay;
				},
				{ headers: authHeader() }
			)
			.then((res) => {
				toast.success("Xử lý thành công !!!");
				window.location.reload();
				console.log(res.data);
			})
			.catch((err) => console.log("lỗi, vui lòng thử lại!"));
	};

	const onHandleDetail = (idOrder, item) => {
		setModalIsOpen(true);
		setDataModal(idOrder);
		setNameUser(item);
	};

	return (
		<div>
			<div>
				<Select
					defaultValue="select Day"
					style={{ width: 120 }}
					onChange={handleChange}
				>
					{dataChooseDay &&
						dataChooseDay.map((item, id) => (
							<Option key={id} value={item.date}>
								{item.name}
							</Option>
						))}
				</Select>
				<Search
					placeholder="Tìm kiếm "
					allowClear
					enterButton="Search"
					// size="large"
					onSearch={onSearch}
					className="search-product"
				/>
				<div>
					{/* <input type="text" onChange={(e) => onSearch(e.target.value)} /> */}
				</div>
			</div>
			<div className="Order-table">
				<div className="table">
					<table>
						<thead>
							<tr>
								<th>Tên Khách hàng</th>
								<th>Tổng tiền đơn hàng</th>
								<th>Ngày</th>
								<th>Tình trạng</th>
								<th>Chi tiết</th>
								<th>Thao Tác</th>
							</tr>
						</thead>
						<tbody>
							{loading === true && (
								<tr>
									<td colSpan={6}>
										<Loading />
									</td>
								</tr>
							)}
							{dataOrder &&
								dataOrder.map((item, id) => (
									<tr key={id}>
										<td>{item.nameUser}</td>
										<td>
											{new Intl.NumberFormat("it-IT", {
												style: "currency",
												currency: "VND",
											}).format(item.order.totalPrice)}
										</td>
										<td>
											<Moment format="DD-MM-YYYY">{item.order.date}</Moment>
										</td>
										<td>
											<span className="action-status">Waiting</span>
										</td>
										<td>
											<div className="action-handel">
												<button
													onClick={() => onHandleDetail(item.order._id, item)}
													className="action-accept"
												>
													Xem
												</button>
											</div>
										</td>
										<td>
											<div className="action-handel">
												<button
													onClick={() => onHandleAccept(item.order._id)}
													className="action-accept"
												>
													Xác nhận
												</button>
											</div>
										</td>
									</tr>
								))}
						</tbody>
					</table>
				</div>
			</div>
			<Modal
				isOpen={modalIsOpen}
				//err
				ariaHideApp={false}
				//
				onRequestClose={() => setModalIsOpen(false)}
				style={{
					overlay: {
						backgroundColor: "rgba(0,0,0,0.4)",
					},
					content: {
						width: "90rem",
						margin: "auto",
						height: "50rem",
					},
				}}
			>
				<ModalOrder
					nameUser={nameUser}
					data={dataModa}
					setModalIsOpen={setModalIsOpen}
				/>
			</Modal>
		</div>
	);
};

export default ProductPending;
