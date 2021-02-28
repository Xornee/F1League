import styled from 'styled-components';

export const Container = styled.div`
  min-height: 75vh;
`;
export const MainText = styled.h3`
  margin: 0;
  font-size: 3rem;
  font-weight: normal;
`;
export const Text = styled.p`
  max-width: 800px;
  font-size: 1.7em;
`;
export const Image = styled.div`
  height: 500px;
  width: 600px;
  background-image: url(${({ image }) => image});
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
`;
export const CardWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  max-width: 1300px;
  margin: 100px auto;
  padding: 50px;
  align-items: center;
  flex-direction: ${({ direction }) => direction};
  @media screen and (max-width: 1110px){
  justify-content: center;
  }
`;
export const TextWrapper = styled.div`
  margin-bottom: 25px;
  width: 50%;
  @media screen and (max-width: 1110px){
    width: 80%;
    text-align: center;
  }  @media screen and (max-width: 1110px){
    width: 80%;
    text-align: center;
  }
`;