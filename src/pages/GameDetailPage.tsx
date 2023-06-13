import { Heading, Spinner, Text } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import useGame from "../hooks/useGame";

const GameDetailPage = () => {
	const { slug } = useParams();
	// add '!' => tell typescript compiler that this constant slug will never be null
	const { data: game, isLoading, error } = useGame(slug!);

	if (isLoading) return <Spinner />;

	if (error) throw error;

	return (
		<>
			<Heading>{game.name}</Heading>
			<Text>{game.description_raw}</Text>
		</>
	);
};

export default GameDetailPage;
