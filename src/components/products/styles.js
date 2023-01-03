import styled from "styled-components";

export const Hold = styled.div`
  background: #F5F6F8;
`

export const Container = styled.div`
  margin: 0 auto;
  max-width: 1290px;
  padding: 30px 40px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 30px;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
  }

  @media (max-width: 425px) {
    gap: 15px;
    padding: 20px 20px;
  }
`;

export const Title = styled.h1`
  max-width: 1290px;
  padding: 60px 0 30px 0;
  width: 100%;
  margin: 0 auto;
  font-size: 30px;
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 500;
  color: #272727;
  text-align: center;
  
  @media (max-width: 425px) {
    padding: 40px 0 20px 0;
    font-size: 8vw
  }
`
