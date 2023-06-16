import { useQuery } from "@tanstack/react-query";
import ms from "ms";
import { CACHE_KEY_TRAILERS } from "../constants";
import { Trailer } from "../entities/Trailer";
import APIClient from "../services/api-client";

const useTrailers = (gameId: number) => {
	const trailerService = new APIClient<Trailer>(`/games/${gameId}/movies`);

	return useQuery({
		queryKey: [...CACHE_KEY_TRAILERS, gameId],
		queryFn: () => trailerService.getAll(),
		staleTime: ms("1 day"),
	});
};

export default useTrailers;
