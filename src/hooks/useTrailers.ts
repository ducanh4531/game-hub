import { useQuery } from "@tanstack/react-query";
import ms from "ms";
import { CACHE_KEY_TRAILERS } from "../constants";
import { Trailer } from "../entities/Trailer";
import APIClient, { FetchResponse } from "../services/api-client";

const useTrailers = (gameId: number) => {
	const trailerService = new APIClient<Trailer>(`/games/${gameId}/movies`);

	return useQuery<FetchResponse<Trailer>, Error>({
		queryKey: [...CACHE_KEY_TRAILERS, gameId],
		queryFn: () => trailerService.getAll(),
		staleTime: ms("1 day"),
	});
};

export default useTrailers;
