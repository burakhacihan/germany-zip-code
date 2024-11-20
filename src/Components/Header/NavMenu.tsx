import { Menu } from "antd";
import { items } from "./Menu-Items";
import { useNavigate } from "react-router-dom";

export default function NavMenu() {
	const navigate = useNavigate();

	const menuData = items.map((item) => ({
		key: item.key,
		label: item.label,
		onClick: () => navigate(item.path), // Menü öğesine tıklandığında yönlendirme yapılacak
	}));

	return <Menu mode="horizontal" items={menuData} />;
}
