/* eslint-disable react/prop-types */
import React, { useMemo, useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Typography, IconButton, Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles'
import { ArrowBack } from '@material-ui/icons';
import { Link } from 'react-router-dom';
// eslint-disable-next-line no-unused-vars
import { ResponsiveBar as Bar } from '@nivo/bar';
import ROUTES from '../constants/routes';
import SLEEP from '../stab/sleep.json';
import SPORT from '../stab/sport.json';
import DIET from '../stab/diet.json';
import EVENT from '../stab/event.json';


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
    statistics: {
        overflow: 'auto',
        height: 'calc(100% - 50px)',
        '&::-webkit-scrollbar': {
            display: 'none'
        }
    },
    title: {
        color: 'white',
        paddingTop: 72,
        paddingLeft: '2rem',
        paddingRight: '3rem',
        fontWeight: 'bold',
    },
    card: {
        height: 300,
        marginBottom: 12,
        padding: `${theme.spacing(1)}px ${theme.spacing(3)}px ${theme.spacing(2)}px`,
        position: 'relative'
    },
    advice: {
        color: '#666',
    }
}));

const text = {
    sleep: {
        title: 'sleeping quality',
        field: 'SleepLength',
        advice: 'You\'ve achieved on average 6.7 hours of sleep this week, it will be healthier if you make it 7. See the 3-hour data? Remember to divide the task ahead of time, don\'t leave it till the last. Set a reminder for your bedtime, take a breath and grasp you pillow. Wish you g\'nite~'
    },
    exercise: {
        title: 'exerice',
        field: 'step_number',
        advice: 'You\'ve walked 3381 steps on average this week, with a 28.2% decrease comparing to your previous average. Don\'t be panic when things are messed up. Try to go for a walk after dinner, enjoy the sunset and you may see a better sunrise tomorrow.'
    },
    calories: {
        title: 'calories intake',
        field: 'calorie',
        advice: 'You\'ve taken 1922.3 Cals on average this week, equaling to 2 sweet bagels per day. Nice diet! Remember to keep the diet habit and have meals regularly. We care about every single step you make to a healthier life.'
    },
    emotion: {
        title: 'emotion',
        field: ['emotion', 'catagory'],
        advice: 'Life is diverse. You\'ve experienced variable emotions during the week. That\'s how life goes, like a box of chocolate, never knowing what is going to be next, sweet, or bitter. We are not telling you to be happy all the time and smile, we wish you an internal happiness with full optimism towards life.'
    },
};

const BarComponent = props => {
    return (
        <g transform={`translate(${props.x},${props.y})`}>
            <rect
                x={-3}
                y={7}
                width={props.width}
                height={props.height}
                fill="rgba(0, 0, 0, .07)"
            />
            <rect width={props.width} height={props.height} fill={props.color} />
            <rect
                x={props.width - 5}
                width={5}
                height={props.height}
                fill={props.borderColor}
                fillOpacity={0.2}
            />
        </g>
    )
}

const Detail = () => {
    const classes = useStyle();
    const { search } = useLocation();
    const section = useMemo(() => {
        const p = new URLSearchParams(search);
        return p.get('section')
    }, [search]);
    // eslint-disable-next-line no-unused-vars
    const [data, setData] = useState([]);
    // useEffect(() => {
    //     let sectionUrl;
    //     switch (section) {
    //         case 'sleep':
    //             sectionUrl = 'sleep_data';
    //             break;
    //         case 'exercise':
    //             sectionUrl = 'sport_data';
    //             break;
    //         case 'calories':
    //             sectionUrl = 'diet_data';
    //             break;
    //         case 'emotion':
    //             sectionUrl = 'event_data';
    //             break;
    //     }
    //     console.log(`${process.env.REACT_APP_SERVER}${sectionUrl}`)
    //     fetch(`${process.env.REACT_APP_SERVER}${sectionUrl}`, {
    //         method: 'GET',
    //         // mode: 'no-cors',
    //         headers: new Headers({
    //             'Content-Type': 'application/json'
    //         })
    //     })
    //         // .then((res) => res.json())
    //         .then((res) => console.log(res.body))
    // }, [])
    useEffect(() => {
        let data;
        switch (section) {
            case 'sleep':
                data = SLEEP;
                break;
            case 'exercise':
                data = SPORT;
                break;
            case 'calories':
                data = DIET;
                break;
            case 'emotion':
                data = EVENT;
                break;
        }
        setData(data);
    }, [])

    return (
        <div className={classes.background}>
            <IconButton className={classes.settings} component={Link} to={ROUTES.profile}><ArrowBack /></IconButton>
            <Typography variant="h6" className={classes.title}>Your {text[section].title} record of the last 7 days</Typography>
            <div className={classes.profile}>
                <div className={classes.statistics}>
                    <Paper className={classes.card} variant="outlined">
                        <Bar 
                            height={300}
                            margin={{ left: 30, top: 10, bottom: 10 }}
                            colors="#EEE1C1"
                            data={data}
                            keys={[text[section].field]}
                            indexBy="date_added"
                            barComponent={BarComponent}
                            enableLabel={true}
                            axisBottom={{ enable: false }}
                        />
                    </Paper>
                    <Typography variant="body2" className={classes.advice}>{text[section].advice}</Typography>
                </div>
            </div>
        </div>
    )
}

export default Detail;
