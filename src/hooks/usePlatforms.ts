import { useQuery } from "@tanstack/react-query";
import ms from "ms";
import { CACHE_KEY_PLATFORMS } from "../constants";
import platforms from "../data/platforms";
import { Platform } from "../entities/Platform";
import { FetchResponse } from "../services/api-client";
import platformService from "../services/platformService";

const usePlatforms = () => {
	return useQuery<FetchResponse<Platform>, Error>({
		queryKey: CACHE_KEY_PLATFORMS,
		queryFn: platformService.getAll,
		staleTime: ms("1 day"), // 24 * 60 * 60 * 1000, // after 24 hours, cache will become stale and it fetches new data from backend
		initialData: platforms, // have re-formatted data structure in data/platforms and data/genres files
		// initialData: {
		// 	count: platforms.length,
		// 	results: platforms,
		// 	next: null,
		// },
	});
};

export default usePlatforms;
