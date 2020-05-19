import React, { useState } from 'react';
import { Modal, Input, Button } from '@material-ui/core';
import {
	Paper,
	Text,
	NameInput,
	DetailsWrapper,
	GroupWrapper
} from './ModalElements';

const PlayerDetail = ({ value, setValue, playerIndex }) => (
	<DetailsWrapper>
		<Text>Player {playerIndex}:</Text>
		<NameInput
			value={value}
			onChange={() => setValue(event.target.value)}
			required
		/>
	</DetailsWrapper>
);

const DetailsModal = ({ open, setPlayers }) => {
	const [player1, setPlayer1] = useState('');
	const [player2, setPlayer2] = useState('');

	const OnSubmit = () => {
		setPlayers([player1, player2]);
	};
	return (
		<Modal open={open}>
			<Paper>
				<Text>Please enter player names to begin:</Text>
				<GroupWrapper>
					<PlayerDetail value={player1} setValue={setPlayer1} playerIndex={1} />
					<PlayerDetail value={player2} setValue={setPlayer2} playerIndex={2} />
				</GroupWrapper>
				<Button
					onClick={OnSubmit}
					disabled={!(player1.length && player2.length)}
					variant='contained'
					color='primary'
				>
					Submit
				</Button>
			</Paper>
		</Modal>
	);
};

export default DetailsModal;
