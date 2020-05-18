import React from 'react';
import styled from '@xstyled/styled-components';
import { th } from '@xstyled/system';
import Row from './Row';

const BoardWrapper = styled.table`
	border-collapse: collapse;
	width: 100%;
	max-width: 1050px;
	table-layout: fixed;
`;

const Board = ({ gameMatrix, ...props }) => {
	return (
		<BoardWrapper>
			<tbody>
				{gameMatrix.map((value, rowIndex) => (
					<Row key={rowIndex} rowIndex={rowIndex} rowData={value} {...props} />
				))}
			</tbody>
		</BoardWrapper>
	);
};

export default Board;

// should take in a number and make number of rows of divs
