import {
	Card,
	CardBody,
	Image,
	Skeleton,
	SkeletonText,
} from "@chakra-ui/react";

const GameCardSkeleton = () => {
	return (
		<Card borderRadius={30} overflow="hidden" width="250px">
			<CardBody>
				<Skeleton borderRadius="lg" height="140px" marginBottom={10} />
				<SkeletonText />
			</CardBody>
		</Card>
	);
};

export default GameCardSkeleton;
