import React from 'react';
import { makeStyles,} from '@material-ui/core/styles';
import { Card, CardActions, CardContent, Typography, Grid, Button } from '@material-ui/core';


import Alert from '@material-ui/lab/Alert';


import Ingredients from './Ingredients'




const useStyles = makeStyles((theme)=>({
  root: {
    padding: theme.spacing(0.5),
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 4px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  paper: {
    padding: theme.spacing(4),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  image:{
      maxWidth:200,
  },
  buttons:{
    direction:"row",
    justifyContent:"space-around",
    alignItems:"center"
  },
  listaIngredientes: {
    textAlign: "center",
  },
  ingrediente: {
    padding: theme.spacing(1),
    backgroundColor:"#6ADFCD",
    boxShadow: "10px 5px 5px #2d7b88"
  }

}));



const Matching = (props) => {
    const classes = useStyles();

    const title= props.title
    const image = props.image
    const porciones= props.yield
    const url= props.url
    const healthLabels= props.healthLabels.join(' / ')
    const source= props.source
    const ingredientLines= props.ingredientLines


   

 
  
    return (
        <div className={classes.root} >
          
         <Grid >
    <Card className={classes.root}>
      <CardContent className={classes.paper}>
        <Typography variant="h5" component="h2">
          {title}
        </Typography>
         <img className={classes.image} src={image} alt="imagen de alimento"/>
         <Typography variant="body2" component="p">
          {'Source:'}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          {source}
        </Typography>
        <Typography variant="body2" component="p">
          {'Portions: '}{porciones}
        </Typography>
        <Ingredients ingredientLines={ingredientLines}/>
              <Alert severity="info">{healthLabels}</Alert>
      </CardContent>
      <CardActions className={classes.buttons}>
        <Button href={url} target="_blank" rel="noreferrer">More Info...
        </Button>

      </CardActions>
    </Card>

    </Grid>
        </div>
    )
}

export default Matching
