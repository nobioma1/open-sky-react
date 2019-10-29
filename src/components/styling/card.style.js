import { makeStyles } from '@material-ui/core/styles';

export const cardStyles = makeStyles(theme => ({
  cardHeader: {
    backgroundColor: theme.palette.grey[200],
  },
  cardContent: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'baseline',
    marginBottom: theme.spacing(2),
  },
  card: {
    cursor: 'pointer',
  },
}));
