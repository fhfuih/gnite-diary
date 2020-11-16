import { IconButton, Avatar, Paper, Typography, Button } from '@material-ui/core';
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
        top: 70,
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
        top: 140,
        bottom: 0,
        left: 0,
        right: 0,
        padding: 18,
        paddingTop: 80,
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
        // height: 60,
        marginBottom: 12,
        padding: `${theme.spacing(1)}px ${theme.spacing(3)}px ${theme.spacing(2)}px`,
        position: 'relative'
    },
    metric: {
        fontSize: 24,
    },
    detail: {
        position: 'absolute',
        right: theme.spacing(3),
        bottom: theme.spacing(2),
        zIndex: 200
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
                    <Paper className={classes.card} variant="outlined">
                        <Typography variant="overline">Sleep quality</Typography>
                        <div className={classes.metric}>8 Hours</div>
                        <Button size="small" className={classes.detail} component={Link} to={{ pathname: ROUTES.detail, search: '?section=sleep' }}>Detail ▶</Button>
                    </Paper>
                    <Paper className={classes.card} variant="outlined">
                        <Typography variant="overline">Everyday step count</Typography>
                        <div className={classes.metric}>7000 Steps</div>
                        <Button size="small" className={classes.detail} component={Link} to={{ pathname: ROUTES.detail, search: '?section=exercise' }}>Detail ▶</Button>
                    </Paper>
                    <Paper className={classes.card} variant="outlined">
                        <Typography variant="overline">Calories intake</Typography>
                        <div className={classes.metric}>xx kCal</div>
                        <Button size="small" className={classes.detail} component={Link} to={{ pathname: ROUTES.detail, search: '?section=calories' }}>Detail ▶</Button>
                    </Paper>
                    <Paper className={classes.card} variant="outlined">
                        <Typography variant="overline">Your emotion in the last diary</Typography>
                        <div className={classes.metric}>Angry</div>
                        <Button size="small" className={classes.detail} component={Link} to={{ pathname: ROUTES.detail, search: '?section=emotion' }}>Detail ▶</Button>
                    </Paper>
                </div>
            </div>
        </div>
    )
};

export default Profile;
