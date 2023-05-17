import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';

const slideIn = keyframes`
  from {
    transform: translateX(100%);
  }
  to {
    transform: translateX(0);
  }
`;

// const slideOut = keyframes`
//   from {
//     transform: translateX(0);
//   }
//   to {
//     transform: translateX(100%);
//   }
// `;
export const Item = styled.li`
  width: 300px;
  background-color: #100d1039;
  border-radius: 10px;
  padding: 5px;

  display: flex;
  padding-left: 10px;
  padding-right: 10px;
  align-items: center;
  justify-content: space-between;

  margin-bottom: 10px;
  :nth-last-of-type() {
    margin-bottom: 0px;
  }
  animation: ${slideIn} 0.3s ease-in-out forwards;

  .delete-btn {
    display: flex;
    align-items: center;
    width: 30px;
    height: 30px;
    border: none;
    outline: none;
    background: #2f2f2f;
    color: #988989;
    font-size: 15px;
    border-radius: 40px;
    text-align: center;
    box-shadow: 0 6px 20px -5px rgba(0, 0, 0, 0.4);
    overflow: hidden;
    :hover {
      background-color: #080710;
      color: #ffffff;
    }
  }
`;
