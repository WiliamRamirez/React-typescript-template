import React from 'react';
import { Divider, Grid, Paper, Typography } from '@material-ui/core';
import CustomizeMainForm from '../form/customize-main-form';
import Review from '../form/review';

function BodyCustomized() {
    return (
        <React.Fragment>
            {/* Chart */}
            <Grid item xs={12} md={8} lg={5}>
                <Paper
                    style={{
                        padding: '16px',
                        display: 'flex',
                        flexDirection: 'column',
                        height: 150,
                    }}
                >
                    <Typography variant='h5'>Estas en:</Typography>
                    <Divider />

                    <Typography style={{ marginTop: '10px' }} variant='body2'>
                        Nombre del Componente
                    </Typography>
                </Paper>
            </Grid>
            {/* Recent Deposits */}
            <Grid item xs={12} md={4} lg={7}>
                <Paper
                    style={{
                        padding: '16px',
                        display: 'flex',
                        flexDirection: 'column',
                        height: 150,
                    }}
                >
                    <Typography variant='h5'>Descripcion:</Typography>
                    <Divider />

                    <Typography style={{ marginTop: '10px' }} variant='body2'>
                        Que hace el componente
                    </Typography>
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
                    <CustomizeMainForm title={'Titulo del Formulario'}>
                        {/*<AddressForm />*/}
                        {/*<PaymentForm />*/}
                        <Review />
                    </CustomizeMainForm>
                </Paper>
            </Grid>
        </React.Fragment>
    );
}

export default BodyCustomized;
