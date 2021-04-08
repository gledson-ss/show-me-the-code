import styled from "styled-components";

export const Container = styled.div`
  height: 12vh;
  display: flex;
  margin: 0 9vw;
  justify-content: space-between;
`;

export const DescriptionBlock = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Description = styled.div`
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

export const TextLink = styled.p`
  font-family: "Noto Sans SC", sans-serif;
  padding-left: 7px;
  color: ${({ theme }) => theme.colors.blue};
  font-size: 22px;
  @media (max-width: 1400px) {
    font-size: 20px;
  }
`;

export const Link = styled.a`
  text-decoration: none;
`;
