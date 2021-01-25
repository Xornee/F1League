import styled from 'styled-components/macro';

export const Container = styled.div`
  height: 15vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: black;
  position: relative;
  z-index: -10;
`;
export const Button = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ color }) => color};
  border: none;
  height: 60px;
  width: 200px;
  font-size: 1.4rem;
  text-align: center;
  padding-left: 60px;
  margin:0px 50px;
  color: white;
  position: relative;
  ::before{
    content: '';
    background-color: ${({ bgColor }) => bgColor};
    height: 60px;
    width: 60px;
    position: absolute;
    left: 0;
    top: 0;
    
  }
  @media screen and (max-width: 1150px){
    margin:0px 10px;
  }
  @media screen and (max-width: 1150px){
    display: none;
  }

`;
export const Text = styled.div`
    position: absolute;
    bottom: 1%;
    color: white;
;

`;
export const Link = styled.a`

`;
export const Wrapper = styled.div`
  width: 100%;
  max-width: 1350px;
  display: flex;
  justify-content: ${({ direction }) => direction};
  align-items: center;
  @media screen and (max-width: 1150px){
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
  }
`;