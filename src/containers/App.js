import React, { Component } from "react";
import CardList from "../components/CardList";
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import { cat_info } from '../cats-info';
import './App.css';

class App extends Component {
	constructor() {
		super()
		this.state = {
			cat_info: [],
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
		this.setState({ cat_info: cat_info })
	}

	render() {
		const { cat_info, searchField } = this.state
		const filteredCats = cat_info.filter(cat_info => {
			return cat_info.name.toLowerCase().includes(searchField.toLowerCase());
		})
		if (cat_info.length === 0) {
			return <h1>Loading...</h1>;
		} else {
			return (
				<div className="tc">
					<h1 className="f1"> Kitten Playground </h1>
					<SearchBox searchChange={this.onSearchChange} />
					<Scroll>
						<CardList cat_info={filteredCats}/>
					</Scroll>
				</div>
			)
		}
	}
}

export default App;