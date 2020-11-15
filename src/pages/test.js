import { GridList, GridListTile, GridListTileBar, IconButton, ListSubheader } from '@material-ui/core';
// import { GradientOutlined } from '@material-ui/icons';
import { makeStyles } from '@material-ui/core/styles';
// import { StarBorder } from '@material-ui/icons';
import InfoIcon from '@material-ui/icons/Info';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import React from 'react';


const pageTitle = {
    buffer1: "Recommended",
    buffer2: "You may also interested in",
    buffer3: "buffer3",
    buffer4: "buffer4"
}

const data = [
    {
        name: 'Is My Anxiety Normal',
        cols: 1,
        title: 'Is My Anxiety Normal',
        author: 'adams',
        img: '/sources/tests/Is my anxiety normal.jpg'
    }, 
    {
        name: 'My Personal Traits',
        cols: 1,
        title: 'My Personal Traits',
        author: 'ali',
        img: '/sources/tests/My personality traits.jpg',
    },
    {
        name: 'Mode Evaluation',
        cols: 2,
        title: 'Mode Evaluation',
        author: 'kamanke',
        img: '/sources/tests/Mode evaluation.jpg',
    },
    {
        name: 'Self-Esteen Assessment',
        cols: 2,
        title: 'Self-esteen Assessment',
        author: "ycLU",
        img: '/sources/tests/Self-esteen assessment.jpg'
    }
]

const interest = [
    {
        name: 'interest1',
        cols: 1,
        title: 'Sleep Tight',
        author: 'jackson',
        img: '/sources/interests/Sleep Tight.jpg'
    },
    {
        name: 'interest2',
        cols: 1,
        title: 'Smile to Yourself',
        author: 'baltiyev',
        img: '/sources/interests/Smile to Yourself.jpg'
    },
    {
        name: 'interest3',
        cols: 1,
        title: 'Speak to Your Lovers',
        author: 'borba',
        img: '/sources/interests/Speak to Your Lovers.jpg'
    },
    {
        name: 'interest4',
        cols: 1,
        title: 'Stay with Friends',
        author: "hliznitsova",
        img: '/sources/interests/Stay with Friends.jpg'
    }
]
const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        backgroundColor: theme.palette.background.paper,
        height: 'calc(100% - 56px)',
        overflow: 'auto',
        '&::-webkit-scrollbar': {
            display: 'none'
        }
    },
    gridList: {
        height: 730, // 736 available
        width: '99%',
        marginTop: '5%',
    },
    gridList_horizontal: {
        flexWrap: 'nowrap',
        // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
        transform: 'translateZ(0)',
        width: '100%',
        '&::-webkit-scrollbar': {
            display: 'none'
        }
    },
    title: {
        color: theme.palette.primary.light,
    },
    titleBar: {
        background:
            'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
    },
    icon: {
        color: 'rgba(255, 255, 255, 0.54)',
    },
    section1: {
        color: '#000000',
        fontSize: '1.25rem',
        marginTop: '0.5rem',
        marginBottom: '0.5rem',
    },
    section2: {
        color: '#464C47',
        fontSize: '1.25rem',
        marginTop: '0.5rem',
        marginBottom: '0.5rem',
    },
    background: {
        background: 'linear-gradient(to top, #4B6A50, #839686)',
        height: '100%'
    },
}));

const Test = () => {
    const classes = useStyles();
    return (
        // <div>Test page</div>
        <div className={classes.root}>
            <GridList cellHeight={160} className={classes.gridList} col={3}>
                <GridListTile key="Subheader" cols={2} style={{ height: "auto" }}>
                    <ListSubheader component="div" className={classes.section1}>{pageTitle.buffer1}</ListSubheader>
                </GridListTile>
                {
                    data.map((x) => (
                        <GridListTile key={x.name} cols={x.cols || 1} >
                            {/* <div> {x.name} </div> */}
                            <img src={x.img} alt={x.title} />
                            <GridListTileBar
                                className={classes.gridlisttilebar}
                                title={x.title}
                                subtitle={<span>by: {x.author} </span>}
                                actionIcon={
                                    <IconButton aria-label={`info about ${x.title}`} className={classes.icon}>
                                        <InfoIcon></InfoIcon>
                                    </IconButton>
                                }></GridListTileBar>
                        </GridListTile>
                    ))
                }
                <GridListTile key="Subheader" cols={2} style={{ height: "auto" }}>
                    <ListSubheader component="div" className={classes.section2}>{pageTitle.buffer2}</ListSubheader>
                </GridListTile>
            </GridList>
            <GridList className={classes.gridList_horizontal} cols={2.5} cellHeight={160}>
                {
                    interest.map((x) => (
                        <GridListTile key={x.img}>
                            <img src={x.img} alt={x.title}></img>
                            <GridListTileBar
                                title={x.title}
                                className={`${classes.titleBar} ${classes.title}`}
                                actionIcon={
                                    <IconButton aria-label={`star ${x.title}`}>
                                        <StarBorderIcon className={classes.title}></StarBorderIcon>
                                    </IconButton>
                                }></GridListTileBar>
                        </GridListTile>
                    ))
                }
            </GridList>
        </div>

    )
};

export default Test;