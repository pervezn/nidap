import styled, { keyframes } from 'styled-components';
 
export const balloon = keyframes`
  0% {
    right: calc(50vw - 100px);
    top: calc(100vh - 40px);
    font-size: 200px;
  }
  100% {
    top: 10px; 
    color: yellow;
    font-size: 80px;
    right: 200px;
  }
`