import styled from 'styled-components/macro';

export const Container = styled.div`
  height: 10vh;
  background-color: black;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const Logo = styled.img`
  height: 12vh;
  margin: 0 50px;
`;
export const Link = styled.a`
  margin:0 35px;
  font-size: 1.4rem;
  cursor: pointer;
  transition: color ease-in-out 0.3s;
  :hover{
    color: #E46800;
  }
`;
export const LinkWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: ${({ direction }) => direction};
  align-items: center;
  justify-content: center;
`;
export const NavWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 1500px;
  width: 100%;
`;
export const Menu = styled.div`

`;