import { useContext, useEffect, useState } from "react";
import { debounce } from "lodash";
import { DataContext } from "../../Contexts/DataContext";
import { columns, normalizeData } from "../../Types/Utils/utils";
import { DataContextType, ZipCode } from "../../Types/types";
import { Table, Row, Col, Input } from "antd";
import "../../assets/table/table.scss";
import CopyInput from "./CopyInput";
import useWindowSize from "../../Types/Utils/useWindowsSize";

export default function ListGrid() {
	const [searchText, setSearchText] = useState<string>("");
	const [filteredData, setFilteredData] = useState<ZipCode[]>([]);
	const [data, setData] = useState<ZipCode[]>([]);
	const dataFromContext = useContext(DataContext) as DataContextType;
	const { width } = useWindowSize();

	useEffect(() => {
		const initData = dataFromContext ? normalizeData(dataFromContext) : [];
		setData(initData);
		setFilteredData(initData);
	}, [dataFromContext]);

	const debouncedFilter = debounce((text: string) => {
		const result = data.filter((item) => {
			return (
				item.city.toLowerCase().includes(searchText.toLowerCase()) ||
				item.district.toLowerCase().includes(searchText.toLowerCase()) ||
				item.street.toLowerCase().includes(searchText.toLowerCase()) ||
				item.zipCode.includes(searchText)
			);
		});

		setFilteredData(result);
	}, 300);

	useEffect(() => {
		debouncedFilter(searchText);
		return () => {
			debouncedFilter.cancel();
		};
	}, [searchText, debouncedFilter]);

	let columnItems = columns((item: ZipCode) => <CopyInput record={item} />);

	columnItems = columnItems.filter((column) => {
		if (width > 768 && column.key === "place") {
			return false;
		}

		return true;
	});

	return (
		<Row justify="center">
			<Col xs={22} sm={20} md={16} lg={12} xl={12}>
				<Input
					value={searchText}
					onChange={(e) => setSearchText(e.target.value)}
					placeholder="Write a city, district, zip code or street name"
					className="search-input"
				/>
				<Table<ZipCode> columns={columnItems} dataSource={filteredData}></Table>
			</Col>
		</Row>
	);
}
