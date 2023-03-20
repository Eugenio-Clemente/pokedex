import styled from "styled-components";

export const Div = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 15px;

  @media (max-width: 750px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 2px;
  }
`;