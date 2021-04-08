import styled from "styled-components";

export const Container = styled.div`
  height: 25vh;
  display: flex;
  flex-direction: column;
`;

export const DataContainer = styled.div`
  height: 30%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 0 9vw;
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
  @media (max-width: 1400px) {
    font-size: 50px;
  }

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
  @media (max-width: 1400px) {
    font-size: 52px;
  }
  padding-left: 16px;
`;
