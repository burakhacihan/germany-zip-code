import { Helmet } from "react-helmet-async";
import Table from "../Table/ListGrid";

export default function Home() {
	return (
		<>
			<Helmet>
				<title>Germany Zip Codes</title>
				<meta
					name="description"
					content="Find zip codes in Germany easily. Type a street name and copy the postal code right now."
				/>
			</Helmet>
			<Table />
		</>
	);
}
