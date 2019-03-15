import React, { Component } from "react";
import logo from "./logo-fancy.svg";
import MovieAdd from "./MovieAdd";
import MovieList from "./MovieList";
import SearchBar from "./SearchBar";
import { connect } from "react-redux";

import * as actionCreators from "./store/actions/index";

class App extends Component {
  
  render() {
    return (
      <div className="App">
        <header className="container">
          <div className="text-center">
            <img src={logo} className="App-logo " alt="logo" />
          </div>
          <h1 className="text-center">Movie Wish List project</h1>
          <hr />
          <div className="content">

            <MovieAdd />

            <div className="row">
              <div className="my-3 col-6">
                
                <MovieList
                  list={this.props.watchlistFiltered}
                  moveAction={this.props.toWatched}
                  
                  delAction={this.props.watchListDel}
                  filterAction={this.props.filterWatchls}
                  header="Wachlist"
                />

              </div>

              <div className="my-3 col-6">
                
                <MovieList
                  list={this.props.watchedFiltered}
                  moveAction={this.props.toWatchlist}
                  watched
                  delAction={this.props.watchedDel}
                  filterAction={this.props.filterWatcheDls}
                  header="Watched"
                />

              </div>
            </div>
          </div>
        </header>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    movie: state.movie,

    watchlist: state.watchlist,
    watchlistFiltered: state.watchlistFiltered,

    watched: state.watched,
    watchedFiltered: state.watchedFiltered
  };
};

const mapDispatchToProps = dispatch => {
  return {
    toWatched: mov => dispatch(actionCreators.toWatched(mov)),
    watchListDel: mov => dispatch(actionCreators.watchListDel(mov)),

    toWatchlist: mov => dispatch(actionCreators.toWatchlist(mov)),
    watchedDel: mov => dispatch(actionCreators.watchedDel(mov)),

    filterWatchls: query => dispatch(actionCreators.filterWatchls(query)),
    filterWatcheDls: query => dispatch(actionCreators.filterWatcheDls(query))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);