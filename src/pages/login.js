import React from 'react';
import { Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import ROUTES from '../constants/routes';
import { Avatar} from '@material-ui/core';
// import Box from '@material-ui/core/Box';

// const alert_string = '雅蠛蝶, hentai, 死库水'

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        paddingTop: '30.2%',
        // textAlign: 'center',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        '& > *': {
            margin: theme.spacing(1),
            width: '25ch',
            
        },
    },
    submit: {
        marginTop: '2rem',
        width: '25ch'
    },
    register: {
        width: '25ch'
    },
    large: {
        width: theme.spacing(10),
        height: theme.spacing(10),
        marginBottom: '3rem',
        alignItems: 'center',
    },
    background: {
        backgroundImage: 'url(/login.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
        height: '100%',
    },
    profile: {
        position: 'absolute',
        top: 220,
        bottom: 0,
        left: 0,
        right: 0,
        padding: 18,
        paddingTop: 64,
        background: 'white',
        clipPath: 'circle(100% at 50% 91%)',
    },
    whiteText: {
        color: 'white',
    }
}));

export default function BasicTextFields() {
    const classes = useStyles();

    return (
        <div className={classes.background} >
            
            <form className={classes.root} noValidate autoComplete="off">
                <Avatar className={classes.large} alt="head picture" src="/logo512.png" />
                <TextField floatingLabelFocusStyle={classes.whiteText} id="username-basic" label="User Name" />
                <TextField floatingLabelFocusStyle={classes.whiteText} id="password-basic" label="Password" type='password' />
                <Button className={classes.submit} variant="contained" color="primary" component={Link} to={ROUTES.profile}>
                    Log in
                </Button>
                <Button className={classes.register} color="primary" component={Link} to={ROUTES.register}>
                    Register
                </Button>
            </form>
        </div>
    );
}




 