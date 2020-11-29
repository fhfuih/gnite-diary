import React, { useMemo } from 'react';
import { makeStyles } from '@material-ui/core/styles'
import { Button, createMuiTheme, ThemeProvider } from '@material-ui/core';
import { Create, Mic } from '@material-ui/icons';
import { DatePicker } from "@material-ui/pickers";
import dayjs from 'dayjs';
import Container from '../components/container';
import { Link } from 'react-router-dom';
import routes from '../constants/routes';

const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#EEE1C1'
        }
    }
})

const useStyle = makeStyles(({
    buttons: {
        display: 'flex',
        justifyContent: 'space-between',
        '& > *': {
            width: '45%',
        }
    },
    calendar: {
        marginTop: theme.spacing(4)
    }
}))

const date = dayjs();
const onChange = () => {};

const Plan = () => {
    const classes = useStyle();
    const tail = useMemo(() => (
        <div className={classes.buttons}>
            <Button variant="contained" color="primary" startIcon={<Create />} component={Link} to={routes.write}>
                Write Diary
            </Button>
            <Button variant="contained" color="primary" startIcon={<Mic />}>
                Say Diary
            </Button>
        </div>
    ), [])
    return (
        <Container title="Your Diaries" tail={tail}>
            <div className={classes.calendar}>
                <ThemeProvider theme={theme}>
                    <DatePicker
                        autoOk
                        disableFuture
                        orientation="portrait"
                        variant="static"
                        openTo="date"
                        value={date}
                        onChange={onChange}
                    />
                </ThemeProvider>
            </div>
        </Container>
    )
};

export default Plan;
