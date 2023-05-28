import { Image, ImageProps } from "@chakra-ui/react";

import bullsEye from "../assets/bulls-eye.webp";
import meh from "../assets/meh.webp";
import thumbsUp from "../assets/thumbs-up.webp";

interface EmojiProps {
	rating: number;
}

const Emoji = ({ rating }: EmojiProps) => {
	const emojiMap: { [key: number]: ImageProps } = {
		3: { alt: "meh", src: meh, boxSize: "20px" },
		4: { alt: "recommended", src: thumbsUp, boxSize: "20px" },
		5: { alt: "exceptional", src: bullsEye, boxSize: "25px" },
	};

	if (rating < 3) return null;

	return <Image mt={2} {...emojiMap[rating]} />;
};

export default Emoji;
