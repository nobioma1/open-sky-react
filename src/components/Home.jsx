import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Header from './Header';
import { homeStyles } from './styling/home.styles';
import { useApi } from '../hooks/useApi';
import CardItem from './Card';
import ModalDisplay from './Modal';
import airport0 from '../assets/airport-0.jpg';
import airport1 from '../assets/airport-1.jpg';
import airport2 from '../assets/airport-2.jpg';
import airport3 from '../assets/airport-3.jpg';
import airport4 from '../assets/airport-4.jpg';

const images = [airport0, airport1, airport2, airport3, airport4];

const Home = () => {
  const classes = homeStyles();
  const data = useApi('/states/all');
  const trafficCount = {};

  if (data.response) {
    data.response.states.forEach(([_, __, country]) => {
      if (trafficCount[country]) {
        trafficCount[country] += 1;
      } else {
        trafficCount[country] = 1;
      }
    });
  }

  const sortedTrafficList = Object.entries(trafficCount).sort((a, b) =>
    a[1] < b[1] ? 1 : -1
  );

  const top10TrafficAreas = sortedTrafficList.slice(0, 10);

  const [modalState, toggleState] = React.useState(false);

  const toggleModal = () => {
    toggleState(prev => !prev);
  };

  return (
    <React.Fragment>
      <Header loading={top10TrafficAreas.length === 0} />
      <Container
        maxWidth="sm"
        component="main"
        className={classes.headerContent}
      >
        <Typography
          component="h1"
          variant="h4"
          align="center"
          color="textPrimary"
          gutterBottom
        >
          Major Areas with heavy air traffic
        </Typography>
      </Container>
      <Container maxWidth="md" component="main">
        <Grid container spacing={5} alignItems="flex-end">
          {top10TrafficAreas.map(([name, count], index) => (
            <Grid item key={name} xs={12} md={4}>
              <CardItem
                name={name}
                count={count}
                onClickFn={toggleModal}
                image={images[index % 5]}
              />
            </Grid>
          ))}
        </Grid>
      </Container>
      <ModalDisplay state={modalState} toogleFn={toggleModal} />
    </React.Fragment>
  );
};

export default Home;
