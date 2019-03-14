import React, { Component } from "react";
import { connect } from "react-redux";

import * as actionCreators from "./store/actions/index";



class MovieAdd extends Component {
	state = {
		addedMov: ""
	};

	handleChange = event => {
		console.log(event.target.value);
		this.setState({ addedMov: event.target.value });
	};

	handleSubmit = event => {
		event.preventDefault();
		let val = this.state.addedMov;
		if (!val) return;

		this.props.addMovie(val);

		this.setState({ addedMov: "" });
	};

	render() {
		return (
			<form onSubmit={this.handleSubmit}>
				<div className="input-group mb-3">
					<input
						type="text"
						className="form-control"
						placeholder="Movie..."
						onChange={this.handleChange}
						value={this.state.addedMov}
					/>

					<div className="input-group-append">
						<button className="btn btn-secondary">+ Add</button>
					</div>
				</div>
			</form>
		);
	}
}





const mapDispatchToProps = dispatch => {
  return {
    addMovie: mov => dispatch(actionCreators.addMovie(mov))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(MovieAdd);

