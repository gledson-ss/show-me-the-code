import styled from "styled-components";

export const Container = styled.div``;

export const ContentData = styled.div`
  display: flex;
`;

export const Text = styled.p`
  font-family: "Noto Sans SC", sans-serif;
  color: ${({ theme }) => theme.colors.black};
  font-size: 22px;

  @media (max-width: 1400px) {
    font-size: 20px;
  }
`;
