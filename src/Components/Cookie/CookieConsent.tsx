import { useEffect, useState } from "react";

export default function CookieConsent() {
	const [isVisible, setIsVisible] = useState<boolean>(false);

	useEffect(() => {
		const consent = localStorage.getItem("cookieConsent");

		if (!consent) {
			setIsVisible(true);
		}
	}, []);

	const handleAccept = () => {
		localStorage.setItem("cookieConsent", "true");
		setIsVisible(false);
	};

	if (!isVisible) return <></>;

	return (
		<div style={styles.container}>
			<p style={styles.text}>
				Bu web sitesi, size daha iyi bir deneyim sunabilmek için çerezler
				kullanır. Devam ederek çerez politikamızı kabul etmiş olursunuz.
			</p>
			<button style={styles.button} onClick={handleAccept}>
				Kabul Et
			</button>
		</div>
	);
}

const styles = {
	container: {
		position: "fixed" as const,
		bottom: "20px",
		left: "20px",
		right: "20px",
		backgroundColor: "#000", // Almanya bayrağının renkleri
		color: "#fff",
		borderRadius: "8px",
		padding: "20px",
		display: "flex",
		alignItems: "center",
		justifyContent: "space-between",
		boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
		zIndex: 1000,
	},
	text: {
		flex: 1,
		fontSize: "16px",
		marginRight: "20px",
	},
	button: {
		backgroundColor: "#ffcc00",
		color: "#000",
		border: "none",
		padding: "10px 20px",
		borderRadius: "4px",
		cursor: "pointer",
		fontWeight: "bold" as const,
	},
};
