import React, { useContext, useMemo } from 'react';
import { makeStyles } from '@material-ui/core/styles'
import { Button, Typography, Paper } from '@material-ui/core';
import Container from '../components/container';
import { Context } from '../App';

const useStyle = makeStyles((theme) => ({
    card: {
        marginBottom: 12,
        padding: `${theme.spacing(2)}px ${theme.spacing(3)}px`,
        position: 'relative',
        transition: 'all .5s',
        '&::after, &::before': {
            content: '""',
            display: 'block',
            position: 'absolute',
            bottom: 0,
            borderBottom: '2px solid red',
        },
        '&::after': {
            left: '50%',
        },
        '&::before': {
            right: '50%',
        }
    },
    card1: {
        '& .task': {
            fontWeight: 'bold',
            marginBottom: theme.spacing(1)
        },
        '& .due': {
            fontSize: 24,
        },
    },
    card2: {
        fontSize: theme.typography.body2.fontSize,
        '& .task': {
            marginBottom: '0.16rem'
        },
    },
    caption: {
        color: 'gray',
        marginLeft: theme.spacing(1)
    },
    border1: {
        '&::after, &::before': {
            width: '45%',
            borderColor: theme.palette.error.main
        },
    },
    border2: {
        '&::after, &::before': {
            width: '30%',
            borderColor: theme.palette.secondary.main,
        },
    },
    border3: {
        '&::after, &::before': {
            width: '27%',
            borderColor: theme.palette.secondary.main,
        },
    },
    border4: {
        '&::after, &::before': {
            width: '20%',
            borderColor: theme.palette.primary.main,
        },
    },
    border5: {
        '&::after, &::before': {
            width: '8%',
            borderColor: theme.palette.primary.main,
        },
    },
    border6: {
        '&::after, &::before': {
            width: '1%',
            borderColor: theme.palette.primary.main,
        },
    },
}))

const Plan = () => {
    const classes = useStyle();
    const contextValue = useContext(Context);
    const tail = useMemo(() => (
        <Button variant="contained" color="primary" fullWidth>
            Add Plan
        </Button>
    ), [])
    return (
        <Container title="Your Plans" tail={tail}>
            <Paper className={`${classes.card1} ${classes.card} ${classes.border1}`} variant="outlined">
                <div className="task">COMP 4461 Final Video Paper</div>
                <div>
                    <span className="due">Due in 1 day</span>
                    <Typography variant="caption" component="span" className={classes.caption}>
                        (30/11/2020)
                    </Typography>
                </div>
            </Paper>
            <Paper className={`${contextValue ? classes.card1 : classes.card2} ${classes.card} ${classes.border2}`} variant="outlined">
                <div className="task">HUMA 1000G Quiz 3</div>
                <div>
                    <span className="due">Due in 5 days</span>
                    <Typography variant="caption" component="span" className={classes.caption}>
                        (4/12/2020)
                    </Typography>
                </div>
            </Paper>
            <Paper className={`${classes.card2} ${classes.card} ${classes.border3}`} variant="outlined">
                <div className="task">HART 1036 Final Project</div>
                <div>
                    <span className="due">Due in 5 day</span>
                    <Typography variant="caption" component="span" className={classes.caption}>
                        (4/12/2020)
                    </Typography>
                </div>
            </Paper>
            <Paper className={`${classes.card2} ${classes.card} ${classes.border4}`} variant="outlined">
                <div className="task">HUMA 1000G Discussion 3</div>
                <div>
                    <span className="due">Due in 11 days</span>
                    <Typography variant="caption" component="span" className={classes.caption}>
                        (10/12/2020)
                    </Typography>
                </div>
            </Paper>
            <Paper className={`${classes.card2} ${classes.card} ${classes.border5}`} variant="outlined">
                <div className="task">HUMA 2010 Final</div>
                <div>
                    <span className="due">Due in 18 days</span>
                    <Typography variant="caption" component="span" className={classes.caption}>
                        (17/12/2020)
                    </Typography>
                </div>
            </Paper>
            <Paper className={`${classes.card2} ${classes.card} ${classes.border6}`} variant="outlined">
                <div className="task">Her Birthday</div>
                <div>
                    <span className="due">Due in 199 days</span>
                    <Typography variant="caption" component="span" className={classes.caption}>
                        (00/00/2020)
                    </Typography>
                </div>
            </Paper>
        </Container>
    )
};

export default Plan;
