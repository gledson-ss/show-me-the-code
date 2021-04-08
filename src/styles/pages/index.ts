import styled from "styled-components";

export const Container = styled.main`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.gray};
`;

export const InputContainer = styled.section`
  height: 60vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
