import React from "react";
import CategoryProduct from "./CategoryProduct";

const MenuCategory = () => {
	const menu = [
		{
			key: 1,
			data: "Bàn Phím",
			iconClosed: "down",
			iconOpened: "up",
			subData: [
				{
					data: "bàn phím 1",
				},
				{
					data: "bàn phím 2",
				},
			],
		},
		{
			key: 2,
			data: "Chuột",
			subData: [
				{
					data: "bàn phím 1",
				},
				{
					data: "bàn phím 2",
				},
				{
					data: "bàn phím 3",
				},
			],
		},
		{
			key: 3,
			data: "Màn hình",
			subData: [
				{
					data: "bàn phím 1",
				},
				{
					data: "bàn phím 2",
				},
				{
					data: "bàn phím 3",
				},
			],
		},
		{
			key: 4,
			data: "Tai Nghe",
			subData: [
				{
					data: "bàn phím 1",
				},
				{
					data: "bàn phím 2",
				},
				{
					data: "bàn phím 3",
				},
			],
		},
		{
			key: 5,
			data: "Loa",
		},
	];
	return (
		<div>
			{menu.map((item, id) => (
				<div key={id}>
					<CategoryProduct id={id} item={item} />
				</div>
			))}
		</div>
	);
};

export default MenuCategory;
