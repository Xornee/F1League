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
  margin-top: 30px;
  font-size: 2rem;
`;
export const SubTitle = styled.div`
`;
export const Text = styled.p`
  width: 100%;
  padding:0 20%;
  box-sizing: border-box;
  font-size: 1.4rem;
  line-height: 1.9rem;
  margin-bottom: 100px;
`;
export const Paragraphs = styled.h3`
`;
export const Image = styled.img`
`;
export const LinkA = styled(Link)`
`;
export const InfoWrapper = styled.div`
  width: 100%;
  height: 30px;
  display: flex;
  padding-left: 20%;
  box-sizing: border-box;
`;
export const InfoA = styled.p`
    margin: 0 10px;
`;
