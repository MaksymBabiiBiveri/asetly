import { createTheme } from '@mui/material';

declare module '@mui/material/Button' {
  interface ButtonPropsVariantOverrides {
    secondary: true;
  }
}

const theme = createTheme({
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          transition: 'all 0.5s ease',
          width: 151,
          height: 40,
          fontSize: 16,
          boxShadow: 'none',
        },
        containedPrimary: {
          background: '#032f5c',
          color: '#fff',
          ':focus': { background: '#001c37' },
          ':hover': { background: '#00458a' },
          ':active': { background: '#97d5ff' },
          ':disabled': { background: '#d2d2d2' },
        },
        containedSecondary: {
          background: '#e3effd',
          color: '#032f5c',
          ':focus': { background: '#bdd4ed' },
          ':hover': { background: '#4798e9' },
          ':active': { background: '#74aaea' },
          ':disabled': { background: '#d2d2d2' },
        },
        outlinedPrimary: {
          color: '#032f5c',
          border: '1px solid #032f5c',
          ':focus': { borderColor: '#4798e9', color: '#4798e9' },
          ':hover': { borderColor: '#00458a', color: '#00458a' },
          ':active': { borderColor: '#74aaea' },
          ':disabled': { borderColor: '#d2d2d2' },
        },
      },
      defaultProps: {
        disableRipple: true,
      },
    },
  },
  typography: {
    fontFamily: "'Inter', 'Roboto', sans-serif",
  },
});
export default theme;
