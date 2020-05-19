import { createGlobalStyle } from 'styled-components';
import { th } from '@xstyled/system';

const GlobalStyles = createGlobalStyle`
  body {
    font-family: Roboto;
	font-style: normal;
	font-stretch: normal;
	line-height: normal;
	letter-spacing: normal;   
	margin: 0; 
		background: ${th.color('secondary.background')}
  }
`;
export default GlobalStyles;
