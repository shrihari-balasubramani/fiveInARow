import React, { useState } from 'react';
import styled from '@xstyled/styled-components';
import { th } from '@xstyled/system';
import { useColorMode } from '@xstyled/styled-components';
import { Button } from '@material-ui/core';

import DetailsModal from './DetailsModal';
import WinnerModal from './WinnerModal';

const HeaderWrapper = styled.div`
	width: 100%;
	height: 80px;
	background: ${p => th.color(p.isPlayer2 ? 'player2' : 'player1')};
	display: flex;
	margin-bottom: 8;
	align-items: center;
	position: relative;
`;
const HeaderText = styled.p`
	font-size: 2em;
	margin-left: 8;
	color: ${th.color('secondary.background')};
`;

const ModeBtn = styled(p => <Button classes={{ root: 'root' }} {...p} />)`
	&.root {
		position: absolute;
		right: 0;
		top: 50%;
		transform: translateY(-50%);
		color: ${th.color('secondary.background')};
	}
`;

const Header = ({ currentPlayer = 0, winner = 0, winnerBoard, resetBoard }) => {
	const [players, setPlayers] = useState([]);
	const [colorMode, setColorMode] = useColorMode();

	return (
		<HeaderWrapper isPlayer2={currentPlayer == 2}>
			{players.length ? (
				<HeaderText>{`${players[currentPlayer - 1]}'s turn`}</HeaderText>
			) : (
				<div>
					<HeaderText>Choose thy names to begin</HeaderText>
					<DetailsModal open={!players.length} setPlayers={setPlayers} />
				</div>
			)}
			<WinnerModal
				playerName={players[winner - 1]}
				winnerBoard={winnerBoard}
				players={players}
				resetBoard={resetBoard}
			/>
			<ModeBtn
				onClick={e => {
					setColorMode(colorMode === 'default' ? 'dark' : 'default');
				}}
			>
				{colorMode === 'dark' ? 'light' : 'dark'} mode
			</ModeBtn>
		</HeaderWrapper>
	);
};

export default Header;
