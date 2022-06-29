import React from "react";

const SearchBox = ({ searchField, searchChange}) => {
	return (
		<div className="pa1">
			<input 
				className="f4 br3 pa3 ba b--black bg-lightest-gray" 
				type="search" 
				placeholder="Search Cats..."
				onChange={searchChange}
			/>
		</div>
	);
}

export default SearchBox;