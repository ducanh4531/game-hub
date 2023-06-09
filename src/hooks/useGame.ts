/* eslint-disable @typescript-eslint/no-inferrable-types */
import { useQuery } from "@tanstack/react-query";
import ms from "ms";
import { CACHE_KEY_GAMES } from "../constants";
import Game from "../entities/Game";
import gameDetailService from "../services/gameDetailService";

const useGame = (slug: string) => {
	return useQuery<Game, Error, Game>({
		queryKey: [...CACHE_KEY_GAMES, slug],
		queryFn: () => gameDetailService.get(slug),
		staleTime: ms("1 day"),
	});
};

export default useGame;
