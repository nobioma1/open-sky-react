import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { styles, formStyles } from './styling/modal.style';

const DialogTitle = withStyles(styles)(props => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton
          aria-label="close"
          className={classes.closeButton}
          onClick={onClose}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles(theme => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiDialogContent);

const ModalDisplay = ({ state, toogleFn }) => {
  const classes = formStyles();

  const inputLabel = React.useRef(null);

  return (
    <Dialog
      onClose={toogleFn}
      aria-labelledby="customized-dialog-title"
      open={state}
    >
      <DialogTitle id="customized-dialog-title" onClose={toogleFn} />
      <DialogContent>
        <FormControl variant="outlined" className={classes.formControl}>
          <InputLabel ref={inputLabel} htmlFor="outlined-arrival">
            Arriving Flights in the Last
          </InputLabel>
          <Select
            native
            // value={state.arrival}
            // onChange={handleChange('arrival')}
            labelWidth={210}
            inputProps={{
              name: 'arrival',
              id: 'outlined-arrival',
            }}
          >
            <option value="" />
            <option value={10}>2 minutes</option>
            <option value={20}>5 minutes</option>
            <option value={30}>10 minutes</option>
            <option value={10}>15 minutes</option>
            <option value={20}>20 minutes</option>
            <option value={30}>30 minutes</option>
          </Select>
        </FormControl>
        <FormControl variant="outlined" className={classes.formControl}>
          <InputLabel ref={inputLabel} htmlFor="outlined-departure">
            Departing Flights in the Last
          </InputLabel>
          <Select
            native
            // value={state.departures}
            // onChange={handleChange('departures')}
            labelWidth={210}
            inputProps={{
              name: 'departures',
              id: 'outlined-departure',
            }}
          >
            <option value="" />
            <option value={10}>2 minutes</option>
            <option value={20}>5 minutes</option>
            <option value={30}>10 minutes</option>
            <option value={10}>15 minutes</option>
            <option value={20}>20 minutes</option>
            <option value={30}>30 minutes</option>
          </Select>
        </FormControl>
        <TextField
          variant="outlined"
          margin="normal"
          name="icao"
          label="ICAO"
          type="text"
          fullWidth
        />
      </DialogContent>
    </Dialog>
  );
};

export default ModalDisplay;
