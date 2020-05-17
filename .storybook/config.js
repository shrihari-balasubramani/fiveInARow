import { configure, addDecorator } from '@storybook/react';
import React from 'react';
import requireContext from 'require-context.macro';
import StoryRouter from 'storybook-react-router';
import GlobalStyles from '../src/globalStyle';
import CustThemeProvider from '../src/CustThemeProvider';

const messages = {
  // add more languages here
  en: messages_en
};
const language = navigator.language.split(/[-_]/)[0] || 'en';

addDecorator(StoryRouter());

addDecorator(storyFn => (
  <CustThemeProvider>
    <React.Fragment>
      <GlobalStyles />
      {storyFn()}
    </React.Fragment>
  </CustThemeProvider>
));

const req = requireContext('../src', true, /\.stories\.js$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
}

// automatically import all files ending in *.stories.js
configure(loadStories, module);
