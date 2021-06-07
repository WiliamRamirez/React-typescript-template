import React from 'react';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core';
import Dashboard from '../../components/dashboard/Dashboard';

function App() {
    const themeMui = createMuiTheme({
        palette: {
            primary: {
                light: '#8e8e8e',
                main: '#616161',
                dark: '#373737',
                contrastText: '#ffffff',
            },
        },
    });
    return (
        <MuiThemeProvider theme={themeMui}>
            <Dashboard />
        </MuiThemeProvider>
    );
}

export default App;
