import React, { useState } from 'react';

import CalculateRate from '../../utils/calculateRate';
import MessageFinal from '../MessageFinal';
import * as St from './styles';

const FormBlock: React.FC = () => {
  const [idOrigin, setIdOrigin] = useState<string>('');
  const [idDest, setIdDest] = useState<string>('');
  const [hasMinutes, setHasMinutes] = useState<boolean>(false);
  const [minutes, setMinutes] = useState<number>(0);
  const [hasPlan, setHasPlan] = useState<boolean>(false);
  const [hasChecked, setHasChecked] = useState<boolean[]>([false, false]);
  const [price, setPrice] = useState<number>(-1);
  const [hasCheckPlanValue, setHasCheckPlanValue] = useState<boolean[]>([false, false, false]);
  const [planValue, setPlanValue] = useState<number>(0);
  const [screenFinal, setScreenFinal] = useState<boolean>(false);
  const [priceConv, setPriceConv] = useState<string>('');
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
      setHasChecked([!hasChecked[0], hasChecked[1]]);
    }
    if (name === 'nao') {
      setHasChecked([hasChecked[0], !hasChecked[1]]);
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
    } else if ((!hasChecked[0] && !hasChecked[1]) || (hasChecked[0] && hasChecked[1])) {
      alert('não marque apenas uma opçao ou as 2 ao mesmo tempo!');
    } else if (minutes < 0) {
      alert('digite um valor maior que 0.');
    }
  }

  function handleSubmit() {
    const priceConverter = new CalculateRate();

    if (hasChecked[0] && !hasChecked[1]) {
      setHasPlan(true);
    }

    handleError();

    priceConverter.setIdOrigem(idOrigin);
    priceConverter.setIdDestino(idDest);
    priceConverter.setMinutes(minutes);
    priceConverter.setHasPlan(hasChecked[0]);
    priceConverter.setPlan(planValue);

    if (Number.isNaN(price)) {
      alert('DDD de origem e destino nao cadastrado ainda!');
    }
    setPrice(priceConverter.getPrice());

    if (price >= 0) {
      setScreenFinal(true);
    }
  }

  function handlePriceConv(): string {
    const str = String(price).split('.');

    if (str.length === 1) {
      return (`${str[0]}.00`);
    } if (str[1].length === 1) {
      return (`${str[0]}.${str[1]}0`);
    }

    return `${price}`;
  }

  return (
    <St.Container>
      <St.FormBox>
        {
        screenFinal ? <MessageFinal price={handlePriceConv()} /> : (
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
                    <St.InputCheckBox type="checkbox" name="sim" onChange={handleCheckbox} />
                  </St.OptionContainer>
                  <St.OptionName>Não</St.OptionName>
                  <St.OptionContainer>
                    <St.InputCheckBox type="checkbox" name="nao" onChange={handleCheckbox} />
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
