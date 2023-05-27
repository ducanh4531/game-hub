import useData from "./useData";
import { Genre } from "./useGenres";

export interface Platform {
	id: number;
	name: string;
	slug: string;
}
export interface Game {
	id: number;
	name: string;
	background_image: string;
	parent_platforms: { platform: Platform }[];
	metacritic: number;
}

// there are 3 args:
// endpoint, an axios request config obj (in this obj, can pass data to req body), dependencies array
const useGames = (
	selectedGenre: Genre | null,
	selectedPlatform: Platform | null
) =>
	useData<Game>(
		"/games",
		{
			params: {
				genres: selectedGenre?.id,
				parent_platforms: selectedPlatform?.id,
			},
		},
		[selectedGenre?.id, selectedPlatform?.id]
	);

export default useGames;
