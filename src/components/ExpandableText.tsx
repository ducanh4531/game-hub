import { Button, Text } from "@chakra-ui/react";
import { useState } from "react";

interface ExpandableTextProps {
	maxChars: number;
	children: string;
}

const ExpandableText = ({ maxChars, children }: ExpandableTextProps) => {
	const [expanded, setExpended] = useState(false);

	const handleClick = () => {
		setExpended(!expanded);
	};

	if (!children) return null;

	const summary = expanded ? children : `${children.slice(0, maxChars)}...`;

	return (
		<>
			{children.length <= maxChars ? (
				<Text>{children}</Text>
			) : (
				<Text>
					{summary}
					<Button
						colorScheme="yellow"
						ml={1}
						size="xs"
						fontWeight="bold"
						onClick={handleClick}
					>
						{expanded ? "Show Less" : "Read More"}
					</Button>
				</Text>
			)}
		</>
	);
};

export default ExpandableText;
