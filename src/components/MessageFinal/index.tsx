import React from 'react';

import * as St from './styles';

interface props{
  price: string;
}

const MessageFinal: React.FC<props> = ({ price }: props) => (
  <St.Container>
    <St.MessageTitleContainer>
      <St.Title>
        Obrigado pela Preferência
      </St.Title>
    </St.MessageTitleContainer>
    <St.PriceContainer>
      <St.Text>
        Preço: R$
        {' '}
        {price}
      </St.Text>
    </St.PriceContainer>
    <St.ButtonContainer>
      <St.Link href="/">
        <St.Button>Voltar ao início</St.Button>
      </St.Link>
    </St.ButtonContainer>
  </St.Container>
);
export default MessageFinal;
