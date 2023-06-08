import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import { shallow } from "zustand/shallow";

import usePlatform from "../hooks/usePlatform";
import usePlatforms from "../hooks/usePlatforms";
import useGameQueryStore from "../store";

const PlatformSelector = () => {
	const { data, error } = usePlatforms();
	const { platformId, setPlatformId } = useGameQueryStore(
		(s) => ({
			platformId: s.gameQuery.platformId,
			setPlatformId: s.setPlatformId,
		}),
		shallow
	);

	const selectedPlatform = usePlatform(platformId);

	if (error) return null;

	return (
		<Menu>
			<MenuButton as={Button} rightIcon={<BsChevronDown />}>
				{selectedPlatform?.name || "Platforms"}
			</MenuButton>
			<MenuList>
				{data.results.map((platform) => (
					<MenuItem
						onClick={() => setPlatformId(platform.id)}
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
