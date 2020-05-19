import React from 'react';
import styled from '@xstyled/styled-components';
import { th } from '@xstyled/system';
import { Modal, Input, Button } from '@material-ui/core';
import { Paper, Text } from './ModalElements';

const WinnerModal = ({ playerName = '', winnerBoard, players, resetBoard }) => {
	return (
		<Modal open={!!playerName.length || false}>
			<Paper>
				<Text>{playerName} won the last round.</Text>
				<Text>
					<b>Total wins so far :</b>
				</Text>
				<Text>
					{players[0]} : {winnerBoard[0]}
				</Text>
				<Text>
					{players[1]} : {winnerBoard[1]}
				</Text>
				<Button onClick={resetBoard} variant='contained' color='primary'>
					Start next round
				</Button>
			</Paper>
		</Modal>
	);
};

export default WinnerModal;
