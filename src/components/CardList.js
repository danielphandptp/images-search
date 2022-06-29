import React from "react";
import Card from "./Card";

const CardList = ({ cat_info }) => {
	const cardsArray = cat_info.map((element, index) => {
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