import { useInfiniteQuery } from "@tanstack/react-query";
import ms from "ms";
import { CACHE_KEY_GAMES } from "../constants";
import { Game } from "../entities/Game";
import { FetchResponse } from "../services/api-client";
import gameService from "../services/gameService";
import useGameQueryStore from "../store";

const useGames = () => {
	// anytime, any value in gameQuery object changes
	// this useGames hook will re-execute, refetch the games from backend
	// and rerender GameGrid component
	const gameQuery = useGameQueryStore((s) => s.gameQuery);

	return useInfiniteQuery<FetchResponse<Game>, Error>({
		queryKey: CACHE_KEY_GAMES
			? [...CACHE_KEY_GAMES, gameQuery]
			: CACHE_KEY_GAMES,
		queryFn: ({ pageParam }) =>
			gameService.getAll({
				params: {
					page: pageParam,
					genres: gameQuery.genreId,
					parent_platforms: gameQuery.platformId,
					ordering: gameQuery.sortOrder,
					search: gameQuery.searchText,
				},
			}),
		staleTime: ms("1 day"), // 24 * 60 * 60 * 1_000, // 24 hours
		getNextPageParam: (lastPage, allPages) =>
			lastPage.next ? allPages.length + 1 : undefined,
	});
};

export default useGames;
