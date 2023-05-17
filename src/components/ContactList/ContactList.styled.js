import styled from '@emotion/styled';

export const ListBox = styled.ul``;

export const Item = styled.li`
  width: 300px;
  background-color: #b3b3f739;
  border-radius: 10px;
  padding: 5px;

  display: flex;
  gap: 50px;
  align-items: center;
  justify-content: center;

  margin-bottom: 10px;
  :nth-last-child() {
    margin-bottom: 0px;
  }
`;
