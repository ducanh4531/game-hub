import { HStack, Icon } from "@chakra-ui/react";
import { IconType } from "react-icons";
import { MdDeviceUnknown } from "react-icons/md";
import { BsGlobe } from "react-icons/bs"; //bootstrap
import {
	FaAndroid,
	FaApple,
	FaLinux,
	FaPlaystation,
	FaWindows,
	FaXbox,
} from "react-icons/fa"; //Font-awesome lib
import { MdPhoneIphone } from "react-icons/md"; //material design
import { SiNintendo } from "react-icons/si";
import { Platform } from "../services/platformService";


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
		unknown: MdDeviceUnknown,
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
