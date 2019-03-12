import React, { Component } from "react";
import logo from "./logo-fancy.svg";
import "./App.css";

import SearchBar from "./SearchBar"


class App extends Component {
  state = {
    movie: "",
    watchlist: ["Avengers", "Batman", "Hitman",],
    watchlistFiltered: ["Avengers", "Batman", "Hitman",],

    watched: ["The Matrix", "Lord of the Ring",],
    watchedFiltered: ["The Matrix", "Lord of the Ring",],
  };

  handleChange = event => {
    this.setState({ movie: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    let val = this.state.movie;
    let ls = this.state.watchlist.concat(val);
    
    this.setState({ 
      watchlist: ls,
      watchlistFiltered: ls,
      movie: "",
    });
  };

  toWatched = moved => {
    let newWatchls = this.state.watchlist.filter(mov => {
      return moved !== mov;
    });
    let watchedls = this.state.watched.concat(moved);

    // let filtered = this.state.watchlistFiltered
    // if (this.state.watchlist.length !== this.state.watchlistFiltered.length) {
    //   filtered = filtered.filter(mov => mov !== moved)
    // }

    this.setState({
      watchlist: newWatchls,
      watchlistFiltered: filtered,

      watched: watchedls,
      watchedFiltered: watchedls,
    });
  };

  toWatchList = moved => {
    let watchedls = this.state.watched.filter(mov => {
      return moved !== mov;
    });
    let newWatchls = this.state.watchlist.concat(moved);

    this.setState({
      watchlist: newWatchls,
      watchlistFiltered: newWatchls,

      watched: watchedls,
      watchedFiltered: watchedls,
    });
  };

  watchListDel = delMov => {
    let newWatchls = this.state.watchlist.filter(mov => {
      return delMov !== mov;
    });

    this.setState({
     watchlist: newWatchls,
     watchlistFiltered: newWatchls,
   });
  };

  watchedDel = delMov => {
    let watchedls = this.state.watched.filter(mov => {
      return delMov !== mov;
    });

    this.setState({ 
      watched: watchedls,
      watchedFiltered: watchedls,
    });
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

    let ctrWatchls = this.state.watchlistFiltered.length
    let ctrWatchedls = this.state.watchedFiltered.length

    let watchlistRows = this.state.watchlistFiltered.map(mov => {
      return (
        <tr>
          <td>{mov}</td>
          <td>
          <div className="row">
              <div className="col-6">
                <a
                  onClick={() => this.toWatched(mov)}
                  className="mx-1 btn btn-secondary">
                  Watched
                </a>
              </div>

              <div className="col-6">
              <a
                onClick={() => this.watchListDel(mov)}
                className="btn btn-danger">
                Delete
              </a>
            </div>
          </div>

          </td>
        </tr>
      );
    });

    let watchedRows = this.state.watchedFiltered.map(mov => {
      return (
        <tr>
          <td>{mov}</td>
          <td>
          <div className="row">
            <div className="col-6">
            <a
              onClick={() => this.toWatchList(mov)}
              className="btn btn-secondary"
            >
              Unwatched
            </a>
            </div>

             <div className="col-6">
            <a
              onClick={() => this.watchedDel(mov)}
              className="btn btn-danger"
            >
              Delete
            </a>
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
                  value={this.state.movie}
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

export default App;