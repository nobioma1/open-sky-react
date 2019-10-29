import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import Typography from '@material-ui/core/Typography';
import CardMedia from '@material-ui/core/CardMedia';
import LocalAirportIcon from '@material-ui/icons/LocalAirport';
import { cardStyles } from './styling/card.style';

const CardItem = ({ name, count, onClickFn, image }) => {
  const classes = cardStyles();

  return (
    <Card className={classes.card} onClick={onClickFn}>
      <CardMedia className={classes.media} image={image} title="name" />
      <CardContent>
        <div className={classes.cardContent}>
          <Typography component="h2" variant="h4" color="textPrimary">
            <LocalAirportIcon color="primary" />
            {count}
          </Typography>
          <Typography variant="h6" color="textSecondary">
            {'  '}
            flights
          </Typography>
        </div>
      </CardContent>
      <CardHeader
        title={name}
        titleTypographyProps={{ align: 'center' }}
        className={classes.cardHeader}
      />
    </Card>
  );
};

export default CardItem;
