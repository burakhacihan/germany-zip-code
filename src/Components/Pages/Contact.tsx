import { Helmet } from "react-helmet-async";
import { Row, Col, message, Tooltip } from "antd";

export default function Contact() {
	const handleClick = (text: string) => {
		navigator.clipboard
			.writeText(text)
			.then(() => message.success("Copied!"))
			.catch(() => message.error("Couldn't be copied!"));
	};

	return (
		<>
			<Helmet>
				<title>Germany Zip Code - Contact</title>
				<meta
					name="description"
					content="For your complaints, requests and suggestions for this project."
				/>
			</Helmet>
			<Row
				justify="center"
				style={{ minHeight: "40vh", marginTop: "1em", textAlign: "center" }}
			>
				<Col xs={22} sm={20} md={16} lg={12} xl={12}>
					<p className="text-center">
						For your complaints, requests and suggestions{" "}
						<Tooltip title="Copy e-mail">
							<u onClick={() => handleClick("burakmedinovski@gmail.com")}>
								burakmedinovski@gmail.com
							</u>
						</Tooltip>
					</p>
				</Col>
			</Row>
		</>
	);
}
