import React, { useState } from 'react';
import styled from '@xstyled/styled-components';
import { th } from '@xstyled/system';
import { Input } from '@material-ui/core';

export const Paper = styled.div`
	background: ${th.color('secondary.background')};
	width: 30%;
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	padding: 4;
`;

export const Text = styled.p`
	font-size: 1em;
	color: ${th.color('primary.main')};
	margin-right: 1;
`;

export const NameInput = styled(p => (
	<Input classes={{ root: 'root', underline: 'underline' }} {...p} />
))`
	&.root {
		color: ${th.color('primary.main')};
	}
	&.underline:before {
		border-bottom-color: ${th.color('primary.main')};
	}
	&&.underline:hover {
		&:before {
			border-bottom-color: ${th.color('primary.main')};
		}
	}
`;

export const DetailsWrapper = styled.div`
	display: flex;
	margin-bottom: 4;
`;

export const GroupWrapper = styled.div`
	display: flex;
	flex-direction: column;
	margin-bottom: 2;
`;
