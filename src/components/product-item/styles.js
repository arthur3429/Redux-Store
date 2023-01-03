import styled from "styled-components";



export const ProductContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 280px;
  height: 440px;
  background-color: #fff;
  border-radius: 10px;
  border: 1px solid rgba(0, 0, 0, 0.03);
  position: relative;

  a {
    text-decoration: none;
  }


  button {
    visibility: hidden;
    opacity: 0;
    transition: all 0.5s ease;
  }

  &:hover { 

    cursor: pointer;

    button {
      visibility: visible;
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

export const ProductInfo = styled.div`
  display: flex;
  height: 80px;
  flex-direction: column;



  p:nth-child(1) {     
    font-family: 'Poppins';
    margin: 10px 10px 0 10px;
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    /* identical to box height */
    color: #444444;
  }

  p:nth-child(2) {   
    font-family: 'Poppins';
    margin-left: 10px;
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    color: #878787;
  }
`;

export const ProductImage = styled.div`
  background-image: ${(props) => `url('${props.imageUrl}')`};
  height: 360px;
  width: 279px;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  border-radius: 10px 10px 0 0;
  display: flex;
  align-items: flex-end;
  transition: all 0.3s ease;
  background-color: transparent;
  background-blend-mode: color;


  @media (max-width: 768px) {
    width: 100%;
  }
`;
