import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import { Container, Typography, Box, Grid, GridListTile, GridList, Button } from '@material-ui/core';
import { borders } from '@material-ui/system';

const defaultProps = {
  // bgcolor: 'background.paper',
  // borderColor: 'text.Secondary',
  // l: 500,
  // // m:1,
  // border: 1,
  style: { width: '10rem', height: '10rem' },
  // alignItems: "center"
};

const App = ()  => {
  const [data, setData] = useState({});
  const pictures = Object.values(data);
  


  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch('./pictures/pictures.json');
      const json = await response.json();
      setData(json);
    };
    fetchProducts();
  }, []);

  return (
//className={classes.gridList}
    <Container>
      <Typography variant="h3" align="center" color="textSecondary">
        Nida Pervez
      </Typography>
      {/* component="./Pictures/nidpic.JPG" */}
      {/* <Box alignItems="center" borderRadius="50%"{...defaultProps}/> */}
      <Container  >
      <Box 
        mt={5}
        mb={5}
        mx="auto"
        display="flex" 
        width={80} height={80} 
        bgcolor="lightgreen"
        alignItems="center"
        justifyContent="center"
        borderRadius="50%"{...defaultProps}
        // l="50%"
        // component="./Pictures/nidpic.JPG"
        // style={{justifyContent: 'center'}}
      >Hello</Box></Container>
      <GridList cellHeight={300}  cols={3}>
        {pictures.map(pic => (
          <GridListTile key={pic.id} cols={pic.cols || 1}>
            <img src={pic.img}  /> 
            {/* //alt={tile.title} */}
          </GridListTile>
        ))}
      </GridList>

      <Button variant="contained" color="primary">
      Hello World
      </Button>
    </Container>
  );
};

export default App;
