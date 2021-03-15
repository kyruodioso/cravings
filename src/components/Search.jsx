import React from 'react'
import {TextField,Button, Container} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';



const useStyles = makeStyles(
    (theme) => ({
        paper: {
          padding: theme.spacing(2),
          textAlign: 'center',
          color: theme.palette.text.secondary,
        },

      })
)

const Search = (props) => {

    const search = props.search


    const updateChange=props.updateChange 
    const getSearch=props.getSearch

    const classes = useStyles();


    return (
        <div>
            <Container className={classes.paper}>
            <form onSubmit={updateChange}>
            <TextField id="outlined-basic" label="Search" value={search} onChange={getSearch} variant="outlined" size="small"/>
            <Button type="submit" variant="contained" color="primary" size="medium">Food or Drinks</Button>
            </form>

            </Container>
        </div>
    )
}

export default Search
