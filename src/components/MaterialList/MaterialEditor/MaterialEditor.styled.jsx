import styled from '@emotion/styled';
import { Form, Field, ErrorMessage } from 'formik';

export const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 300px;
  width: 100%;
  padding: 20px;
`;

export const StyledInput = styled(Field)`
  width: 400px;
  height: 30px;
  padding: 0 10px;
  font-size: 18px;
  border-radius: 4px;
`;

export const Label = styled.label`
  position: relative;
  display: flex;
  justify-content: space-between;
  font-size: 20px;
  margin-bottom: 20px;
  &:last-of-type {
    margin-bottom: 30px;
  }
`;

export const ErrorMsg = styled(ErrorMessage)`
  position: absolute;
  top: 24px;
  left: 120px;
  font-size: 10px;
  font-weight: 500;
  color: red;
`;
export const ControlBar = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const CancelButton = styled.button`
  align-self: center;
  width: 200px;
  height: 30px;
  border-radius: 4px;
  border-color: transparent;
  &:active {
    box-shadow: 0px 2px 2px rgba(12, 12, 12, 0.85);
  }
  &:disabled {
    box-shadow: 0 0 0 0;
    background-color: transparent;
    color: transparent;
  }
`;

export const SubmitButton = styled.button`
  align-self: center;
  width: 200px;
  height: 30px;
  border-radius: 4px;
  border-color: transparent;
  &:active {
    box-shadow: 0px 2px 2px rgba(12, 12, 12, 0.85);
  }
  &:disabled {
    box-shadow: 0 0 0 0;
    background-color: transparent;
    color: transparent;
  }
`;
