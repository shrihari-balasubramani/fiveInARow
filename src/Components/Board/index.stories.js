import React, { useState, useReducer } from 'react';
import { storiesOf } from '@storybook/react';
import styled from 'styled-components';
import Board from './index';

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

const initGameMatrix = [...Array(15)].map(elem => new Array(15).fill(0));
const gameInfo = {
	gameMatrix: initGameMatrix,
	currentPlayer: 1
};

const Test = props => {
	const [turn, setTurn] = useReducer(reducer, gameInfo);
	return <Board {...gameInfo} setTurn={setTurn} />;
};

storiesOf('/Board', module).add('Default', () => <Test />);
