import React, { useCallback, useMemo, useState } from 'react';
import { Button, Tabs, Tab, TextField, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import dayjs from 'dayjs';
import SelectableChip from '../components/selectable-chip';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        padding: '1rem',
    },
    chips: {
        display: 'flex',
    //   justifyContent: 'center',
    //   flexWrap: 'wrap',
        overflow: 'auto',
        '& > *': {
            margin: theme.spacing(0.5),
        },
        '&::-webkit-scrollbar': {
            display: 'none',
        }
    },
    section: {
        marginBottom: '2rem',
    },
    center: {
        alignSelf: 'center',
    },
    tab: {
        minWidth: 'unset',
        fontSize: 30,
    }
}));

const Diary = () => {
    const classes = useStyles();

    const [emotion, setEmotion] = useState(0);

    const handleEmotionChange = useCallback((event, newValue) => {
        setEmotion(newValue);
    }, []);

    const date = useMemo(() => dayjs().format('LL'), []);

    return (
        <div className={classes.root}>
            <div className={classes.section}>
                <Typography variant="h6">On {date}</Typography>
            </div>

            <div className={classes.section}>
                <Typography variant="h6">Your mood...</Typography>
                <Tabs variant="fullWidth" indicatorColor="secondary" value={emotion} onChange={handleEmotionChange}>
                    <Tab label="😄" className={classes.tab}/>
                    <Tab label="😶" className={classes.tab}/>
                    <Tab label="😔" className={classes.tab}/>
                    <Tab label="😢" className={classes.tab}/>
                    <Tab label="😡" className={classes.tab}/>
                </Tabs>
            </div>

            <div className={classes.section}>
                <Typography variant="h6">Your concerns</Typography>
                <div className={classes.chips}>
                    <SelectableChip label="Family"/>
                    <SelectableChip label="Romance"/>
                    <SelectableChip label="Friendship"/>
                    <SelectableChip label="Health"/>
                    <SelectableChip label="Job"/>
                    <SelectableChip label="Schoolwork"/>
                    <SelectableChip label="Accident"/>
                </div>
            </div>

            <div className={classes.section}>
                <Typography variant="h6">Your thoughts...</Typography>
                <TextField fullWidth multiline variant="outlined" rows={10} />
            </div>

            <Button variant="contained" color="primary">Submit</Button>
        </div>
    )
};

export default Diary;
