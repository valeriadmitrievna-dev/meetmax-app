import styled from "styled-components";
import Input from "components/input";

export const Container = styled.div`
  max-width: 520px;
  width: 95%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-bottom: 40px;
`;

export const Title = styled.h1`
  text-align: center;
  text-transform: capitalize;
  margin-bottom: 16px;
  padding: 0 20px;
`;

export const Text = styled.p`
  margin-bottom: 32px;
  padding: 0 20px;
  text-align: center;
`;

export const Form = styled.form`
  width: 100%;
  border-radius: ${({ theme }) => theme.borderRadius}px;
  padding: 20px;
  background-color: ${({ theme }) => theme.colors.background[200]};
`;

export const FormGroup = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
  align-items: stretch;
  grid-auto-rows: 1fr;
  gap: 10px;
`;

export const FormInput = styled(Input)<{ span?: number }>`
  grid-column: span ${({ span }) => span || 1};
`;
