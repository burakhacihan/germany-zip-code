import { Helmet } from "react-helmet-async";
import { Row, Col } from "antd";

export default function Information() {
	return (
		<>
			<Helmet>
				<title>Germany Zip Code - Information</title>
				<meta
					name="description"
					content="This project aims to make it easier to find Germany's zip codes."
				/>
			</Helmet>
			<Row
				justify="center"
				style={{ minHeight: "40vh", marginTop: "1em", lineHeight: "1.5em" }}
			>
				<Col xs={22} sm={20} md={16} lg={12} xl={12}>
					<p className="text-center">
						This project aims to make it easier to find Germany's zip codes.
						Currently, we only have Berlin, Potsdam and Wittstock/Dosse zip
						codes. The zip codes are collected from various websites. If you
						notice an incorrect zip code, please report it. You can search by
						city, district, or street. If you have a zip code, you can find the
						corresponding city, district, or street.
					</p>
				</Col>
			</Row>
		</>
	);
}
