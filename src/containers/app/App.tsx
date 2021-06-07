import React from 'react';
import { createMuiTheme, Grid, MuiThemeProvider, Paper } from '@material-ui/core';
import Dashboard from '../../components/dashboard/Dashboard';
import Chart from '../../components/dashboard/Chart';
import Orders from '../../components/dashboard/Orders';
import Deposits from '../../components/dashboard/Deposits';

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
            <Dashboard>
                {/* Chart */}
                <Grid item xs={12} md={8} lg={9}>
                    <Paper
                        style={{
                            padding: '16px',
                            display: 'flex',
                            flexDirection: 'column',
                            height: 240,
                        }}
                    >
                        <Chart />
                    </Paper>
                </Grid>
                {/* Recent Deposits */}
                <Grid item xs={12} md={4} lg={3}>
                    <Paper
                        style={{
                            padding: '16px',
                            display: 'flex',
                            flexDirection: 'column',
                            height: 240,
                        }}
                    >
                        <Deposits />
                    </Paper>
                </Grid>
                {/* Recent Orders */}
                <Grid item xs={12}>
                    <Paper
                        style={{
                            padding: '16px',
                            display: 'flex',
                            flexDirection: 'column',
                        }}
                    >
                        <Orders />
                    </Paper>
                </Grid>
            </Dashboard>
        </MuiThemeProvider>
    );
}

export default App;
