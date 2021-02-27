import styled from 'styled-components/macro';
import {Link} from 'react-router-dom';

export const Container = styled.div`
  height: 75vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  flex-wrap: wrap;
  background:
          linear-gradient(
                  rgba(0, 0, 0, 0.5),
                  rgba(0, 0, 0, 0.5)
          ),
          url('/F1League/images/main.png');
  background-size: cover;
  background-position: center;
`;
export const TextWrapper = styled.div`
  height: 70%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  text-align: center;

`;
export const TextBig = styled.h1`
 font-size: 6rem;
  max-width: 1400px;
  margin:0 50px ;
  font-family: 'Orbitron', sans-serif;
  color: white;
  @media screen and (max-width: 1050px){
    font-size: 5rem;
  }
  @media screen and (max-width: 600px){
    font-size: 3.2rem;
  }
  @media screen and (max-width: 420px){
    font-size: 2rem ;
  }
`;
export const Text = styled.h2`
  font-size: 2.2rem;
  font-family: 'Orbitron', sans-serif;
  color: white;
  margin:0 50px ;
  @media screen and (max-width: 600px){
    font-size: 1.5rem ;
  }
  @media screen and (max-width: 420px){
    font-size: 1rem ;
  }
`;
export const Button = styled.a`
  color: white;
  text-decoration: none ;
  border: 2px solid white;
  padding: 25px 110px;
  font-size: 2rem;
  color: white;
  cursor: pointer;
  transition: all ease-out 0.2s;
  :hover{
    transform: scale(1.1);
    font-size: 2.1rem;
  }
  @media screen and (max-width: 600px){
    padding: 15px 60px;
  }
  @media screen and (max-width: 420px){
    padding: 5px 30px;
    font-size: 1.3rem;
  }
`;