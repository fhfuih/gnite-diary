import React, { useMemo, useCallback } from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import { BottomNavigation, BottomNavigationAction } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Person, Favorite, Assignment } from '@material-ui/icons'
import ROUTES from '../constants/routes';

const useStyles = makeStyles({
    root: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 500,
    }
})


const Navi = () => {
    const location = useLocation();
    const history = useHistory();
    const classes = useStyles();
    const value = useMemo(() => {
        switch (location.pathname) {
            case ROUTES.write:
            case ROUTES.diary:
                return 0;
            case ROUTES.profile:
                return 1;
            case ROUTES.plan:
                return 2;
        }
    }, [location]);
    const onChange = useCallback((event, newValue) => {
        const route = [ROUTES.diary, ROUTES.profile, ROUTES.plan][newValue];
        history.push(route);
    }, [history]);
    return (
        <BottomNavigation showLabels className={classes.root} value={value} onChange={onChange}>
            <BottomNavigationAction label="Diary" icon={<Favorite />} />
            <BottomNavigationAction label="Profile" icon={<Person />} />
            <BottomNavigationAction label="Plan" icon={<Assignment />} />
        </BottomNavigation>
    )
}

export default Navi;
