import red from '@material-ui/core/colors/red';
import CssBaseline from '@material-ui/core/CssBaseline';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider, ServerStyleSheets } from '@material-ui/styles';
import React, { Component } from 'react';

export const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#d9291c',
    },
    secondary: {
      main: '#3b6999',
    },
  },
});

export function withMuiApp(App) {
  return class AppWithMui extends Component {
    public static async getInitialProps(appContext) {
      let initialProps = {};

      if (typeof App.getInitialProps === 'function') {
        initialProps = await App.getInitialProps(appContext);
      }

      return { ...initialProps };
    }

    public componentDidMount() {
      const jssStyles = document.querySelector('#jss-server-side');
      if (jssStyles) {
        jssStyles.parentNode.removeChild(jssStyles);
      } // Remove the server-side injected CSS.
    }

    public render() {
      return (
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <App {...this.props} />
        </ThemeProvider>
      );
    }
  };
}
