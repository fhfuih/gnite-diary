import React from 'react';
import { useHistory } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import ROUTES from '../constants/routes';
// import { BottomNavigation } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        marginTop: '38.2%',
        textAlign: 'center',

        '& > *' : {
            margin: theme.spacing(1),
            width: '25ch',
        },
    }
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
        <form className={classes.root} noValidate autoComplete="off">
            <TextField id='username-register' name='username-register' label="Your User Name"></TextField>
            <TextField id='password-register' name='password-register' label="Password" type='password'></TextField>
            <TextField id='password-repeat' name='password-repeat' label="Repeat Your Password" type='password'></TextField>
            <Button className="Submit" variant="contained" color="primary"
                onClick={handleSubmit}>Confirm</Button>
        </form>
    )
};

export default Register;
