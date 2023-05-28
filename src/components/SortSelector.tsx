import { Menu, MenuButton, Button, MenuList, MenuItem } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

interface SortSelectorProps {
	onSelectSortOrder: (order: string) => void;
	sortOrder: string;
}

const SortSelector = ({ onSelectSortOrder, sortOrder }: SortSelectorProps) => {
	const sortOrders = [
		{ value: "", label: "Relevance" },
		{ value: "name", label: "Name" },
		{ value: "-released", label: "Release date" },
		{ value: "-added", label: "Date added" },
		{ value: "-rating", label: "Average rating" },
		{ value: "-metacritic", label: "Popularity" },
	];

	const currentSortOrder = sortOrders.find(
		(order) => order.value === sortOrder
	);

	return (
		<Menu>
			<MenuButton as={Button} rightIcon={<BsChevronDown />}>
				Order by: {currentSortOrder?.label || "Relevance"}
			</MenuButton>
			<MenuList>
				{sortOrders.map((order) => (
					<MenuItem
						key={order.value}
						value={order.value}
						onClick={() => onSelectSortOrder(order.value)}
					>
						{order.label}
					</MenuItem>
				))}
			</MenuList>
		</Menu>
	);
};

export default SortSelector;
