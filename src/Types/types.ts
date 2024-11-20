export interface ZipCode {
	key: string;
	city: string;
	district: string;
	street: string;
	zipCode: string;
}

export interface Street {
	street: string;
	zipCode: string;
}

export interface District {
	district: string;
	streets: Street[];
}

export interface CityData {
	city: string;
	districts: District[];
}

export interface DataContextType {
	data: CityData[] | null;
}
