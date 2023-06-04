import { useQuery } from "@tanstack/react-query";
import { GameQuery } from "../App";
import { CACHE_KEY_GAMES } from "../constants";
import { FetchResponse } from "../services/api-client";
import gameService, { Game } from "../services/gameService";


// there are 3 args:
// endpoint, an axios request config obj (in this obj, can pass data to req body), dependencies array
// const useGames = (gameQuery: GameQuery) =>
// 	useData<Game>(
// 		"/games",
// 		{
// 			params: {
// 				genres: gameQuery.genre?.id,
// 				parent_platforms: gameQuery.platform?.id,
// 				ordering: gameQuery.sortOrder,
// 				search: gameQuery.searchText,
// 			},
// 		},
// 		[gameQuery]
// 	);

const useGames = (gameQuery: GameQuery) => {
	return useQuery<FetchResponse<Game>, Error>({
		queryKey: CACHE_KEY_GAMES
			? [...CACHE_KEY_GAMES, gameQuery]
			: CACHE_KEY_GAMES,
		queryFn: () =>
			gameService.getAll({
				params: {
					genres: gameQuery.genre?.id,
					parent_platforms: gameQuery.platform?.id,
					ordering: gameQuery.sortOrder,
					search: gameQuery.searchText,
				},
			}),
		staleTime: 0.5 * 60 * 60 * 1_000, // 30 mins
	});
};

export default useGames;
