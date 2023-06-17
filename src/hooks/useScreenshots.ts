import { useQuery } from "@tanstack/react-query";
import ms from "ms";
import { CACHE_KEY_SCREENSHOTS } from "../constants";
import Screenshot from "../entities/Screenshot";
import APIClient, { FetchResponse } from "../services/api-client";

const useScreenshots = (gameId: number) => {
	const screenshotService = new APIClient<Screenshot>(
		`/games/${gameId}/screenshots`
	);

	return useQuery<FetchResponse<Screenshot>, Error>({
		queryKey: [...CACHE_KEY_SCREENSHOTS, gameId],
		queryFn: () => screenshotService.getAll(),
		staleTime: ms("1 day"),
	});
};

export default useScreenshots;
