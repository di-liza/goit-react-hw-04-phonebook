import styled from '@emotion/styled';

export const Container = styled.div`
  margin-top: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 100px;

  .contactsWrapper {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    justify-content: center;

    width: 200px;
    font-size: 20px;
    margin-left: 20px;
    margin-top: 20px;

    overflow-y: scroll;

    height: 520px;
    width: 400px;
    background-color: rgba(255, 255, 255, 0.13);

    border-radius: 10px;
    backdrop-filter: blur(10px);
    border: 2px solid rgba(255, 255, 255, 0.1);
    box-shadow: 0 0 40px rgba(8, 7, 16, 0.6);
    padding: 50px 35px;

    font-family: 'Poppins', sans-serif;
    color: #ffffff;
    letter-spacing: 0.5px;
    border: none;
  }

  .form-wrapper {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    justify-content: center;

    width: 200px;
    font-size: 20px;
    margin-left: 20px;
    margin-top: 20px;

    height: 520px;
    width: 400px;
    background-color: rgba(255, 255, 255, 0.13);

    border-radius: 10px;
    backdrop-filter: blur(10px);
    border: 2px solid rgba(255, 255, 255, 0.1);
    box-shadow: 0 0 40px rgba(8, 7, 16, 0.6);
    padding: 50px 35px;

    font-family: 'Poppins', sans-serif;
    color: #ffffff;
    letter-spacing: 0.5px;
    outline: none;
    border: none;
  }

  .title {
    font-size: 32px;
    font-weight: 500;
    line-height: 42px;
    text-align: center;
  }
`;
