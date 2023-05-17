import styled from '@emotion/styled';

export const FilterBox = styled.div`
  font-family: 'Poppins', sans-serif;
  color: #ffffff;
  letter-spacing: 0.5px;
  border: none;
  margin-bottom: 20px;

  .styled-input {
    display: block;
    height: 30px;
    width: 100%;
    background-color: rgba(255, 255, 255, 0.07);
    border-radius: 21px;
    padding: 0 10px;
    margin-top: 8px;
    font-size: 14px;
    font-weight: 300;
    color: white;

    ::placeholder {
      color: rgb(255 255 255 / 69%);
    }
    :focus {
      outline: none;
      box-shadow: inset 2px 2px 4px rgba(0, 0, 0, 0.4),
        inset -2px -2px 4px rgba(255, 255, 255, 0.5);
    }
  }
`;
