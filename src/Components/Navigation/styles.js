import styled from "styled-components";

export const Img = styled.img`
  width: 257px;
  height: 103px;
  @media (max-width: 750px) {
    width: 103px;
    height: 42px;
  }
`;

export const Div = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;
