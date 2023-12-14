import styled from "styled-components";

export const Container = styled.div`
  padding: 100px 150px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  h2 {
    font-size: 1.875rem;
  }

  p {
    font-size: 1.2rem;
    margin-bottom: 15px;
  }
`;

export const ContainerForm = styled.div`
  padding: 35px;
  width: 370px;
  background-color: var(--white);
`;

export const Form = styled.form`
  width: 100%;
`;

export const FormGroup = styled.div`
  margin-bottom: 15px;
`;

export const Input = styled.input`
  width: 100%;
  padding: 8px;
  margin-top: 5px;
  font-size: 1rem;
  border: 1px solid #ddd;
`;

export const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: blue;
  color: white;
  border: none;
  cursor: pointer;
`;

export const ErrorMessage = styled.div`
  color: red;
  font-size: 0.875rem;
  margin-top: 5px;
`;

export const Label = styled.div`
  display: flex;
  margin-bottom: 10px;
  font-weight: 500;
`;
