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
`;
export const ButtonWrapper = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ color }) => color};
  border: none;
  height: 60px;
  width: 200px;
  font-size: 1.4rem;
  text-align: center;
  color: white;
  position: relative;
  padding-left: 60px;
  }
  @media screen and (max-width: 1150px){
    margin:0 10px;
  }
  @media screen and (max-width: 1150px){
    display: none;
  }

`;
export const ButtonIcon = styled.img`
  height: ${({ size }) => size};
  width: ${({ size }) => size};
  position: absolute;
  left: 0;
  padding: calc((60px - ${({ size }) => size})/2);
  background-color: ${({ bgColor }) => bgColor};
`;
export const Button = styled.div`
`;
export const Text = styled.div`
    position: absolute;
    bottom: 1%;
    color: white;
`;
export const Link = styled.a`
  color: white;
  transition: ease-in-out 0.3s all;
  :hover{
    font-size: 1.1rem;
  }

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