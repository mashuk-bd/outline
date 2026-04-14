import { style, styleVariants } from '@vanilla-extract/css';
import { cssVars } from '../../vars.css';
export const buttonBase = style({
  padding: cssVars.buttonPadding,
  borderRadius: cssVars.radius050,
  border: 'none',
  fontWeight: 500,
  cursor: 'pointer',
});

export const buttonVariants = styleVariants({
  primary: {
    background: '#1bab5eff',
    color: '#edc2c2ff',
  },
  secondary: {
    background: '#f8f9fa',
    color: '#333',
    border: '1px solid #ccc',
  },
});