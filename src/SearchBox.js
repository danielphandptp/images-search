import React from "react";

const SearchBox = () => {
	return (
		<div className="pa2">
			<input 
				className="pa2 ba b--green bg-lightest-blue" 
				type="search" name="search cats" value=""
			/>
		</div>
	);
}

export default SearchBox;