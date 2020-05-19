import React, { useState, useReducer, useEffect } from 'react';
import styled from '@xstyled/styled-components';
import Board from '../../Components/Board';
import Header from '../../Components/Header';
import reducer, { getState } from './reducer';
import useGetWinnerHook from '../../service/UseGetWinnerHook';

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
`;

const Game = () => {
	const initGameMatrix = Array.from({ length: 15 }, () =>
		Array.from({ length: 15 }, () => null)
	);
	const lastPlayedCell = [null, null];
	const gameInfo = getState(initGameMatrix, lastPlayedCell, 1);
	const [turn, setTurn] = useReducer(reducer, gameInfo);
	const [winnerBoard, lastWinner, resetLastWinner] = useGetWinnerHook(turn);

	const resetBoard = () => {
		const action = {
			type: 'reset'
		};
		setTurn(action);
		resetLastWinner();
	};
	return (
		<Wrapper>
			<Header
				currentPlayer={turn.currentPlayer}
				winner={lastWinner}
				winnerBoard={winnerBoard}
				resetBoard={resetBoard}
			/>
			<Wrapper>
				<Board {...turn} setTurn={setTurn} />
			</Wrapper>
		</Wrapper>
	);
};

export default Game;
