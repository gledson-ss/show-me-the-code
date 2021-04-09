import React from 'react';
import { useHistory, useLocation } from 'react-router-dom';

import { usePrice } from '../../hooks/AppProvider';
import MessageFinal from '../MessageFinal';
import * as St from './styles';

const FormBlock: React.FC = () => {
  const { idOrigin, setIdOrigin } = usePrice();
  const { idDest, setIdDest } = usePrice();
  const { minutes, setMinutes } = usePrice();
  const { setPlanValue } = usePrice();
  const { setHasPlan } = usePrice();
  const { setHasMinutes } = usePrice();
  const { hasChecked, setHasChecked } = usePrice();
  const { hasCheckPlanValue, setHasCheckPlanValue } = usePrice();
  const Hist = useHistory();
  const Location = useLocation();

  function handleInput(e: React.ChangeEvent<HTMLInputElement>) {
    const { name } = e.currentTarget;
    const valueInput = e.currentTarget.value;
    if (name === 'origem') {
      setIdOrigin(valueInput);
    }
    if (name === 'destino') {
      setIdDest(valueInput);
    }
    if (name === 'minutos') {
      const number = Number(valueInput);
      setMinutes(number);
      if (number >= 0) {
        setHasMinutes(true);
      } else {
        setHasMinutes(false);
      }
    }
  }

  function handleCheckbox(e: React.ChangeEvent<HTMLInputElement>) {
    const { name } = e.currentTarget;
    if (name === 'sim') {
      setHasChecked([true, false]);
    }
    if (name === 'nao') {
      setHasChecked([false, true]);
    }
    if ((hasChecked[0] && hasChecked[1])) {
      alert('não marque apenas uma opçao ou as 2 ao mesmo tempo!');
    }
  }

  function handlePlanValue(e: React.ChangeEvent<HTMLInputElement>) {
    const { name } = e.currentTarget;

    if (name === '30') {
      setHasCheckPlanValue([true, false, false]);
      setPlanValue(30);
    }

    if (name === '60') {
      setHasCheckPlanValue([false, true, false]);
      setPlanValue(60);
    }

    if (name === '120') {
      setHasCheckPlanValue([false, false, true]);
      e.currentTarget.checked = false;
      setPlanValue(120);
    }
  }

  function handleError() {
    if (Number.isNaN(minutes) || minutes === 0) {
      alert('digite um valor válido ou um valor maior que 0.');
    } else if (!idOrigin.length || !idDest.length || !minutes) {
      alert('Não deixe campos vazios!');
    } else if (minutes < 0) {
      alert('digite um valor maior que 0.');
    } else {
      Hist.push('/message');
    }
  }

  function handleSubmit() {
    if (hasChecked[0] && !hasChecked[1]) {
      setHasPlan(true);
    }
    handleError();
  }

  return (
    <St.Container>
      <St.FormBox>
        {
        Location.pathname === '/message' ? <MessageFinal /> : (
          <>
            <St.TitleInputContainer>
              <St.TitleForm>Calcule o valor da sua chamada</St.TitleForm>
            </St.TitleInputContainer>
            <St.Form>
              <St.InputContainer>
                <St.NameInputContainer>
                  <St.NameInput>DDD Origem</St.NameInput>
                </St.NameInputContainer>
                <St.BoxContainer>
                  <St.Input placeholder="Digite DDD origem" name="origem" onChange={handleInput} />
                </St.BoxContainer>
              </St.InputContainer>

              <St.InputContainer>
                <St.NameInputContainer>
                  <St.NameInput>DDD Destino</St.NameInput>
                </St.NameInputContainer>
                <St.BoxContainer>
                  <St.Input placeholder="Digite DDD destino" name="destino" onChange={handleInput} />
                </St.BoxContainer>
              </St.InputContainer>
              <St.InputContainer>
                <St.NameInputContainer>
                  <St.NameInput>Minutos Falados</St.NameInput>
                </St.NameInputContainer>
                <St.BoxContainer>
                  <St.Input placeholder="Quantos minutos? " name="minutos" onChange={handleInput} />
                </St.BoxContainer>
              </St.InputContainer>

              <St.InputContainer>
                <St.NameInputContainer>
                  <St.NameInput>Possui Fale Mais?</St.NameInput>
                </St.NameInputContainer>

                <St.CheckBoxContainer>
                  <St.OptionName>Sim</St.OptionName>
                  <St.OptionContainer>
                    <St.InputCheckBox type="checkbox" name="sim" onChange={handleCheckbox} checked={hasChecked[0]} />
                  </St.OptionContainer>
                  <St.OptionName>Não</St.OptionName>
                  <St.OptionContainer>
                    <St.InputCheckBox type="checkbox" name="nao" onChange={handleCheckbox} checked={hasChecked[1]} />
                  </St.OptionContainer>
                </St.CheckBoxContainer>
              </St.InputContainer>

              {
            hasChecked[0] && (
            <St.PlansContainer>
              <St.DescriptionPlanContainer>
                <St.OptionName>Plano Fale:</St.OptionName>
              </St.DescriptionPlanContainer>
              <St.OptionPlansContainer>
                <St.BoxOption>
                  <St.OptionName>30</St.OptionName>
                  <St.InputCheckBox type="checkbox" name="30" onChange={(e) => handlePlanValue(e)} checked={hasCheckPlanValue[0]} />
                </St.BoxOption>
                <St.BoxOption>
                  <St.OptionName>60</St.OptionName>
                  <St.InputCheckBox type="checkbox" name="60" onChange={(e) => handlePlanValue(e)} checked={hasCheckPlanValue[1]} />
                </St.BoxOption>
                <St.BoxOption>
                  <St.OptionName>120</St.OptionName>
                  <St.InputCheckBox type="checkbox" name="120" onChange={(e) => handlePlanValue(e)} checked={hasCheckPlanValue[2]} />
                </St.BoxOption>
              </St.OptionPlansContainer>
            </St.PlansContainer>
            )
          }

              <St.SubmitContainer>
                <St.ButtonContainer>
                  <St.ButtonReset type="reset">
                    <St.ButtonText>Reset</St.ButtonText>
                  </St.ButtonReset>
                </St.ButtonContainer>
                <St.ButtonContainer>
                  <St.ButtonSend type="button" onClick={handleSubmit}>
                    <St.ButtonText>Calcular</St.ButtonText>
                  </St.ButtonSend>
                </St.ButtonContainer>
              </St.SubmitContainer>
            </St.Form>
          </>
        )
      }

      </St.FormBox>
    </St.Container>
  );
};

export default FormBlock;
