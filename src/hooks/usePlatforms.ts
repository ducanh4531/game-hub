import { useQuery } from "@tanstack/react-query";
import { CACHE_KEY_PLATFORMS } from "../constants";
import platforms from "../data/platforms";
import { FetchResponse } from "../services/api-client";
import platformService, { Platform } from "../services/platformService";

const usePlatforms = () => {
	return useQuery<FetchResponse<Platform>, Error>({
		queryKey: CACHE_KEY_PLATFORMS,
		queryFn: platformService.getAll,
		staleTime: 24 * 60 * 60 * 1000, // after 24 hours, cache will become stale and it fetches new data from backend
		initialData: platforms, // have re-formatted data structure in data/platforms and data/genres files
		// initialData: {
		// 	count: platforms.length,
		// 	results: platforms,
		// 	next: null,
		// },
	});
};

export default usePlatforms;
