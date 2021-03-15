import React from 'react';

import {AppBar, Toolbar, Typography, makeStyles, Switch} from '@material-ui/core'


import KitchenIcon from '@material-ui/icons/Kitchen';

const drawerWidth = 240;


const useStyles = makeStyles(theme=>({
    offset:theme.mixins.toolbar,
    root: {
      display: 'flex',
    },
    appBar: {
      transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
    },
    appBarShift: {
      width: `calc(100% - ${drawerWidth}px)`,
      transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginRight: drawerWidth,
    },
    title: {
      flexGrow: 1,
    },
    hide: {
      display: 'none',
    },
    drawer: {
      width: drawerWidth,
      flexShrink: 0,
    },
    drawerPaper: {
      width: drawerWidth,
    },
    drawerHeader: {
      display: 'flex',
      alignItems: 'center',
      padding: theme.spacing(0, 1),
      // necessary for content to be below app bar
      ...theme.mixins.toolbar,
      justifyContent: 'flex-start',
    },

}))

const Nav = (props) => {
    const classes = useStyles();

    const darkMode= props.darkMode;
    const setDarkMode= props.setDarkMode;




    return (
      <div>
  
      <AppBar
        position="fixed"
      >
        <Toolbar>
            <KitchenIcon />
          <Typography variant="h6" noWrap className={classes.title}>
            Cravings
          </Typography>
          <Switch  checked={darkMode} onChange={()=>setDarkMode(!darkMode)}/>

        </Toolbar>
      </AppBar>
      <div className={classes.offset}></div>
 

    </div>
    )
}

export default Nav
