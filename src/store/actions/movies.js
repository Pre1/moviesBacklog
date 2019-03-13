import * as actionTypes from "./actionTypes";


export const addMovie = (newMovie) => {
	return {
		type: actionTypes.ADD_MOVIE,
		payload: newMovie,
	}
}

export const toWatched = (movie) => {
	return {
		type: actionTypes.TO_WATCHED,
		payload: movie
	}
}

export const toWatchlist = (movie) => {
	return {
		type: actionTypes.TO_WATCHLIST,
		payload: movie
	}
}

export const watchListDel = (movie) => {
	return {
		type: actionTypes.WATCH_LIST_DEL,
		payload: movie
	}
}

export const watchedDel = (movie) => {
	return {
		type: actionTypes.WATCHED_DEL,
		payload: movie
	}
}


export const filterWatchls = (query) => {
	return {
		type: actionTypes.FILTER_WATCHLS,
		payload: query
	}
}

export const filterWatcheDls = (query) => {
	return {
		type: actionTypes.FILTER_WATCHEDLS,
		payload: query
	}
}