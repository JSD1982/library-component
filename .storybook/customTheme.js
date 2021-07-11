import { create } from '@storybook/theming/create';

const cdnBasepath =
  process.env.NODE_ENV === 'development'
    ? ''
    : '';

export default create({
  base: '#333',
  brandTitle: 'Brick',
  brandImage:
    'https://static.iebschool.com/test-ana-19/www3/image/logo-iebs-10-tagline.png',

  colorPrimary: '#4b096b',
  colorSecondary: '#4b096b',

  // Typography
  fontBase: '"Open Sans", sans-serif',
  fontCode: 'monospace',

  // Text colors
  textColor: '#333',

 
});
