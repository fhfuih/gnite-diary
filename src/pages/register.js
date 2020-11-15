import React from 'react';
import { useHistory } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import ROUTES from '../constants/routes';
import { Avatar } from '@material-ui/core';
// import { BottomNavigation } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        paddingTop: '28.2%',
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',

        '& > *' : {
            margin: theme.spacing(1),
            width: '25ch',
        },
    }, 
    large: {
        width: theme.spacing(10),
        height: theme.spacing(10),
        marginBottom: '3rem'
    },
    submit: {
        marginTop: '2rem',
        width: '25ch'
    },
    background: {
        backgroundImage: 'url(/login.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
        height: '100%',
    },
}))



const Register = () => {
    const classes = useStyles();
    const history = useHistory();
    const validationForm = () => {
        var x = document.forms[0]['password-register'];
        var y = document.forms[0]['password-repeat'];
        // if (x != y) {
        //     alert("Password entered not the same");
        //     return false;
        // }
        x == y;
        return true;
    }

    const handleSubmit = () => {
        if (validationForm()) {
            history.push(ROUTES.profile);
        }
    }

    return (
        <div className={classes.background}>
            <form className={classes.root} noValidate autoComplete="off">
                <Avatar className={classes.large} alt="head picture" src="../logo512.png" />
                <TextField id='username-register' name='username-register' label="Your User Name"></TextField>
                <TextField id='password-register' name='password-register' label="Password" type='password'></TextField>
                <TextField id='password-repeat' name='password-repeat' label="Repeat Your Password" type='password'></TextField>
                <Button className={classes.submit} variant="contained" color="primary"
                    onClick={handleSubmit}>Confirm</Button>
            </form>
        </div>
       
    )
};

export default Register;
