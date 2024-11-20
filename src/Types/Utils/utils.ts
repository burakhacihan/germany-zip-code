import { ColumnsType } from "antd/es/table";
import { ZipCode, DataContextType } from "../types";
import React from "react";

export function normalizeData(contextItem: DataContextType) {
	const result: ZipCode[] = [];
	let keyIndex = 0;

	var data = contextItem.data ?? [];

	data.forEach((item) => {
		item.districts.forEach((district) => {
			district.streets.forEach((street) => {
				result.push({
					key: `${item.city}-${district.district}-${street.street}-${
						street.zipCode
					}-${keyIndex++}`,
					city: item.city,
					district: district.district,
					street: street.street,
					zipCode: street.zipCode,
				});
			});
		});
	});

	return result;
}

export const columns = (
	renderFunction: (record: ZipCode) => React.ReactNode
): ColumnsType<ZipCode> => [
	{
		title: "City/District/Street",
		dataIndex: "place",
		key: "place",
		render: (_, record) =>
			`${record.city} - ${record.district} - ${record.street}`,
	},
	{
		title: "City",
		dataIndex: "city",
		key: "city",
		responsive: ["sm"],
	},
	{
		title: "District",
		dataIndex: "district",
		key: "district",
		responsive: ["sm"],
	},
	{
		title: "Street Name",
		dataIndex: "street",
		key: "street",
		responsive: ["sm"],
	},
	{
		title: "Zip Code",
		dataIndex: "zipCode",
		key: "zipcode",
		render: (_, record) => renderFunction(record),
	},
];
