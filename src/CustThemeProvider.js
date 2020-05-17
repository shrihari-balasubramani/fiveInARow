/*
We expose the setCustTheme to window. In future , the plan is to have a button and use that to change theme
*/

import React, { useState } from 'react';

import { ThemeProvider } from 'styled-components';
import theme from './theme';

const CustThemeProvider = props => {
  const [custTheme, setCustTheme] = useState(theme);
  window.setCustTheme = setCustTheme;
  return <ThemeProvider theme={custTheme}>{props.children}</ThemeProvider>;
};

export default CustThemeProvider;
