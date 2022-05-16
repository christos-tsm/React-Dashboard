import React from "react";
import { CardsContainer } from "./styles";
import SingleCard from "../SingleCard";

const Cards = ({ data }) => {
	return (
		<CardsContainer>
			{data.map((card) => {
				return <SingleCard data={card} />;
			})}
		</CardsContainer>
	);
};

export default Cards;
