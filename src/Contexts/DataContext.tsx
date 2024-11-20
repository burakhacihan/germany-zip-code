import { createContext, ReactNode, useState, useEffect } from "react";
import { DataContextType, CityData } from "../Types/types";
import axios from "axios";

export const DataContext = createContext<DataContextType | undefined>(
	undefined
);

type DataContextProviderProps = {
	children: ReactNode;
};

export const DataProvider = ({ children }: DataContextProviderProps) => {
	const [data, setData] = useState<CityData[] | null>(null);

	useEffect(() => {
		const fetchData = () => {
			axios
				.get(`${process.env.PUBLIC_URL}/data.json`)
				.then((response) => {
					setData(response.data);
				})
				.catch((error) => {
					console.error("Error:", error);
				});
		};

		fetchData();
	}, []);

	return (
		<DataContext.Provider value={{ data }}>{children}</DataContext.Provider>
	);
};
