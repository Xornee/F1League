import styled from 'styled-components';
import {Link} from "react-router-dom";

export const Container = styled.div`
  width: 100%;
  min-height: 80vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const MainTitle = styled.div`
  width: 100%;
  padding:0 20%;
  box-sizing: border-box;
  margin:30px 0px 15px 0px;
  font-size: 3.2rem;
`;
export const SubTitle = styled.div`
`;
export const Text = styled.p`
  width: 100%;
  padding:0 20%;
  box-sizing: border-box;
  font-size: 1.4rem;
  line-height: 1.9rem;
  margin: 0px;
  margin-top: 20px;
`;
export const Paragraphs = styled.h3`
`;
export const Image = styled.img`
  width: 60vw;
  margin: 50px auto;
  @media screen and (max-width: 900px){
    width: 80vw;
  }
`;
export const LinkA = styled(Link)`
`;
export const InfoWrapper = styled.div`
  width: 100%;
  height: 30px;
  display: flex;
  padding-left: 20%;
  box-sizing: border-box;
  margin-bottom: 50px;
`;
export const InfoA = styled.p`
  margin: 10px 5px;
`;
