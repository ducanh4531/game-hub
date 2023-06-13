import APIClient from "./api-client";
import { Game } from "./gameService";

export default new APIClient<Game>("/games");
