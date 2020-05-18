import React, { useState, useReducer } from 'react';
import styled from '@xstyled/styled-components';
import Board from '../../Components/Board';
import Header from '../../Components/Header';

const recordTurn = (state, action) => {
	const newGameMatrix = [...state.gameMatrix]; // it's ok to not deep copy.
	const currentPlayer = action.playedBy === 1 ? 2 : 1;
	newGameMatrix[action.row][action.column] = action.playedBy;
	return {
		gameMatrix: newGameMatrix,
		currentPlayer
	};
};

function reducer(state, action) {
	switch (action.type) {
		case 'turn_played':
			return recordTurn(state, action);
		default:
			throw new Error();
	}
}

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
`;

const Game = () => {
	const initGameMatrix = Array.from({ length: 15 }, () =>
		Array.from({ length: 15 }, () => null)
	);
	const gameInfo = {
		gameMatrix: initGameMatrix,
		currentPlayer: 1
	};
	const [turn, setTurn] = useReducer(reducer, gameInfo);

	return (
		<Wrapper>
			<Header currentPlayer={turn.currentPlayer} />
			<Wrapper>
				<Board {...turn} setTurn={setTurn} />
			</Wrapper>
		</Wrapper>
	);
};

export default Game;
