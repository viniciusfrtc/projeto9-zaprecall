import styled from 'styled-components'
import Deck from './components/Deck';
import Footer from './components/Footer';
import Logo from './components/Logo';
import { useState } from 'react';

export default function App() {
  const [answersCounter, setAnswersCounter] = useState(0);

  const incrementAnswersCounter = () => setAnswersCounter(answersCounter + 1)

  return (
    <ScreenContainer>
      <Logo/>
      <Deck incrementAnswersCounter={incrementAnswersCounter} />
      <Footer answersCounter={answersCounter}/>
    </ScreenContainer>
  );
}

const ScreenContainer = styled.div`
  background-color: #FB6B6B;
  width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0px;
  padding: 0px;
  padding-bottom: 200px;
`

