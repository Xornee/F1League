import styled from 'styled-components/macro';

export const Container = styled.div`
  height: 75vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  flex-wrap: wrap;
  background:
          linear-gradient(
                  rgba(0, 0, 0, 0.4),
                  rgba(0, 0, 0, 0.4)
          ),
            /* bottom, image */
          url('images/main-background.jpg');
  background-size: cover;
  background-position: center;
`;
export const TextWrapper = styled.div`
  height: 70%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  text-align: center;

`;
export const TextBig = styled.h1`
 font-size: 6rem;
  max-width: 1400px;
  margin:0 50px ;
`;
export const Text = styled.h2`

`;
export const Button = styled.button`
  background-color: unset;
  border: 2px solid white;
  padding: 25px 110px;
  font-size: 2rem;
  color: white;
  cursor: pointer;
  transition: all ease-out 0.2s;
  :hover{
    padding: 30px 115px;
    font-size: 2.1rem;
  }
`;