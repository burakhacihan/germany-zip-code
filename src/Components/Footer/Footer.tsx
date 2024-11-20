import { Row, Col } from "antd";
import { GithubOutlined } from "@ant-design/icons";
import CookieConsent from "../Cookie/CookieConsent";
import "../../assets/footer/footer.scss";
import { Link } from "react-router-dom";

export default function Footer() {
	return (
		<>
			<Row
				className="footer"
				justify="center"
				style={{
					marginTop: "1em",
					lineHeight: "1.5em",
					textAlign: "center",
				}}
			>
				<Col xs={22} sm={20} md={16} lg={12} xl={12}>
					<Link to="/cookie-policy">Cookie Policy</Link>
					{" - "}
					<a
						title="GitHub Repository"
						target="_blank"
						href="https://github.com/burakhacihan/germany-zip-code"
						rel="noreferrer"
					>
						<GithubOutlined /> Visit GitHub
					</a>
				</Col>
			</Row>
			<CookieConsent />
		</>
	);
}
