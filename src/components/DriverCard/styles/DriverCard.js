import styled from 'styled-components';
import {Link} from "react-router-dom";

export const Container = styled.div`
  width: 100%;
  min-height: 80vh;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
`;
export const LinkWrapper = styled(Link)`
  width: 400px;
  height: 600px;
  margin: 40px;
  border-radius: 10px;
  box-shadow: 0px 0px 11px 3px rgba(0,0,0,0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  color: black;
  text-decoration: none;
`;
export const InfoWrapper = styled.div`
  height: 90%;
  width: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const Nickname = styled.h3`
  font-size: 2rem;
`;
export const Description = styled.p`
  text-align: center;
  font-size: 1.2rem;
`;
export const Image = styled.img`
  height: 250px;
`;
