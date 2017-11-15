import React, { Component } from 'react';

class Counter extends Component {
	constructor(props){
		super(props);

		this.state = {
			count: 5
		};
	}

	incrementCount = () => {

	}

	render() {
		return (
			<div className="counter">
				<h1>{this.state.count}</h1>
			</div>
		);

	}
}

export default Counter;