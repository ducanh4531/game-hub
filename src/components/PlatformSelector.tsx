import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

import usePlatform from "../hooks/usePlatform";
import usePlatforms from "../hooks/usePlatforms";

interface PlatformSelectorProps {
	onSelectPlatform: (platformId: number) => void;
	selectedPlatformId: number | undefined;
}

const PlatformSelector = ({
	onSelectPlatform,
	selectedPlatformId,
}: PlatformSelectorProps) => {
	const { data, error } = usePlatforms();
	const selectedPlatform = usePlatform(selectedPlatformId);

	if (error) return null;

	return (
		<Menu>
			<MenuButton as={Button} rightIcon={<BsChevronDown />}>
				{selectedPlatform?.name || "Platforms"}
			</MenuButton>
			<MenuList>
				{data.results.map((platform) => (
					<MenuItem
						onClick={() => onSelectPlatform(platform.id)}
						key={platform.id}
					>
						{platform.name}
					</MenuItem>
				))}
			</MenuList>
		</Menu>
	);
};

export default PlatformSelector;
