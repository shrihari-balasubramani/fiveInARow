import React, { useState } from 'react';
import styled from '@xstyled/styled-components';
import { th } from '@xstyled/system';
import { Modal, Input, Button } from '@material-ui/core';

const Paper = styled.div`
	background: ${th.color('secondary.background')};
	width: 30%;
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	padding: 4;
`;

const Text = styled.p`
	font-size: 1em;
	color: ${th.color('Primary.Dark')};
	margin-right: 1;
`;

const NameInput = styled(Input)``;

const DetailsWrapper = styled.div`
	display: flex;
	margin-bottom: 4;
`;

const GroupWrapper = styled.div`
	display: flex;
	flex-direction: column;
	margin-bottom: 2;
`;

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
