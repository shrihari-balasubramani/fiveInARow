import React from 'react';
import styled from '@xstyled/styled-components';
import Game from './Game';

const GameWrapper = styled.div`
	display: flex;
	justify-content: center;
`;

const Index = props => (
	<GameWrapper>
		<Game />
	</GameWrapper>
);

export default Index;
