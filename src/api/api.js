const baseURL = "https://api.rawg.io/api/";

const getCurrentMonth = () => {
  const month = new Date().getMonth() + 1;
  if (month < 10) {
    return `0${month}`;
  } else {
    return month;
  }
};

const getCurrentDay = () => {
  const day = new Date().getDate();
  if (day < 10) {
    return `0${day}`;
  } else {
    return day;
  }
};

const currentYear = new Date().getFullYear();
const currentMonth = getCurrentMonth();
const currentDay = getCurrentDay();
const currentDate = `${currentYear}-${currentMonth}-${currentDay}`;
const lastYear = `${currentYear - 1}-${currentMonth}-${currentDay}`;
const nextYear = `${currentYear + 1}-${currentMonth}-${currentDay}`;

const popularGames = `games?dates=${lastYear},${currentDate}&ordering=-rating&page_size=12`;
const upcomingGames = `games?dates=${currentDate},${nextYear}&ordering=-added&page_size=12`;
const newGames = `games?dates=${lastYear},${currentDate}&ordering=-released&page_size=12`;

export const popularGamesURL = () => `${baseURL}${popularGames}`;

export const upcomingGamesURL = () => `${baseURL}${upcomingGames}`;
export const newGamesURL = () => `${baseURL}${newGames}`;

export const gameDetailsURL = (game_id) => `${baseURL}games/${game_id}`;

export const gameScreenshotURL = (game_id) =>
  `${baseURL}games/${game_id}/screenshots`;

export const searchGameURL = (game_name) =>
  `${baseURL}games?search=${game_name}&page_size=9`;
