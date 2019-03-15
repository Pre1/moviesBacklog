import React, { Component } from "react";
import { connect } from "react-redux";

import * as actionCreators from "./store/actions/index";
import SearchBar from "./SearchBar";
import MovieRow from "./MovieRow";

export default class MovieList extends Component {
	render() {
		let ctrWatchls = this.props.list.length;

		let rows = this.props.list.map((mov, idx) => {
			return(<MovieRow
				key={`${mov}${idx}`}
				title={mov}
				moveAction={() => this.props.moveAction(mov)}
				moveName={this.props.watched ? "Unwatched" : "Watched"}
				delAction={() => this.props.delAction(mov)}
			/>)
		});

		return (
			<div>
				<h1 className="">
					{this.props.header}&nbsp;
					<span className="ctr p-1">{ctrWatchls}</span>
				</h1>

				<SearchBar filtered={this.props.filterAction} />
				<table className="table">
					<thead>
						<tr>
							<th scope="col">Title</th>
							<th scope="col">Actions</th>
						</tr>
					</thead>
					<tbody>{rows}</tbody>
				</table>
			</div>
		);
	}
}