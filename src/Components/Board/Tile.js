import React from 'react';
import styled from '@xstyled/styled-components';
import { th } from '@xstyled/system';

const TileWrapper = styled.td`
	height: 80px;
	border: 2px solid ${th.color('primary.main')};
	text-align: center;
	vertical-align: middle;
	&:hover {
		background: ${th.color('primary.light')};
		cursor: ${p => (p.occupied ? 'not-allowed' : 'pointer')};
	}
`;

const PlayerMove = styled.p`
	font-weight: 900;
	font-size: 2em;
	color: ${p => th.color(p.player2 ? 'player2' : 'player1')};
`;

const Tile = ({ occupancy, setTurn, currentPlayer, rowIndex, colIndex }) => {
	let markedBy = 'O';

	if (!occupancy) {
		// check for the higher probable case first! By the time most columns are filled we would likely have a winner.
		markedBy = null;
	} else if (occupancy === 1) {
		markedBy = 'X';
	}

	const onTurnClick = () => {
		if (occupancy) {
			return;
		} else {
			const action = {
				type: 'turn_played',
				playedBy: currentPlayer,
				row: rowIndex,
				column: colIndex
			};
			setTurn(action);
		}
	};

	return (
		<TileWrapper onClick={onTurnClick} occupied={occupancy}>
			<PlayerMove player2={occupancy === 2}>{markedBy}</PlayerMove>
		</TileWrapper>
	);
};

export default Tile;
