import { GridList, GridListTile, GridListTileBar, IconButton, ListSubheader } from '@material-ui/core';
// import { GradientOutlined } from '@material-ui/icons';
import { makeStyles } from '@material-ui/core/styles';
// import { StarBorder } from '@material-ui/icons';
import InfoIcon from '@material-ui/icons/Info';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import React from 'react';


const pageTitle = {
    buffer1: "tests",
    buffer2: "You may also interested in",
    buffer3: "buffer3",
    buffer4: "buffer4"
}

const data = [
    {
        name: 'test1',
        cols: 1,
        title: 'title1',
        author: 'author1',
        img: 'img1'
    }, 
    {
        name : 'test2',
        cols: 1,
        title: 'title2',
        author: 'author2',
        img: 'img2'
    },
    {
        name : 'test3',
        cols: 2,
        title: 'title3',
        author: 'author3',
        img: 'img3'
    },
    {
        name: 'test4',
        cols: 2,
        title: 'title4',
        author: "author4",
        img: 'img4'
    }
]

const interest = [
    {
        name: 'interest1',
        cols: 1,
        title: 'title1',
        author: 'author1',
        img: 'img1'
    },
    {
        name: 'interest2',
        cols: 1,
        title: 'title2',
        author: 'author2',
        img: 'img2'
    },
    {
        name: 'interest3',
        cols: 2,
        title: 'title3',
        author: 'author3',
        img: 'img3'
    },
    {
        name: 'interest4',
        cols: 2,
        title: 'title4',
        author: "author4",
        img: 'img4'
    }
]

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
        backgroundColor: theme.palette.background.paper,
    },
    gridList: {
        width: 470,
        height: 730, // 736 available
    },
    gridList_horizontal: {
        flexWrap: 'nowrap',
        // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
        transform: 'translateZ(0)',
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
}));

const Test = () => {
    const classes = useStyles();
    return (
        // <div>Test page</div>
        <div className={classes.root}>
            <GridList cellHeight={160} className={classes.gridList} col={3}>
                <GridListTile key="Subheader" cols={2} style={{height:"auto"}}>
                    <ListSubheader component="div">{pageTitle.buffer1}</ListSubheader>
                </GridListTile>
                {
                    data.map((x) => (
                        <GridListTile key={x.name} cols={x.cols || 1} >
                            {/* <div> {x.name} </div> */}
                            <img src={x.img} alt={x.title}/>
                            <GridListTileBar 
                                title={x.title}
                                subtitle={<span>by: {x.author} </span>}
                                actionIcon={
                                    <IconButton aria-label={`info about ${x.title}`} className ={classes.icon}>
                                        <InfoIcon></InfoIcon>
                                    </IconButton>
                                }></GridListTileBar>
                        </GridListTile>
                    ))
                }
                <GridListTile key="Subheader" cols={2} style={{ height: "auto" }}>
                    <ListSubheader component="div">{pageTitle.buffer2}</ListSubheader>
                </GridListTile>
                <GridList className={classes.gridList_horizontal} cols={2.5}>
                    {
                        interest.map((x) => (
                            <GridListTile key={x.img}>
                                <img src={x.img} alt={x.title}></img>
                                <GridListTileBar
                                    title={x.title}
                                    classes={{
                                        root: classes.titleBar,
                                        title: classes.title,
                                    }}
                                    actionIcon={
                                        <IconButton aria-label={`star ${x.title}`}>
                                            <StarBorderIcon className={classes.title}></StarBorderIcon>
                                        </IconButton>
                                    }></GridListTileBar>
                            </GridListTile>
                        ))
                    }
                </GridList>
            </GridList>
        </div>
        

    )
};

export default Test;
