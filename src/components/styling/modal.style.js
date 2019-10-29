import { makeStyles } from '@material-ui/core/styles';

export const formStyles = makeStyles(theme => ({
  formControl: {
    width: '100%',
    marginBottom: theme.spacing(2),
  },
}));

export const styles = theme => ({
  root: {
    marginBottom: theme.spacing(1.5),
    padding: theme.spacing(2),
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
});
