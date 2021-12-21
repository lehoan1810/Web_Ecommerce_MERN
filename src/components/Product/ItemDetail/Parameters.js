import React from "react";
import { Tabs } from "antd";
import { CoffeeOutlined, SettingOutlined } from "@ant-design/icons";
import parse from "html-react-parser/dist/html-react-parser";
const { TabPane } = Tabs;
const Parameters = ({ dataDetail }) => {
	return (
		<div className="specifications">
			<Tabs defaultActiveKey="1">
				<TabPane
					tab={
						<span>
							<CoffeeOutlined />
							Giới thiệu
						</span>
					}
					key="1"
				>
					Computer Shop mang đến nhiều sản phẩm cùng với nhiều mẫu mã khác nhau
				</TabPane>
				<TabPane
					tab={
						<span>
							<SettingOutlined />
							Thông số sản phẩm
						</span>
					}
					key="2"
				>
					{dataDetail.specification && parse(dataDetail.specification)}
					{/* {parse(dataDetail.specification)} */}
				</TabPane>
			</Tabs>
		</div>
	);
};

export default Parameters;
