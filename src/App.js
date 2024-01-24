import styles from './App.module.css';
import FlexContainer from './components/FlexContainer';

function App() {
  return (
    <div>
      <FlexContainer flexDirection="column">
        <p>123</p>
        <p>987</p>
      </FlexContainer>
      <FlexContainer children={<p>sadsadsa</p>} />
    </div>
  );
}

export default App;
