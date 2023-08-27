import styled from '@emotion/styled';

export const ListItem = styled.li`
  display: flex;
  justify-content: space-between;
  border: black 1px solid;
  padding: 20px;
  background-color: lightpink;
  &:nth-of-type(2n) {
    background-color: lightcyan;
  }
`;

export const ButtonDelete = styled.button`
  width: 80px;
  height: 25px;
  margin-left: 10px;
  align-self: center;
  border-radius: 4px;
  border-color: transparent;
  color: black;
  background-color: grey;
  &:hover {
    color: white;
    background-color: red;
  }
  &:active {
    box-shadow: 0px 2px 2px rgba(12, 12, 12, 0.85);
    background-color: purple;
  }
`;

export const ButtonEdit = styled.button`
  width: 80px;
  height: 25px;
  align-self: center;
  border-radius: 4px;
  border-color: transparent;
  color: black;
  background-color: antiquewhite;
  &:hover {
    color: white;
    background-color: lightgreen;
  }
  &:active {
    box-shadow: 0px 2px 2px rgba(12, 12, 12, 0.85);
    background-color: aquamarine;
  }
`;

export const ControlPanel = styled.div`
  display: flex;
`;
