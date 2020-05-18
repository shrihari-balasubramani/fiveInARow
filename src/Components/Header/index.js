import React, { useState } from 'react';
import styled from '@xstyled/styled-components';
import { th } from '@xstyled/system';
import DetailsModal from './DetailsModal';

const HeaderWrapper = styled.div`
	width: 100%;
	height: 80px;
	background: ${p => th.color(p.isPlayer2 ? 'player2' : 'player1')};
	display: flex;
	margin-bottom: 8;
	align-items: center;
`;
const HeaderText = styled.p`
	font-size: 2em;
	margin-left: 8;
	color: ${th.color('secondary.background')};
`;

const Header = ({ currentPlayer = 0 }) => {
	const [players, setPlayers] = useState([]);

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
		</HeaderWrapper>
	);
};

export default Header;