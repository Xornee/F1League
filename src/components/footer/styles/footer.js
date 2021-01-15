import styled from 'styled-components/macro';

export const Container = styled.div`
  position: absolute;
  bottom: 0;
  height: 15vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: black;
`;
export const Button = styled.button`
  background-color: ${({ color }) => color};
  border: none;
  height: 60px;
  width: 200px;
  font-size: 1.4rem;
  text-align: center;
  padding-left: 60px;
  margin: 50px;
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

`;
export const Text = styled.div`

`;
export const Link = styled.a`

`;
export const Wrapper = styled.div`
  width: 100%;
  max-width: 1350px;
  display: flex;
  justify-content: ${({ direction }) => direction};
  align-items: center;
`;