import React, { useState, FormEvent } from 'react';

import CalculateRate from '../../utils/calculateRate';
import * as St from './styles';

const FormBlock: React.FC = () => {
  const [idOrigin, setIdOrigin] = useState<string>('');
  const [idDest, setIdDest] = useState<string>('');
  const [hasMinutes, setHasMinutes] = useState<boolean>(false);
  const [minutes, setMinutes] = useState<number>(0);
  const [hasPlan, setHasPlan] = useState<boolean>(false);
  const [hasChecked, setHasChecked] = useState<boolean[]>([false, false]);
  const [price, setPrice] = useState<number>(0);

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

  function handleSubmit() {
    const priceConverter = new CalculateRate();

    if (hasChecked[0] && !hasChecked[1]) {
      setHasPlan(true);
    }

    if ((!hasChecked[0] && !hasChecked[1]) || (hasChecked[0] && hasChecked[1])) {
      alert('não apenas uma opçao ou as 2 ao mesmo tempo!');
    }
    if (Number.isNaN(minutes)) {
      alert('digite um valor válido.');
    }
    if (minutes < 0) {
      alert('digite um valor maior que 0.');
    }
  }

  return (
    <St.Container>
      <St.FormBox>
        <St.TitleInputContainer>
          <St.TitleForm>Calcule o valor da chamada</St.TitleForm>
        </St.TitleInputContainer>
        <St.Form>
          <St.InputContainer>
            <St.NameInputContainer>
              <St.NameInput>Origem</St.NameInput>
            </St.NameInputContainer>
            <St.BoxContainer>
              <St.Input placeholder="Digite id origem" name="origem" onChange={handleInput} />
            </St.BoxContainer>
          </St.InputContainer>

          <St.InputContainer>
            <St.NameInputContainer>
              <St.NameInput>Destino</St.NameInput>
            </St.NameInputContainer>
            <St.BoxContainer>
              <St.Input placeholder="Digite id destino" name="destino" onChange={handleInput} />
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
      </St.FormBox>
    </St.Container>
  );
};

export default FormBlock;
