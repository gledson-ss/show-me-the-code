import React from 'react';

import Footer from '../components/Footer';
import FormBlock from '../components/FormBlock';
import Header from '../components/Header';
import * as St from '../styles/pages';

const Home: React.FC = () => (
  <St.Container>
    <Header />
    <St.InputContainer>
      <FormBlock />
    </St.InputContainer>
    <Footer />
  </St.Container>
);

export default Home;
