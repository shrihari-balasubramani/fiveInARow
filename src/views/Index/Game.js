import React, { useState, useReducer } from 'react';
import styled from '@xstyled/styled-components';
import Board from '../../Components/Board';

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

const Game = () => {
	const initGameMatrix = Array.from({ length: 15 }, () =>
		Array.from({ length: 15 }, () => null)
	);
	const gameInfo = {
		gameMatrix: initGameMatrix,
		currentPlayer: 1
	};
	const [turn, setTurn] = useReducer(reducer, gameInfo);

	return <Board {...turn} setTurn={setTurn} />;
};

export default Game;
