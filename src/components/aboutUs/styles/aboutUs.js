import styled from 'styled-components';

export const Container = styled.div`
  min-height: 75vh;
`;
export const MainTitle = styled.h2`
  font-size: 4.2rem;
  font-weight: normal;
  margin: 0;
`;
export const TitleText = styled.p`
  font-size: 2.3rem;
  margin:0 25px;
  max-width: 800px;
`;
export const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
  align-items: center;
  height: 400px;
  margin-bottom: 50px;
  background:
          linear-gradient(
                  rgba(0, 0, 0, 0.5),
                  rgba(0, 0, 0, 0.5)
          ),
          url('/F1League/images/main-background.jpg');
  background-size: cover;
  background-position: center;
  color: white;
`;
export const MainText = styled.h3`
  margin: 0;
  font-size: 3rem;
  font-weight: normal;
`;
export const Text = styled.p`
  max-width: 800px;
  font-size: 1.7em;
`;
export const Image = styled.div`
  height: 400px;
  width: 500px;
  background-image: url('/F1League/images/main-background.jpg');
  background-size: cover;
`;
export const CardWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  max-width: 1300px;
  margin: 100px auto;
  padding: 50px;
  align-items: center;
  flex-direction: ${({ direction }) => direction};
  @media screen and (max-width: 1110px){
  justify-content: center;
  }
`;
export const TextWrapper = styled.div`
  margin-bottom: 25px;
  width: 50%;
  @media screen and (max-width: 1110px){
    width: 80%;
    text-align: center;
  }  @media screen and (max-width: 1110px){
    width: 80%;
    text-align: center;
  }
`;