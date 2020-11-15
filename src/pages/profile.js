import { IconButton, Avatar, Paper, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles'
import { ExitToApp } from '@material-ui/icons';
import React from 'react';
import { Link } from 'react-router-dom';
import ROUTES from '../constants/routes';
import avatar from '../avatar.png';

const useStyle = makeStyles((theme) => ({
    settings: {
        position: 'absolute',
        right: '1rem',
        top: '1rem',
        color: 'white',
    },
    avatar: {
        position: 'absolute',
        width: 128,
        height: 128,
        top: 128,
        left: '50%',
        transform: 'translateX(-50%)',
        zIndex: 100,
        border: '5px solid white',
        boxShadow: theme.shadows[6]
    },
    background: {
        background: 'linear-gradient(to top, #4B6A50, #839686)',
        height: '100%'
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
    statistics: {
        overflow: 'auto',
        height: 'calc(100% - 64px - 1.25rem)',
        '&::-webkit-scrollbar': {
            display: 'none'
        }
    },
    card: {
        height: 60,
        marginBottom: 12,
    }
}))

const Profile = () => {
    const classes = useStyle();
    return (
        <div className={classes.background}>
            <IconButton className={classes.settings} component={Link} to={ROUTES.login}><ExitToApp /></IconButton>
            <Avatar src={avatar} className={classes.avatar} />
            <div className={classes.profile}>
                <Typography variant="h6" gutterBottom>My statistics</Typography>
                <div className={classes.statistics}>
                    <Paper className={classes.card} variant="outlined"></Paper>
                    <Paper className={classes.card} variant="outlined"></Paper>
                    <Paper className={classes.card} variant="outlined"></Paper>
                    <Paper className={classes.card} variant="outlined"></Paper>
                    <Paper className={classes.card} variant="outlined"></Paper>
                    <Paper className={classes.card} variant="outlined"></Paper>
                    <Paper className={classes.card} variant="outlined"></Paper>
                    <Paper className={classes.card} variant="outlined"></Paper>
                    <Paper className={classes.card} variant="outlined"></Paper>
                    <Paper className={classes.card} variant="outlined"></Paper>
                </div>
            </div>
        </div>
    )
};

export default Profile;
