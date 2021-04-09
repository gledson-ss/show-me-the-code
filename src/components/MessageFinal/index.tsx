import React, { useEffect, useState } from 'react';

import { usePrice } from '../../hooks/AppProvider';
import * as St from './styles';

const MessageFinal: React.FC = () => {
  const {
    priceConverter, idOrigin, idDest, minutes, hasPlan, planValue,
  } = usePrice();
  const [priceFormat, setPriceFormat] = useState<string>('');

  function handlePriceConv(): string {
    const value = priceConverter.getPrice();
    console.log("valor ", value);
    const str = String(value).split('.');

    if (str.length === 1) {
      return (`${str[0]}.00`);
    } if (str[1].length === 1) {
      return (`${str[0]}.${str[1]}0`);
    }

    return `${value}`;
  }

  useEffect(() => {
    priceConverter.setIdOrigem(idOrigin);
    priceConverter.setIdDestino(idDest);
    priceConverter.setMinutes(minutes);
    priceConverter.setHasPlan(hasPlan);
    priceConverter.setPlan(planValue);

    setPriceFormat(handlePriceConv());
  }, []);

  return (
    <St.Container>
      <St.MessageTitleContainer>
        <St.Title>
          Obrigado pela Preferência
        </St.Title>
      </St.MessageTitleContainer>
      <St.PriceContainer>
        <St.Text>
          Preço: $
          {priceFormat}
        </St.Text>
      </St.PriceContainer>
      <St.ButtonContainer>
        <St.LinkMessage href="/">
          <St.Button>Voltar ao início</St.Button>
        </St.LinkMessage>
      </St.ButtonContainer>
    </St.Container>
  );
};
export default MessageFinal;
