import React from 'react';
import { makeStyles } from '@material-ui/core/styles'
import { Typography } from '@material-ui/core';

const useStyle = makeStyles((theme) => ({
    background: {
        background: 'linear-gradient(to top, #4B6A50, #839686)',
        height: '100%'
    },
    profile: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        padding: theme.spacing(4),
        paddingTop: 56,
        paddingBottom: theme.spacing(8) + 8,
        background: 'white',
        clipPath: 'circle(100% at 50% 85%)',
        display: 'flex',
        flexDirection: 'column',
    },
    container: {
        overflow: 'auto',
        marginBottom: theme.spacing(1),
        // height: '100%',
        '&::-webkit-scrollbar': {
            display: 'none'
        }
    },
    title: {
        marginBottom: theme.spacing(2)
    },
    tail: {
        marginTop: 'auto'
    }
}))

// eslint-disable-next-line react/prop-types
const Container = ({ children, title, tail }) => {
    const classes = useStyle();
    return (
        <div className={classes.background}>
            <div className={classes.profile}>
                <Typography variant={title.length <= 15 ? 'h4' : 'h5'} align="center" className={classes.title}>
                    {title}
                </Typography>
                <div className={classes.container}>
                    {children}
                </div>
                <div className={classes.tail}>{tail}</div>
            </div>
        </div>
    )
};

export default Container;
