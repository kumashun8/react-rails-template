import { createMuiTheme } from '@material-ui/core/styles';
import { jaJP } from '@material-ui/core/locale';

const palette = {
  primary: { main: '#00796B' },
  secondary: { main: '#673AB7' },
  error: { main: '#ef5350' },
  warning: { main: '#cddc39' },
  info: { main: '#004d40' },
  success: { main: '#26c6da' },
};

export default createMuiTheme(
  {
    palette,
  },
  jaJP
);
