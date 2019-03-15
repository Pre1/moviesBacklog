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
			let ls1 = state.watchlist.filter(mov => {
				return action.payload !== mov;
			});
			let ls2 = state.watched.concat(action.payload);

			return {
				...state,

				watchlist: ls1,
				watchlistFiltered: ls1,

				watched: ls2,
				watchedFiltered: ls2
			};

		case actionTypes.TO_WATCHLIST:
			let watchedls = state.watched.filter(mov => {
				return action.payload !== mov;
			});
			let newWatchls = state.watchlist.concat(action.payload);

			return {
				...state,

				watchlist: newWatchls,
				watchlistFiltered: newWatchls,

				watched: watchedls,
				watchedFiltered: watchedls
			};

		case actionTypes.WATCH_LIST_DEL:
			let delWatchlist = state.watchlist.filter(mov => {
				return action.payload !== mov;
			});
			return {
				...state,

				watchlist: delWatchlist,
				watchlistFiltered: delWatchlist
			};

		case actionTypes.WATCHED_DEL:
			let delWatchEDlist = state.watched.filter(mov => {
				return action.payload !== mov;
			});
			return {
				...state,

				watched: delWatchEDlist,
				watchedFiltered: delWatchEDlist
			};

		case actionTypes.FILTER_WATCHLS:
			let filterWls = state.watchlist.filter(mov => {
				return mov.toLowerCase().includes(action.payload);
			});
			return {
				...state,
				watchlistFiltered: filterWls
			};

		case actionTypes.FILTER_WATCHEDLS:
			let filterWedls = state.watched.filter(mov => {
				return mov.toLowerCase().includes(action.payload);
			});
			return {
				...state,
				watchedFiltered: filterWedls
			};

		default:
			return state;
	}
};

export default reducer;
