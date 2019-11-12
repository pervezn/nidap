import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import { Container, CardContent, Avatar, Typography, Box, Grid, GridListTile, GridList, Button, Card, CardMedia } from '@material-ui/core';
import { borders } from '@material-ui/system';
import { makeStyles } from '@material-ui/styles';
import { typeAlias } from '@babel/types';

const defaultProps = {
  style: { width: '10rem', height: '10rem' },
};
const useStyles = makeStyles({
  avatar: {
    width: 200,
    height: 200,
  },
  card: {
    display: 'flex',
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
  },
  content: {
    flex: '1 0 auto',
    margin: 50
  },
  cover: {
    width: 300,
    height: 300
  },
  button: {
    margin: 0,
  },
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    // backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    width: 800,
    height: 500,
  },
})

const App = ()  => {
  const [data, setData] = useState({});
  const pictures = Object.values(data);
  const classes = useStyles();


  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch('./pictures/pictures.json');
      const json = await response.json();
      setData(json);
    };
    fetchProducts();
  }, []);

  return (
    <Container>
      <Box mt={10}><Typography variant="h3" align="center" color="textSecondary">
        Nida Pervez
      </Typography></Box>
      <Box 
        mt={10}
        mb={15}
        mx="auto"
        display="flex" 
        // width={80} height={80} 
        alignItems="center"
        justifyContent="center"
        borderRadius="50%"{...defaultProps}
      >
        <Avatar alt="Nida P" src="./Pictures/nidpic.JPG" className={classes.avatar}/>
      </Box>
      <Box mt={15} mb={15} width={2/4} mx="auto" alignItems="center" display="flex" justifyContent="center">
        <Typography variant="h5" align="center" color="textSecondary"> 
        Hello World. My name is Nida Pervez and I am a 
        software developer who also has a lot of other
         hobbies and interests.
        </Typography>
      </Box>
      <Card className={classes.card}>
        <CardMedia
              className={classes.cover}
              image="./Pictures/Balloon.png"
              title="Balloon"
            />
        <div className={classes.details}>
          <CardContent className={classes.content}>
            <Button className={classes.button}><Typography component="h3" variant="h5" color="textSecondary">
              Projects
            </Typography></Button>
            <Typography variant="subtitle1" color="textSecondary" >
            As a software developer, I’m always looking to create. Here, you can see projects I’ve worked on, why I started them, and what I learned from them.
            </Typography>
          </CardContent>
        </div>
      </Card>


      <Box mt={25} className={classes.root}>
        <Card className={classes.card}>
          <CardContent>
          <Typography component="h3" variant="h5" color="textSecondary"> Photos </Typography>
          <Typography variant="subtitle1" color="textSecondary"> I love capturing all aspects of life, whether that’s calm, silly, or beautiful moments, I like to remember them. I like doing this one way through photography</Typography>
          </CardContent>
        </Card>
        <GridList cellHeight={300} className={classes.gridList} cols={2}>
          {pictures.map(pic => (
            <GridListTile key={pic.id} cols={pic.cols || 1}>
              <img src={pic.img}  /> 
              {/* //alt={tile.title} */}
            </GridListTile> 
          ))}
        </GridList>
      </Box>
      <Button variant="contained" color="primary">
      Hello World
      </Button>
    </Container>
  );
};

export default App;
