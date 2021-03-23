import styled from 'styled-components/macro';
import {Link} from 'react-router-dom';

export const Container = styled.div`
  height: 75vh;
  display: flex;
`;
export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: orange;
  color: white;
  width: 45%;
`;
export const ImageWrapper = styled.div`
  width: 55%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background:
          linear-gradient(
                  rgba(0, 0, 0, 0.5),
                  rgba(0, 0, 0, 0.5)
          ),
          url(${({ image }) => image});
  background-size: cover;
  background-position: center;
`;
export const TextBig = styled.h1`
  font-size: 5rem;
  margin:-50px 50px 0px 50px;
  font-family: 'Orbitron', sans-serif;
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
  margin:0 50px ;
  @media screen and (max-width: 600px){
    font-size: 1.5rem ;
  }
  @media screen and (max-width: 420px){
    font-size: 1rem ;
  }
`;
export const Wave = styled.div`
  margin-right: -20%;
  width: 0;
  height: 0;
  border-top: 75vh solid transparent;
  border-bottom: 0px solid transparent;
  border-left: 20vw solid orange;
  z-index: 100;
`;
export const Button = styled.a`
  margin-left: 25%;
  color: white;
  text-decoration: none ;
  border: 2px solid white;
  padding: 30px 150px;
  font-size: 3rem;
  color: white;
  cursor: pointer;
  transition: all ease-out 0.2s;
  :hover{
    transform: scale(1.1);
    font-size: 3.1rem;
  }
  @media screen and (max-width: 600px){
    padding: 15px 60px;
  }
  @media screen and (max-width: 420px){
    padding: 5px 30px;
    font-size: 1.3rem;
  }
`;