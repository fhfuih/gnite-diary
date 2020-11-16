import React, { useMemo, useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Typography, IconButton, Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles'
import { ArrowBack } from '@material-ui/icons';
import { Link } from 'react-router-dom';
// eslint-disable-next-line no-unused-vars
import { Bar } from '@nivo/bar';
import ROUTES from '../constants/routes';


const useStyle = makeStyles((theme) => ({
    settings: {
        position: 'absolute',
        left: '1rem',
        top: '1rem',
        color: 'white',
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
        paddingTop: 120,
        background: 'white',
        clipPath: 'circle(100% at 50% 91%)',
    },
    title: {
        color: 'white',
        paddingTop: 72,
        paddingLeft: '2rem',
        paddingRight: '3rem',
        fontWeight: 'bold',
    },
    card: {
        // height: 60,
        marginBottom: 12,
        padding: `${theme.spacing(1)}px ${theme.spacing(3)}px ${theme.spacing(2)}px`,
        position: 'relative'
    },
}));

const text = {
    sleep: {
        title: 'sleeping quality',
        field: 'SleepLength',
    },
    exercise: {
        title: 'exerice',
        field: 'step_number',
    },
    calories: {
        title: 'calories intake',
        field: 'calorie',
    },
    emotion: {
        title: 'emotion',
        field: ['emotion', 'catagory'],
    },
};

const Detail = () => {
    const classes = useStyle();
    const { search } = useLocation();
    const section = useMemo(() => {
        const p = new URLSearchParams(search);
        return p.get('section')
    }, [search]);
    // eslint-disable-next-line no-unused-vars
    const [data, setData] = useState([]);
    useEffect(() => {
        let sectionUrl;
        switch (section) {
            case 'sleep':
                sectionUrl = 'sleep_data';
                break;
            case 'exercise':
                sectionUrl = 'sport_data';
                break;
            case 'calories':
                sectionUrl = 'diet_data';
                break;
            case 'emotion':
                sectionUrl = 'event_data';
                break;
        }
        console.log(`${process.env.REACT_APP_SERVER}${sectionUrl}`)
        fetch(`${process.env.REACT_APP_SERVER}${sectionUrl}`, {
            method: 'GET',
            // mode: 'no-cors',
            headers: new Headers({
                'Content-Type': 'application/json'
            })
        })
            // .then((res) => res.json())
            .then((res) => console.log(res.body))
    }, [])
    return (
        <div className={classes.background}>
            <IconButton className={classes.settings} component={Link} to={ROUTES.profile}><ArrowBack /></IconButton>
            <Typography variant="h6" className={classes.title}>Your {text[section].title} record of the last 7 days</Typography>
            <div className={classes.profile}>
                <Paper className={classes.card} variant="outlined">
                    {/* <Bar 
                        height={300}
                        layout="horizontal"
                        data={[1,2,3,4,5]}
                    /> */}
                </Paper>
            </div>
        </div>
    )
}

export default Detail;
