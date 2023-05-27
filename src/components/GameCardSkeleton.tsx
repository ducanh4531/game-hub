import { Card, CardBody, Skeleton, SkeletonText } from "@chakra-ui/react";

const GameCardSkeleton = () => {
	return (
		<Card>
			<CardBody>
				<Skeleton borderRadius="lg" height="140px" marginBottom={10} />
				<SkeletonText />
			</CardBody>
		</Card>
	);
};

export default GameCardSkeleton;
