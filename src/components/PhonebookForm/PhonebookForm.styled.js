import { Form, Field } from 'formik';
import styled from '@emotion/styled';

export const Input = styled(Field)`
  font-size: 22px;
  margin-top: 5px;
`;

export const FormUs = styled(Form)`
  margin: 10px auto;
  padding: 20px;
  display: flex;
  flex-direction: column;
  width: 500px;
  border-radius: 5px;
  
`;

export const LabelIn = styled.label`
  display: flex;
  flex-direction: column;
  font-size: 22px;
  margin-bottom: 20px;
`;

export const Button = styled.button`
  width: 200px;
  padding: 10px;
  margin: 0 auto;
  font-weight: 700;
  text-transform: uppercase;
  cursor: pointer;

  border: none;
  color: rgb(45, 45, 45);
  border-radius: 5px;
 
  :hover {
    background-color: #fdbb2d;
  }
  :active {
    transform: translateY(1px);
  }
`;
