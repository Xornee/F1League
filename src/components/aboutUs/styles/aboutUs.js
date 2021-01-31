import styled from 'styled-components';

export const Container = styled.div`
  min-height: 75vh;
`;
export const MainTitle = styled.h2`
  font-size: 4rem;
  margin: 0;
`;
export const TitleText = styled.p`
  font-size: 2.5rem;
  margin: 0;
`;
export const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 800px;
  text-align: center;
  justify-content: center;
  align-items: center;
  margin: 100px auto;
`;
export const MainText = styled.h3`
    margin: 0;
  font-size: 2.6rem;
`;
export const Text = styled.p`
    max-width: 800px;
  font-size: 1.6em;
`;
export const Image = styled.div`
  height: 400px;
  width: 500px;
  background-color: black;
`;
export const CardWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  max-width: 80vw;
  margin: 100px auto;
  align-items: center;
  flex-direction: ${({ direction }) => direction};
`;
export const TextWrapper = styled.div`
    margin-bottom: 25px;
`;