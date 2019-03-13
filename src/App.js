import React, { Component } from "react";
import logo from "./logo-fancy.svg";
import "./App.css";

import SearchBar from "./SearchBar"

import { connect } from 'react-redux'

import * as actionCreators from "./store/actions/index"

class App extends Component {
  state = {
    addedMov: "",
  };

  handleChange = event => {
    console.log(event.target.value)
    this.setState({ addedMov: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    let val = this.state.addedMov;
    if (!val) return

    this.props.addMovie(val)
  };

  toWatched = moved => {
    this.props.toWatched(moved)
  };

  toWatchList = moved => {
    this.props.toWatchlist(moved)
  };

  watchListDel = delMov => {

    this.props.watchListDel(delMov)
  };

  watchedDel = delMov => {
    this.props.watchedDel(delMov)
  };


  filterWatchls = query => {

    query = query.toLowerCase();
    let filteredMovies = this.state.watchlist.filter(mov => {
      return mov
        .toLowerCase()
        .includes(query);
    });
    this.setState({
      watchlistFiltered: filteredMovies,
    });
  }

  filterWatchEdls = query => {
    query = query.toLowerCase();
    let filteredMovies = this.state.watched.filter(mov => {
      return mov
        .toLowerCase()
        .includes(query);
    });
    this.setState({
      watchedFiltered: filteredMovies
    }); 
  }

  render() {


    let ctrWatchls = this.props.watchlistFiltered.length
    let ctrWatchedls = this.props.watchedFiltered.length

    let watchlistRows = this.props.watchlistFiltered.map(mov => {
      return (
        <tr>
          <td>{mov}</td>
          <td>
          <div className="row">
              <div className="col-6">
                <button
                  onClick={() => this.toWatched(mov)}
                  className="mx-1 btn btn-secondary">
                  Watched
                </button>
              </div>

              <div className="col-6">
              <button
                onClick={() => this.watchListDel(mov)}
                className="btn btn-danger">
                Delete
              </button>
            </div>
          </div>

          </td>
        </tr>
      );
    });

    let watchedRows = this.props.watchedFiltered.map(mov => {
      return (
        <tr>
          <td>{mov}</td>
          <td>
          <div className="row">
            <div className="col-6">
            <button
              onClick={() => this.toWatchList(mov)}
              className="btn btn-secondary"
            >
              Unwatched
            </button>
            </div>

             <div className="col-6">
            <button
              onClick={() => this.watchedDel(mov)}
              className="btn btn-danger"
            >
              Delete
            </button>
            </div>
          </div>
          </td>
        </tr>
      );
    });

    return (
      <div className="App">
        <header className="App-header">
          
          <img src={logo} className="App-logo" alt="logo" />

          <h1>Movie Wish List project</h1>
          <hr />
          <div className="content">
            {
              // ADD a Movie
            }
          <form onSubmit={this.handleSubmit}>
              <div className="input-group mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Movie..."
                  onChange={this.handleChange}
                  value={this.state.query}
                />

                <div className="input-group-append">
                  <button className="btn btn-secondary">
                    + Add
                  </button>
                 </div>
              </div>
            </form>

            {
              // ==================
            }

            <div className="row">


            <div className="my-3 col-6">
            {
              // Watch List Table
            }

            <h1 className="">Wachlist <span className="ctr p-1">{ctrWatchls}</span></h1>

            <SearchBar filtered={this.filterWatchls}/>
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">Title</th>
                  <th scope="col">Actions</th>
                </tr>
              </thead>
              <tbody>{watchlistRows}</tbody>
            </table>

            </div>



            <div className="my-3 col-6">
            {
              // Watched Table
            }

            <h1>Watched <span className="ctr p-1">{ctrWatchedls} </span></h1>
              
            <SearchBar filtered={this.filterWatchEdls}/>
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">Title</th>
                  <th scope="col">Actions</th>
                </tr>
              </thead>
              <tbody>{watchedRows}</tbody>
            </table>
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
    watchedFiltered: state.watchedFiltered,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addMovie: mov => dispatch(actionCreators.addMovie(mov)),
    
    toWatched: mov => dispatch(actionCreators.toWatched(mov)),
    toWatchlist: mov => dispatch(actionCreators.toWatchlist(mov)),
    
    watchListDel: mov => dispatch(actionCreators.watchListDel(mov)),
    watchedDel: mov => dispatch(actionCreators.watchedDel(mov)),


  }
}

export default connect(mapStateToProps,mapDispatchToProps)(App);