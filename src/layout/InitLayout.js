import React from 'react';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Index from '../views/Index';
import GlobalStyles from '../globalStyle';
import CustThemeProvider from '../CustThemeProvider';

// display error or the details
const InitLayout = () => (
	<CustThemeProvider>
		<GlobalStyles />
		<Router>
			<Switch>
				<Route path='/' component={Index} />
			</Switch>
		</Router>
	</CustThemeProvider>
);

export default InitLayout;
