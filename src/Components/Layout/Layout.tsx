import Header from "../Header/Header";
import { HelmetProvider } from "react-helmet-async";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "../Pages/Home";
import Contact from "../Pages/Contact";
import Information from "../Pages/Information";
import Footer from "../Footer/Footer";
import CookiePolicy from "../Pages/CookiePolicy";

export default function Layout() {
	return (
		<>
			<HelmetProvider>
				<Router>
					<Header />
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/information" element={<Information />} />
						<Route path="/contact" element={<Contact />} />
						<Route path="/cookie-policy" element={<CookiePolicy />} />
					</Routes>
					<Footer />
				</Router>
			</HelmetProvider>
		</>
	);
}
