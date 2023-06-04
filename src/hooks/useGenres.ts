import { useQuery } from "@tanstack/react-query";
import { CACHE_KEY_GENRES } from "../constants";
import genres from "../data/genres";
import genreService, { Genre } from "../services/genreService";
import { FetchResponse } from "./useData";

const useGenres = () => {
	return useQuery<FetchResponse<Genre>, Error>({
		queryKey: CACHE_KEY_GENRES,
		queryFn: genreService.getAll,

		// the list of genres hardly changes, so no need to fetch data from backend in 24 hours
		staleTime: 24 * 60 * 60 * 100, // 24 hours

		// can set initial data, so no need to go to backend and show users the spinner => improve performance of app
		// if set initialData: genres => get error since its type is not of type <FetchResponse<Genre>>
		// THERE ARE 2 SOLUTIONS:

		// 1/ CHANGE THE genres FORMAT IN "../data/genres.ts" TO TYPE OF <FetchResponse<Genre>> FROM BACKEND,
		// BUT IT WILL REQUIRE EXTRA WORK

		// 2/ CHANGE THE initialData value TO:
		initialData: { count: genres.length, results: genres },
	});
};

export default useGenres;
