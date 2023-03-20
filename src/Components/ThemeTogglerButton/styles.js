import styled from "styled-components";

const Button = styled.button`
  width: 140px;
  height: 60px;
  background-color: #707070;
  border-radius: 50px;
  cursor: pointer;
  border: 1px solid #b3aca4;
  
   @media (max-width: 750px) {
    width: 80px;
    height: 42px;
    margin: 5px;
  }

`;

export {Button}