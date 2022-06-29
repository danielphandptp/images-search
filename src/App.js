import React, { Component } from "react";
import CardList from "./CardList";
import SearchBox from './SearchBox';
import Scroll from './Scroll';
import { robots } from './robots';
import './App.css';

class App extends Component {
	constructor() {
		super()
		this.state = {
			robots: [],
			searchField: ''
		}
	}

	onSearchChange = (event) => {
		this.setState({ searchField: event.target.value })
	}
	
	componentDidMount() {
		// fetch('https://jsonplaceholder.typicode.com/users')
		// 	.then(response => {
		// 		return response.json();
		// 	})
		// 	.then(users => {
		// 		this.setState({ robots: users})
		// 	})
		this.setState({ robots: robots })
	}

	render() {
		const filteredCats = this.state.robots.filter(robots => {
			return robots.name.toLowerCase().includes(this.state.searchField.toLowerCase());
		})
		if (this.state.robots.length === 0) {
			return <h1>Loading...</h1>;
		} else {
			return (
				<div className="tc">
					<h1 className="f1"> Kitten Playground </h1>
					<SearchBox searchField={"Search Cats"} searchChange={this.onSearchChange} />
					<Scroll>
						<CardList robots={filteredCats}/>
					</Scroll>
				</div>
			)
		}
	}
}

export default App;