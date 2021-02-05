import styled from 'styled-components';

export const Container = styled.div`
    
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