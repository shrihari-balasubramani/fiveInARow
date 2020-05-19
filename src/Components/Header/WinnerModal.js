import React from 'react';
import styled from '@xstyled/styled-components';
import { th } from '@xstyled/system';
import { Modal, Input, Button } from '@material-ui/core';
import { Paper, Text } from './ModalElements';

const WinnerModal = ({ playerName = '' }) => {
	return (
		<Modal open={!!playerName.length || false}>
			<Paper>
				<Text>{playerName} is the winner</Text>
			</Paper>
		</Modal>
	);
};

export default WinnerModal;
