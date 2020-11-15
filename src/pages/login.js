import React from 'react';
import { useHistory } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import ROUTES from '../constants/routes';
// import Box from '@material-ui/core/Box';

// const alert_string = '雅蠛蝶, hentai, 死库水'

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        marginTop: '38.2%',
        textAlign: 'center',
        // color: '#939B97',
        // height: '100%',
        // display: 'flex',
        // flexDirection: 'column',
        // justifyContent: 'center',
        // alignItems: 'center',
        '& > *': {
            margin: theme.spacing(1),
            width: '25ch',
            
        },
    },
}));

export default function BasicTextFields() {
    const classes = useStyles();
    const history = useHistory();

    const handleSubmit = () => {
        history.push(ROUTES.profile);
    }

    return (
        <form className={classes.root} noValidate autoComplete="off">
            <TextField id="username-basic" label="User Name" />
            <TextField id="password-basic" label="Password" />
            <Button className="Submit" variant="contained"
                color="primary"
                onClick={handleSubmit}
            > Submit </Button>
        </form>        
    );
}




 