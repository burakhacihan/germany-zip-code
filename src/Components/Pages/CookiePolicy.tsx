import { Helmet } from "react-helmet-async";
import { Row, Col } from "antd";

export default function CookiePolicy() {
	return (
		<>
			<Helmet>
				<title>Germany Zip Code - Cookie Policy</title>
				<meta
					name="description"
					content="Germany zip code our cookie policy."
				/>
			</Helmet>
			<Row
				justify="center"
				style={{ minHeight: "40vh", marginTop: "1em", lineHeight: "1.5em" }}
			>
				<Col xs={22} sm={20} md={16} lg={12} xl={12}>
					<h2>Cookie Policy</h2>
					<p>
						This website uses only Google Analytics cookies to improve your user
						experience and analyze the performance of our site.
					</p>

					<h2>What Cookies Do We Use?</h2>
					<p>Google Analytics uses cookies for the following purposes:</p>
					<ul>
						<li>To help us understand how our website is being used.</li>
						<li>
							To measure the number of visitors and the time spent on the site.
						</li>
						<li>To collect anonymous data to improve website performance.</li>
					</ul>
					<p>
						These cookies do not collect any personal information (such as name,
						email, etc.) and are completely anonymous.
					</p>

					<h2>More Information About Google Analytics</h2>
					<p>
						Google Analytics processes data collected from visitors anonymously.
						Additionally, we have enabled the IP anonymization feature, so only
						a portion of your IP address is processed.
					</p>
					<p>
						For more information about the cookies used by Google Analytics, you
						can visit{" "}
						<a
							rel="noreferrer"
							href="https://policies.google.com/technologies/cookies"
							target="_blank"
						>
							Google’s Cookie Policy
						</a>
						.
					</p>

					<h2>How Can You Manage Your Cookie Preferences?</h2>
					<p>
						By using our website, you accept the use of Google Analytics
						cookies. However, if you do not wish to use cookies, you can disable
						them through your browser settings. Alternatively, you can use the{" "}
						<a
							href="https://tools.google.com/dlpage/gaoptout/"
							target="_blank"
							rel="noreferrer"
						>
							Google Analytics Opt-Out Tool
						</a>{" "}
						to disable Google Analytics tracking.
					</p>
				</Col>
			</Row>
		</>
	);
}
