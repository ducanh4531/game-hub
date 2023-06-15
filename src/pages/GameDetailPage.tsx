/* eslint-disable no-mixed-spaces-and-tabs */
import { Heading, Spinner } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import ExpandableText from "../components/ExpandableText";
import GameAttributes from "../components/GameAttributes";
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
			<ExpandableText maxChars={300} children={game.description_raw} />
			<GameAttributes game={game} />
		</>
	);
};

export default GameDetailPage;
