import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import { shallow } from "zustand/shallow";

import useGameQueryStore from "../store";

const SortSelector = () => {
	const sortOrders = [
		{ value: "", label: "Relevance" },
		{ value: "name", label: "Name" },
		{ value: "-released", label: "Release date" },
		{ value: "-added", label: "Date added" },
		{ value: "-rating", label: "Average rating" },
		{ value: "-metacritic", label: "Popularity" },
	];

	const { sortOrder, setSortOrder } = useGameQueryStore(
		(s) => ({
			sortOrder: s.gameQuery.sortOrder,
			setSortOrder: s.setSortOrder,
		}),
		shallow
	);

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
						onClick={() => setSortOrder(order.value)}
					>
						{order.label}
					</MenuItem>
				))}
			</MenuList>
		</Menu>
	);
};

export default SortSelector;
