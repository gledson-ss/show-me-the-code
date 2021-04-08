import styled from "styled-components";

export const Container = styled.div`
  height: 25vh;
  display: flex;
  flex-direction: column;
  border: 1px solid red;
`;

export const DataContainer = styled.div`
  height: 30%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 0 10vw;
`;

export const TitleContainer = styled.div`
  height: 70%;
  display: flex;
  justify-content: center;
  align-items: flex-end;
`;

export const Title = styled.p`
  color: ${({ theme }) => theme.colors.black};
  font-size: 60px;

  @font-face {
    font-family: Caveat;
    src: url("/fonts/Caveat-Medium.ttf");
  }
  font-family: Caveat;
`;

export const LogoTitle = styled.p`
  color: ${({ theme }) => theme.colors.blue};
  @font-face {
    font-family: Caveat;
    src: url("/fonts/Caveat-Medium.ttf");
  }
  font-family: Caveat;
  font-size: 60px;
  padding-left: 16px;
`;
