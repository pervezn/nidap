import React, { useEffect, useState } from 'react';
import paper from "paper";
import view from "paper";
import Raster from "paper";
import styled from 'styled-components';

import { balloon } from './KeyFrames';

export const Box = styled.div`
  display: inline-block;
  background-image: "../Pictures/balloon1.png";
  background: pink;
  width: 200px;
  height: 200px;
  position: relative;
  animation: ${balloon} 12s linear 0s infinite forwards;
`
 
export default Box;





// import "https://cdnjs.cloudflare.com/ajax/libs/paper.js/0.9.24/paper-core.min.js"; 

// const Balloon = ({}) => {
//     paper.install(window)
//     {const canvas = document.getElementById("myCanvas") //maybe it doesn't know where to look?
//     console.log("canvas is: " + canvas)}
 
//     paper.setup('myCanvas')

//     const screenW = view.size.width;
//     const screenH = view.size.height;  

//     const random = function(min, max) {
//       return Math.floor((Math.random() * (max + 1 - min) + min));
//     };
//     const randomDecimal = function(min, max) {
//       return (Math.random() * (max - min) + min);
//     };
    
//     const generateBalloon = function(x, y, imageURL, speed, scaleFactor) {
//       const raster = new Raster({
//           source: imageURL,
//           position: [x, y]
//       });
//       raster.scale(scaleFactor);
//       return {
//           item: raster,
//           speed: speed
//       };
//     };
    
//     const generateBalloons = (num) => {
//       const balloons = [];
//       for (let i = 0; i < num; ++i) {
//           //make a left moving fish and add it to the array:
//           let x = random(0, screenW);
//           let y = random(0, screenH);
//           let url = "https://images.vexels.com/media/users/3/151048/isolated/preview/a9ef9a87f927b3cadc76a64977210663-hot-air-balloon-illustration-hot-air-balloon-by-vexels.png";
//           let balloon = generateBalloon(x, y, url, -1 * randomDecimal(.2, 2), randomDecimal(0.3, 0.8));
//           balloons.push(balloon);
//       }
//       return balloons;
//     };
    
//     const balloons = generateBalloons(3);
    
//     var moveBalloon = function (balloon) {
//       balloon.item.position.y += Math.sin(balloon.speed) * 5;
//       if (balloon.item.position.y < -100 ) {
//           balloon.item.position.y = screenH + 100;
//       }
//     };
  
//     view.onFrame = (event) => { for (const balloon of balloons) {moveBalloon(balloon)}}
  
//     return (
//         <React.Fragment></React.Fragment>
//     )
//   }

// export default Balloon;