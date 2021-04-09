import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const MessageTitleContainer = styled.div`
  width: 100%;
  height: 30%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.h2`
  font-family: "Noto Sans SC", sans-serif;
  color: ${({ theme }) => theme.colors.black};
`;

export const PriceContainer = styled.div`
  width: 100%;
  height: 60%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Text = styled.p`
  font-family: "Noto Sans SC", sans-serif;
  color: ${({ theme }) => theme.colors.black};
  font-size: 24px;
`;

export const ButtonContainer = styled.div`
  width: 100%;
  height: 30%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Button = styled.button`
  width: 100px;
  height: 40px;
  border: none;
  :focus {
    outline: none;
  }
  background-color: ${({ theme }) => theme.colors.blue};
  color: ${({ theme }) => theme.colors.white};
  :hover {
    cursor: pointer;
  }
`;

export const Link = styled.a``;
