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
	color: ${th.color('Primary.Dark')};
	margin-right: 1;
`;

export const NameInput = styled(Input)``;

export const DetailsWrapper = styled.div`
	display: flex;
	margin-bottom: 4;
`;

export const GroupWrapper = styled.div`
	display: flex;
	flex-direction: column;
	margin-bottom: 2;
`;
