import { Row, Col } from "antd";
import "../../assets/header/header.scss";
import NavMenu from "./NavMenu";

export default function Header() {
	return (
		<>
			<Row className="header" justify="center">
				<Col xs={22} sm={20} md={16} lg={12} xl={12}>
					<h1>Germany Zip Codes</h1>
					<p>Just write a street name and get zip code.</p>
					<NavMenu />
				</Col>
			</Row>
		</>
	);
}
