import styled from '@emotion/styled';

export const Form = styled.form`
  .styled-input {
    display: block;
    height: 50px;
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
  .styled-label {
    display: block;
    margin-top: 30px;
    font-size: 16px;
    font-weight: 500;
  }
  .addBtn {
    width: 270px;
    height: 80px;
    border: none;
    outline: none;
    background: #2f2f2f;
    color: #fff;
    font-size: 22px;
    border-radius: 40px;
    text-align: center;
    box-shadow: 0 6px 20px -5px rgba(0, 0, 0, 0.4);
    overflow: hidden;
    :hover {
      background-color: #080710;
      color: #ffffff;
    }
  }
  .input-wrapper {
    width: 260px;
    margin-bottom: 45px;
  }
`;
