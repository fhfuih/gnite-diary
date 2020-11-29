import { IconButton, Avatar, Paper, Typography, Button, Fade } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles'
import { ExitToApp } from '@material-ui/icons';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import ROUTES from '../constants/routes';
import avatar from '../avatar.png';
import { Context } from '../App';

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
        padding: theme.spacing(4),
        paddingTop: 90,
        paddingBottom: theme.spacing(8) + 8,
        background: 'white',
        clipPath: 'circle(100% at 50% 91%)',
        display: 'flex',
        flexDirection: 'column',
    },
    statistics: {
        overflow: 'auto',
        '&::-webkit-scrollbar': {
            display: 'none'
        }
    },
    card: {
        // height: 60,
        marginBottom: 12,
        padding: `${theme.spacing(1)}px ${theme.spacing(3)}px`,
        position: 'relative'
    },
    metric: {
        fontSize: 24,
        marginBottom: theme.spacing(1)
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
    const contextValue = useContext(Context);
    console.log(contextValue);
    return (
        <div className={classes.background}>
            <IconButton className={classes.settings} component={Link} to={ROUTES.login}><ExitToApp /></IconButton>
            <Avatar src={avatar} className={classes.avatar} />
            <div className={classes.profile}>
                {/* <Typography variant="h6" align="center" gutterBottom>Tips</Typography> */}
                { contextValue &&
                    <Fade in={contextValue} timeout={1000}>
                        <Paper className={classes.card} variant="outlined">
                            <Typography variant="body2">
                                Hi there! I just noted that you didn&apos;t have enough sleep last night.
                                I guess it&apos;s because of the tight schedule right? Well, you seem to
                                always finish your assignments faster than expected.
                                Maybe you can allow yourself a break and do it later. Also try to sleep early
                                and work in the morning. No worry, you&apos;ll get better.
                            </Typography>
                        </Paper>
                    </Fade>
                }
                <Typography variant="h6" align="center" gutterBottom>My Statistics</Typography>
                <div className={classes.statistics}>
                    <Paper className={classes.card} variant="outlined">
                        <Typography variant="overline">Sleep quality</Typography>
                        <div className={classes.metric}>4.0 Hours</div>
                        <Button size="small" className={classes.detail} component={Link} to={{ pathname: ROUTES.detail, search: '?section=sleep' }}>Detail ▶</Button>
                    </Paper>
                    <Paper className={classes.card} variant="outlined">
                        <Typography variant="overline">Everyday step count</Typography>
                        <div className={classes.metric}>2580 Steps</div>
                        <Button size="small" className={classes.detail} component={Link} to={{ pathname: ROUTES.detail, search: '?section=exercise' }}>Detail ▶</Button>
                    </Paper>
                    <Paper className={classes.card} variant="outlined">
                        <Typography variant="overline">Calories intake</Typography>
                        <div className={classes.metric}>2899 Cal</div>
                        <Button size="small" className={classes.detail} component={Link} to={{ pathname: ROUTES.detail, search: '?section=calories' }}>Detail ▶</Button>
                    </Paper>
                    <Paper className={classes.card} variant="outlined">
                        <Typography variant="overline">Your emotion in the last diary</Typography>
                        <div className={classes.metric}>Sad</div>
                        <Button size="small" className={classes.detail} component={Link} to={{ pathname: ROUTES.detail, search: '?section=emotion' }}>Detail ▶</Button>
                    </Paper>
                </div>
            </div>
        </div>
    )
};

export default Profile;
