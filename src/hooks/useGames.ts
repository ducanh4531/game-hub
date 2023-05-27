import useData from "./useData";
import { Genre } from "./useGenres";

export interface Platform {
	id: number;
	slug: string;
	name: string;
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
const useGames = (selectedGenre: Genre | null) =>
	useData<Game>("/games", { params: { genres: selectedGenre?.id } }, [
		selectedGenre?.id,
	]);

export default useGames;
