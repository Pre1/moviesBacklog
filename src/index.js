import React from "react";
import ReactDOM from "react-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

import { createStore, combineReducers, compose } from "redux";
import { Provider } from "react-redux";

import reducer from "./store/reducers/reducer";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, composeEnhancers());

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById("root")
);

serviceWorker.unregister();