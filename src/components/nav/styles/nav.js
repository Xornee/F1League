import styled from 'styled-components';
import {Link} from 'react-router-dom';

export const Container = styled.div`
  height: 10vh;
  background-color: black;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 100;
`;
export const Logo = styled.img`
  height: 12vh;
  position: absolute;
  top: -1%;
  left: calc(50% - 6vh);
`;
export const LinkA = styled(Link)`
  color: white;
  text-decoration: none;
  margin:0 35px;
  font-size: 1.4rem;
  cursor: pointer;
  transition: color ease-in-out 0.3s;
  :hover{
    color: #E46800;
  }
  @media screen and (max-width: 1150px){
    font-size: 2rem;
  }
`;
export const LinkWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-right: 50px;
  @media screen and (max-width: 1150px){
    flex-direction: column;
    margin: 0;
    height: 40vh;
    justify-content: space-around;
  }
`;
export const NavWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 1500px;
  width: 100%;
  @media screen and (max-width: 1150px){
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 90vh;
    position: absolute;
    top: 10vh;
    left: ${({click}) => (click ? 0 : '-100%')};
    opacity: 1;
    transition: all 0.5s ease;
    background: black;
  }
`;
export const Menu = styled.div`

`;
export const SmallNavButton = styled.div`
  right: 5%;
  position: absolute;
  color: white;
  margin-top: 5px;
  @media screen and (min-width: 1150px){
    display: none;
  }
`;