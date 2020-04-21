import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import { Paper, Image, Avatar, Typography, Box, Grid, GridListTile, GridList, Button, Card, CardMedia } from '@material-ui/core';

const years = {Sr: "2019", Jr: "2018"}

const Text1 = ({}) => {
  return(
    <Typography>This is the text for 2019 </Typography>
  )
}

const Text2 = ({}) => {
    return (
        <Typography> This is the text for 2018</Typography>
    )
}

const YearSelector = ({state}) => {
    return(
    <React.Fragment>
      { Object.values(years) //Returns ["2018", "2019"]
        .map(value =>  
            <Button key={value} onClick={ () => 
            {console.log("value is: " + value)
            state.setYear(value) }}>
                { value }
            </Button>)
      }
    </React.Fragment>
  )}

const Test = () => {
    const [year, setYear] = useState("2019")
    {console.log("year is: " + year)}

    return (
        <div>
            <YearSelector state={{year, setYear}}/>
            {/* {console.log("year in return is: " + year)} */}
            { year === "2019" ? <Text1 /> : <Text2 /> }
        </div>
    );
};

export default Test;