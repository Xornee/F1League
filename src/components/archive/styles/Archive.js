import styled from 'styled-components/macro';

export const Container = styled.div`
  width: 100%;
  height: 80vh;
  display: flex;
  align-items: center;
  margin: auto;
  flex-direction: column;
`;
export const Text = styled.p`
  font-size: 2rem;
  max-width: 600px;
  text-align: center;
  margin: 0;
`;
export const Title = styled.h2`
  font-size: 2.6rem; 
  margin-top: 75px;
  max-width: 600px;
  text-align: center;
`;
export const LinkWrapper = styled.a`
  margin: 50px;
  margin-top: 0;
  cursor: pointer;
  text-decoration: none;
  color: black;
  transition: 0.2s ease all;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
  :hover{
    transform: scale(1.05);
  }
`;
export const Wrapper = styled.div`
  display: flex;
  margin: 100px;
`;
export const Image = styled.div`
  margin-top: 50px;
  height: 300px;
  width: 400px;
  background-image: url('/F1League/images/main-background.jpg');
  background-size: cover;
  background-position: center;
`;