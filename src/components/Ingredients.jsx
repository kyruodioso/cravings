import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import {Button,Grid,Dialog,DialogTitle,List,ListItem,ListItemText} from '@material-ui/core';

import { blue } from '@material-ui/core/colors';




const emails = ['username@gmail.com', 'user02@gmail.com'];
const useStyles = makeStyles((theme) => ({
  avatar: {
    backgroundColor: blue[100],
    color: blue[600],
  },
  buttonClose:{
    padding: theme.spacing(1),
    textAlign: 'center',
  },
  dialogTitle:{
textAlign: 'center',
  }
}));

function SimpleDialog(props) {
  const classes = useStyles();
  const { onClose, selectedValue, open } = props;
  const ingredientLines= props.ingredientLines;

  const handleClose = () => {
    onClose(selectedValue);
  };

  const handleListItemClick = (value) => {
    onClose(value);
  };

  return (
    <Dialog onClose={handleClose} aria-labelledby="simple-dialog-title" open={open}>
      <DialogTitle id="simple-dialog-title" className={classes.dialogTitle}>Ingredients</DialogTitle>
      <List>
      <List>
             {
               ingredientLines.map(x=>  <ListItem key={x.toString()} className={classes.listaIngredientes}><ListItemText primary={x} className={classes.ingrediente}/></ListItem>)
             }
          </List>
        <ListItem autoFocus button onClick={() => handleListItemClick('close')}>
      <Grid container item xs={12}  justify="center">
      <Button  className={classes.buttonClose}  variant="outlined" color="secondary">
        Close
      </Button>
        </Grid>
        </ListItem>
      </List>
    </Dialog>
  );
}

SimpleDialog.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  selectedValue: PropTypes.string.isRequired,
};

const Ingredients=(props)=>{
  const [open, setOpen] = React.useState(false);
  const [selectedValue, setSelectedValue] = React.useState(emails[1]);



  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (value) => {
    setOpen(false);
    setSelectedValue(value);
  };

  return (
    <div>

      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Ingredients...
      </Button>
      <SimpleDialog ingredientLines={props.ingredientLines} selectedValue={selectedValue} open={open} onClose={handleClose} />
    </div>
  );
}

export default Ingredients