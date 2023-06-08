// CENTRALIZE THE STATE MANAGEMENT LOGIC IN A SINGLE PLACE
// NO MORE PROPS DRILLING
import { create } from "zustand";
// import { mountStoreDevtool } from "simple-zustand-devtools";

interface GameQuery {
	genreId?: number; // undefined: the absence of a value | optional para
	platformId?: number; // null: the intentional absence of a value | optional para
	sortOrder?: string;
	searchText?: string;
}

interface GameQueryStore {
	gameQuery: GameQuery;
	setGenreId: (genreId: number) => void;
	setPlatformId: (platformId: number) => void;
	setSortOrder: (sortOrder: string) => void;
	setSearchText: (searchText: string) => void;
}

const useGameQueryStore = create<GameQueryStore>((set) => ({
	gameQuery: {},
	setGenreId: (genreId) =>
		set((store) => ({
			gameQuery: { ...store.gameQuery, genreId },
		})),
	setPlatformId: (platformId) =>
		set((store) => ({ gameQuery: { ...store.gameQuery, platformId } })),
	setSortOrder: (sortOrder) =>
		set((store) => ({ gameQuery: { ...store.gameQuery, sortOrder } })),
	setSearchText: (searchText) => set(() => ({ gameQuery: { searchText } })),
}));

// if (process.env.NODE_ENV === "development") {
// 	mountStoreDevtool("Game Query Store", useGameQueryStore);
// }

export default useGameQueryStore;
