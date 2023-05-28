import { IconType } from "react-icons";
import { HStack, Icon } from "@chakra-ui/react";
import {
	FaWindows,
	FaPlaystation,
	FaXbox,
	FaApple,
	FaLinux,
	FaAndroid,
} from "react-icons/fa"; //Font-awesome lib
import { MdPhoneIphone } from "react-icons/md"; //material design
import { SiNintendo } from "react-icons/si";
import { BsGlobe } from "react-icons/bs"; //bootstrap

import { Platform } from "../hooks/useGames";

interface PlatformIconListProps {
	platforms: Platform[];
}

const PlatformIconList = ({ platforms }: PlatformIconListProps) => {
	const iconMap: { [key: string]: IconType } = {
		pc: FaWindows,
		linux: FaLinux,
		mac: FaApple,
		nintendo: SiNintendo,
		playstation: FaPlaystation,
		xbox: FaXbox,
		ios: MdPhoneIphone,
		android: FaAndroid,
		web: BsGlobe,
	};

	return (
		<HStack marginY={2}>
			{" "}
			// can set the value as numeric or string: '??px':
			{/* numeric means this value  will be a multiple of theme.space => default space: 4px*/}
			{platforms.map((platform) => (
				<Icon
					key={platform.id}
					as={iconMap[platform.slug]}
					color="gray.500"
				/>
			))}
		</HStack>
	);
};

export default PlatformIconList;
