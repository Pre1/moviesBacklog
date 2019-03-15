import React, { Component } from "react";

export default class MovieRow extends Component {
	render() {
		return (
			<tr>
				<td>{this.props.title}</td>
				<td>
					<div className="row">
						<div className="col-3 mx-auto">
							<button
								onClick={this.props.moveAction}
								className="btn btn-secondary"
							>
								{this.props.moveName}
							</button>
						</div>

						<div className="col-3 mx-auto">
							<button
								onClick={this.props.delAction}
								className="btn btn-danger"
							>
								Delete
							</button>
						</div>
					</div>
				</td>
			</tr>
		);
	}
}
