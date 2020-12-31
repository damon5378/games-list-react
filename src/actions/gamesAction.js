import axios from "axios";
import {
  popularGamesURL,
  upcomingGamesURL,
  newGamesURL,
  searchGameURL,
} from "../api/api";

export const loadGames = () => async (dispatch) => {
  const popularData = await axios.get(popularGamesURL());
  const newGameData = await axios.get(newGamesURL());
  const upcomingData = await axios.get(upcomingGamesURL());

  dispatch({
    type: "FETCH_GAMES",
    payload: {
      popular: popularData.data.results,
      upcoming: upcomingData.data.results,
      newGames: newGameData.data.results,
    },
  });
};

export const fetchSearch = (game_name) => async (dispatch) => {
  const searchData = await axios.get(searchGameURL(game_name));
  dispatch({
    type: "FETCH_SEARCHED",
    payload: {
      searched: searchData.data.results,
    },
  });
};
