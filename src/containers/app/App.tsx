import React from 'react';
import { MuiThemeProvider } from '@material-ui/core';
import Dashboard from '../../components/dashboard/dashboard';

import themeMui from '../../themes/theme-mui';
import BodyCustomized from '../../components/body-customized/body-customized';

function App() {
    return (
        <MuiThemeProvider theme={themeMui}>
            <Dashboard>
                <BodyCustomized />
            </Dashboard>
        </MuiThemeProvider>
    );
}

export default App;
