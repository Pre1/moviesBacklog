import * as actionTypes from "../actions/actionTypes";

const initialState = {
	movie: "",
	watchlist: ["Avengers", "Batman", "Hitman"],
	watchlistFiltered: ["Avengers", "Batman", "Hitman"],

	watched: ["The Matrix", "Lord of the Ring"],
	watchedFiltered: ["The Matrix", "Lord of the Ring"]
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case actionTypes.ADD_MOVIE:
			let ls = [...state.watchlist, action.payload];
			return {
				...state,

				watchlist: ls,
				watchlistFiltered: ls,
				movie: ""
			};

		case actionTypes.TO_WATCHED:
			let moved = action.payload;
			let newWatchls = state.watchlist.filter(mov => {
				return moved !== mov;
			});
			let watchedls = state.watched.concat(moved);

			return {
				watchlist: newWatchls,
				watchlistFiltered: newWatchls,

				watched: watchedls,
				watchedFiltered: watchedls
			};

		case actionTypes.TO_WATCHLIST:
			let moved = action.payload;
			let newWatchls = state.watched.filter(mov => {
				return moved !== mov;
			});
			let watchedls = state.watchlist.concat(moved);

			return {
				watchlist: newWatchls,
				watchlistFiltered: newWatchls,

				watched: watchedls,
				watchedFiltered: watchedls
			};

		default:
			return state;
	}
};

export default reducer;