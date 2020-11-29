import React, { useCallback, useMemo, useState } from 'react';
import { Button, Tabs, Tab, TextField, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import dayjs from 'dayjs';
import Container from '../components/container';
import SelectableChip from '../components/selectable-chip';
import { Link } from 'react-router-dom';
import routes from '../constants/routes';

const useStyles = makeStyles((theme) => ({
    chips: {
        display: 'flex',
        overflow: 'auto',
        '& > *': {
            margin: theme.spacing(0.5),
        },
        '&::-webkit-scrollbar': {
            display: 'none',
        }
    },
    section: {
        marginBottom: '1rem',
    },
    center: {
        alignSelf: 'center',
    },
    tab: {
        minWidth: 'unset',
        fontSize: 30,
    },
    loading: {
        display: 'flex',
        alignItems: 'center',
        '& > span': {
            marginLeft: 10
        },
        marginLeft: 24
    },
    buttons: {
        display: 'flex',
        justifyContent: 'space-between',
        '& > *': {
            width: '45%',
        }
    },
}));

const Diary = () => {
    const classes = useStyles();

    const [emotion, setEmotion] = useState(0);

    const handleEmotionChange = useCallback((event, newValue) => {
        setEmotion(newValue);
    }, []);

    const title = useMemo(() => `On ${dayjs().format('LL')}...`, []);
    const tail = useMemo(() => (
        <div className={classes.buttons}>
        <Button variant="contained" component={Link} to={routes.diary}>
            Cancel
        </Button>
        <Button variant="contained" color="primary" component={Link} to={routes.diary}>Done</Button>
    </div>
    ), [])

    return (
        <Container title={title} tail={tail}>
    
                <div className={classes.section}>
                    <Typography variant="h6">Your mood</Typography>
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
                    <Typography variant="h6">Your thoughts</Typography>
                    <TextField fullWidth multiline variant="outlined" rows={10} />
                </div>
        </Container>
    )
};

export default Diary;
