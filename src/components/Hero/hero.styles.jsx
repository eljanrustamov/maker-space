import styled from "styled-components";

export const HeroComponent = styled.div`
  width: 100%;
  height: 60vh;
  margin: 3rem 0;
`;

export const TextContainer = styled.div`
  h1 {
    margin-bottom: 1rem;
  }

  p {
    font-size: 18px;
  }
  span {
    color: #10c9c3;
  }
`;

export const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    max-width: 500px;
    height: 400px;
  }
`;
