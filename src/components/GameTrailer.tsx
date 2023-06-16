import useTrailers from "../hooks/useTrailers";

interface GameTrailerProps {
	gameId: number;
}

const GameTrailer = ({ gameId }: GameTrailerProps) => {
	const { data, isLoading, error } = useTrailers(gameId);

	if (isLoading) return null;

	if (error) throw error;

	const first = data?.results[0];

	return first ? (
		<video controls poster={first.preview} src={first.data[480]} />
	) : null;
};

export default GameTrailer;
