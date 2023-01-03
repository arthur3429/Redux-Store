import styled from "styled-components";

export const CartContainer = styled.div`
  position: fixed;
  height: 100vh;
  width: 100vw;
  right: 0;
  bottom: 0;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: flex-end;
  visibility: ${(props) => (props.isVisible ? "visible" : "hidden")};
  opacity: ${(props) => (props.isVisible ? "1" : "0")};
  transition: all 0.3s ease;

  p {
    color: #222222;
  }
`;

export const CartEscapeArea = styled.div`
  width: 100%;

  @media (max-width: 768px) {
    width: 0%;
  }
`;

export const CartContent = styled.div`
  height: 100%;
  min-width: 500px;
  z-index: 200;
  background-color: white;
  padding: 20px;
  overflow-y: scroll;
  position: relative;

  .price-checkout {
    position: absolute;
    background: #fff;
    border-top: 1px solid rgba(255, 255, 255, 0.03);
    bottom: 20px;
    width: calc(100% - 40px);
  }

  .map {
    height: calc(100vh - 134px - 52px);
    overflow: auto;
    
  }

  .map::-webkit-scrollbar {
    width: 5px;
    background-color: #f3f3f3;

  }

  .map::-webkit-scrollbar-thumb {
    background-color: #ccc;
    border-radius: 25px;
  }

  @media (max-width: 425px) {
.price-checkout {
  width: calc(100% - 30px);
}
    
  }
  
  button {
    width: 100%;
    padding: 10px 0;
    background: #2C2C2C;
    border: 1px solid rgba(255, 255, 255, 0.03);
    backdrop-filter: blur(1px);
    border-radius: 5px;
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 800;
    font-size: 18px;
    text-transform: uppercase;
    color: #FFFFFF;
    cursor: pointer;
    transition: all 0.4s;
  }

  button:hover {
    background: #111;
  }

  @media (max-width: 768px) {
    width: 100%;
  }

  @media (max-width: 425px) {
    padding: 10px;
    min-width: 0px;
    width: 100%;
  }
`;
export const CartTitle = styled.p`
  font-size: 24px;
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 700;
  color: #272727;
  margin-bottom: 20px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;

  svg {
    cursor: pointer;

    fill: #272727;
    transform: all 0.4s;
  }

  svg:hover {
    fill: #111;
  }

  
  @media (max-width: 425px) {
    margin-bottom: 10px;
  }

`;
export const CartTotal = styled.div`
  font-weight: 700;
  font-size: 1.125rem;
  margin-bottom: 15px;
  border-radius: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  border: 1px solid rgba(0,0,0,0.1);

  p:nth-child(1) {
    font-weight: 400;
  }

`;
