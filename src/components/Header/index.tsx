import React from 'react';

import DateBlock from '../DateBlock';
import * as St from './styles';

const Header: React.FC = () => (
  <St.Container>
    <St.DataContainer>
      <DateBlock />
    </St.DataContainer>
    <St.TitleContainer>
      <St.Title>
        Seja bem vindo a
      </St.Title>
      <St.LogoTitle>
        Fale Mais
      </St.LogoTitle>
    </St.TitleContainer>
  </St.Container>
);

export default Header;
