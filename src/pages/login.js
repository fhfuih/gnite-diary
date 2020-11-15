import React from 'react';
import { useHistory } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import ROUTES from '../constants/routes';
import { Avatar } from '@material-ui/core';
// import Box from '@material-ui/core/Box';

// const alert_string = '雅蠛蝶, hentai, 死库水'

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        marginTop: '32.2%',
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
    large: {
        width: theme.spacing(10),
        height: theme.spacing(10),
        marginBottom: '1rem'
    },
}));

export default function BasicTextFields() {
    const classes = useStyles();
    const history = useHistory();

    const handleSubmit = () => {
        history.push(ROUTES.profile);
    }

    return (
        <div>
            <form className={classes.root} noValidate autoComplete="off">
                <Avatar className={classes.large} alt="head picture" src="../logo512.png"/>
                <TextField id="username-basic" label="User Name" />
                <TextField id="password-basic" label="Password" type='password' />
                <Button className={classes.submit} variant="contained"
                    color="primary"
                    onClick={handleSubmit}
                > Log in </Button>
            </form>      
        </div>  
    );
}




 