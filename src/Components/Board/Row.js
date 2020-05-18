import React from 'react';
import styled from '@xstyled/styled-components';
import { th } from '@xstyled/system';
import Tile from './Tile';

const RowWrapper = styled.tr`
	&:first-child td {
		border-top: 0;
	}
	& > td:first-child {
		border-left: 0;
	}

	&:last-child td {
		border-bottom: 0;
	}
	& > td:last-child {
		border-right: 0;
	}
`;

const Row = ({ rowData, rowIndex, ...props }) => (
	<RowWrapper>
		{rowData.map((value, colIndex) => (
			<Tile
				occupancy={value}
				colIndex={colIndex}
				rowIndex={rowIndex}
				key={`${rowIndex}-${colIndex}`}
				{...props}
			/>
		))}
	</RowWrapper>
);

export default Row;
