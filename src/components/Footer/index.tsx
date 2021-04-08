import React from 'react';

import * as St from './styles';

const Footer: React.FC = () => (
  <St.Container>
    <St.DescriptionBlock>
      <St.Description>
        <St.Text>
          Desafio Vizir
        </St.Text>

      </St.Description>
    </St.DescriptionBlock>
    <St.DescriptionBlock>
      <St.Description>
        <St.Text>
          Feito por
        </St.Text>
        <St.Link href="https://gledson.dev/" target="blank">
          <St.TextLink id="link">
            gledson.dev
          </St.TextLink>
        </St.Link>
      </St.Description>

    </St.DescriptionBlock>
    <St.DescriptionBlock>
      <St.Text>contato@gledson.dev</St.Text>
    </St.DescriptionBlock>
  </St.Container>
);

export default Footer;
