import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
  width: 30vw;
  height: 55vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.darkGray};
  border-radius: 32px;
  box-shadow: 9px 7px 5px rgba(50, 50, 50, 0.77);

  @media (max-width: 1400px) {
    width: 35vw;
  }
`;

export const FormBox = styled.div`
  width: 90%;
  height: 90%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding-left: 3vw;
  padding-right: 3vw;
`;

export const Form = styled.form`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
export const InputContainer = styled.div`
  width: 100%;
  display: flex;
`;

export const BoxContainer = styled.div`
  width: 50%;
  display: flex;
`;

export const Input = styled.input`
  width: 100%;
  height: 40px;
  outline: none;
  border: 2px solid ${({ theme }) => theme.colors.blue};
  border-radius: 7px;
`;

export const NameInputContainer = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const NameInput = styled.p`
  font-family: "Noto Sans SC", sans-serif;
  color: ${({ theme }) => theme.colors.black};
  font-size: 18px;
  @media (max-width: 1400px) {
    font-size: 16px;
  }
`;

export const CheckBoxContainer = styled.div`
  width: 50%;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const OptionContainer = styled.div`
  display: flex;
`;

export const OptionName = styled.p`
  font-family: "Noto Sans SC", sans-serif;
  color: ${({ theme }) => theme.colors.black};
`;

export const InputCheckBox = styled.input`
  height: 20px;
`;

export const TitleInputContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 3vh;
`;

export const TitleForm = styled.p`
  font-family: "Noto Sans SC", sans-serif;
  color: ${({ theme }) => theme.colors.black};
  font-size: 24px;

  @media (max-width: 1400px) {
    font-size: 20px;
  }
`;

export const SubmitContainer = styled.div`
  width: 100%;
  height: 4vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ButtonContainer = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ButtonSend = styled.button`
  width: 100px;
  height: 40px;
  background-color: ${({ theme }) => theme.colors.blue};
  border: none;
  :focus {
    outline: none;
  }
  :hover {
    cursor: pointer;
  }
`;

export const ButtonReset = styled.button`
  width: 100px;
  height: 40px;
  background-color: ${({ theme }) => theme.colors.black};
  border: none;
  :focus {
    outline: none;
  }
  :hover {
    cursor: pointer;
  }
`;

export const ButtonText = styled.p`
  color: ${({ theme }) => theme.colors.white};
`;

export const PlansContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
`;

export const DescriptionPlanContainer = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
`;

export const BoxOption = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const OptionPlansContainer = styled.div`
  width: 50%;
  display: flex;
  justify-content: space-between;
`;

export const LinkMessage = styled(Link)``;
