import styled from 'styled-components';
import {Link} from "react-router-dom";

export const Container = styled.div`
  min-height: 75vh;
  margin: 0 auto;
  width: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
// Main Section
export const MainHeaderText = styled.h2`
  font-size: 3rem;
  margin: 0;
`;
export const MainText = styled.h2`
  font-size: 1.8rem;
  padding-top: 20px;
  margin: 0;
`;
export const MainCardWrapper = styled.div`
  padding: 35px;
  width: 80%;
  min-width: 600px;
  margin: 20px 0;
  border-bottom: solid 1px gray;
  margin-bottom: 50px;
  transition: 0.2s all ease-in-out;
  :hover{
    transform: scale(1.02);
  }
`;
export const MainTextWrapper = styled.div`
  width: 40%;
  padding: 20px;
  padding-top: 0;
  @media screen and (max-width: 650px){
    width: 70%;
  }
`;
export const MainCardLink = styled(Link)`
  width: 100%;
  display: flex;
  text-decoration: none;
  color: black;
  @media screen and (max-width: 650px){
    flex-direction: column-reverse;
    justify-content: center;
    align-items: center;
    text-align: center;
  }
`;
export const MainImageCard = styled.div`
  height: 550px;
  width: 60%;
  background-image: url('/F1League/images/main-background.jpg');
  background-position: center;
  background-size: cover;
`;
// Card Section
export const CardWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 80%;
  margin-bottom: 50px;
`;

export const ImageCard = styled.div`
  height: 370px;
  width: 60%;
  background-image: url('/F1League/images/main-background.jpg');
  background-position: center;
  background-size: cover;
`;
export const TextCard = styled.div`
`;
export const SectionText = styled.h1`
  font-size: 2.2rem;
  margin: 50px 0 70px 0;
`;
export const CardLink = styled(Link)`
  height: 400px;
  width: 40%;
  margin: 20px 0;
  border-bottom: solid 2px gray;
  color: black;
  text-decoration: none;
  display: flex;
  transition: 0.2s all ease-in-out;
  :hover{
    transform: scale(1.02);
  }
`;
export const TextWrapper = styled.div`
  margin-left: 20px;
  font-size: 1.8rem;
  width: 40%;
  font-weight: bold;
`;