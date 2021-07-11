//import React, { Suspense } from 'react';
import { addDecorator, addParameters } from '@storybook/react';
//import '@storybook/addon-docs';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';

import React from 'react';
import { ThemeProvider } from "@material-ui/core/styles";
import customTheme from './customTheme';
import {  withKnobs } from '@storybook/addon-knobs';
import { theme } from "../src/assets/scss/Theming";
import '../src/assets/scss/main.scss';

addParameters({
 viewport: {
   viewports: INITIAL_VIEWPORTS,
 },
});

addParameters({
   options: {
     theme: customTheme,
   },
 });


addParameters({
  options: {
    theme: customTheme,
  },
});


addDecorator(withKnobs);

addDecorator(story => {
 const content = story();


 return (
   <>
   
     <ThemeProvider theme={theme} ><div style={{padding:"10px"}}>{content}</div></ThemeProvider>
  
   </>
 );
});

