import { makeStyles } from '@material-ui/core/styles';

export const HeaderStyles = makeStyles(theme => ({
  appBar: {
    borderBottom: `2px solid ${theme.palette.divider}`,
  },
  toolbar: {
    flexWrap: 'wrap',
  },
  toolbarTitle: {
    flexGrow: 1,
  },
}));
