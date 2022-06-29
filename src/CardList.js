import React from "react";
import Card from "./Card";

const CardList = ({ robots }) => {
	const cardsArray = robots.map((element, index) => {
		return (
			<Card 
				key={index} 
				id={element.id} 
				name={element.name} 
				email={element.email}
			/>
		);
	})
  	return (
		<div>
			{cardsArray}
		</div>
	);
}

export default CardList;