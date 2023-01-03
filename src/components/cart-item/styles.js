import styled from "styled-components";

export const CartItemContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 15px;
  width: 100%;
  border-radius: 10px;
  border: 1px solid rgba(0,0,0,0.1);
  padding: 10px;

  :last-child {
    margin-bottom: 40px;
  }
  p, svg {
    color: #222222;
  }



  
  @media (max-width: 425px) {
    margin-bottom: 6px;
    width: calc(100% - 5px);
  }
`;

export const CartItemImage = styled.div`
  background-image: ${(props) => `url('${props.imageUrl}')`};
  height: 140px;
  width: 100px;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  display: block;
  border-radius: 10px;
`;

export const CartItemInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 20px;
  gap: 15px;
  flex: 1;
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  color: #2C2C2C;

  p:nth-child(1) {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    color: #2C2C2C;
  }

`;

export const CartItemQuantity = styled.div`
  display: flex;
  align-items: center;
  

  p {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 30px;
    width: 30px;
    background-color: #fff;
    border-top: 1px solid rgba(0,0,0,0.03);
    border-bottom: 1px solid rgba(0,0,0,0.03);

  }

  .svg-box {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 30px;
    width: 30px;
    background-color: #fff;
    border: 1px solid rgba(0,0,0,0.03);
    border-radius: 0 25px 25px 0;
  }

  .svg-box:nth-child(1) {
    border-radius: 25px 0 0 25px;
  }



  svg:hover {
    cursor: pointer;
  }
`;

export const RemoveButton = styled.div`
  

  &:hover {
    cursor: pointer;
  }
`;
