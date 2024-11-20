import { Button, message, Tooltip } from "antd";
import { CopyOutlined } from "@ant-design/icons";
import { ZipCode } from "../../Types/types";

export default function CopyInput({ record }: { record: ZipCode }) {
	const handleCopy = (text: string) => {
		navigator.clipboard
			.writeText(text)
			.then(() => message.success("Copied!"))
			.catch(() => message.error("Couldn't be copied!"));
	};

	const getToolTipText = (item: ZipCode) => {
		return `Copy ${item.zipCode} for ${item.city}/${item.district}/${item.street} `;
	};

	return (
		<Tooltip title={getToolTipText(record)}>
			{record.zipCode}{" "}
			<Button
				icon={<CopyOutlined />}
				value={record.zipCode}
				onClick={() => handleCopy(record.zipCode)}
			/>
		</Tooltip>
	);
}
