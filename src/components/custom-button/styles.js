import styled from "styled-components";

export const CustomButtonContainer = styled.button`
  padding: 7px 20px;
  width: 100%;
  background: rgba(255, 255, 255, 0.9);
  border: 1px solid rgba(0, 0, 0, 0.03);
  backdrop-filter: blur(1px);
  border-radius: 5px;
  transition: all 0.5s ease;
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  color: #262626;
  transform: translateY(15px);

  &:hover {
    cursor: pointer;
    
  }
`;

export const IconContainer = styled.div`
  margin-right: 8px;
  height: 100%;
  display: flex;
  align-items: center;
`;
