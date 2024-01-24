import styles from './App.module.css';
import FlexContainer from './components/FlexContainer';
import RenderPropsComponent from './components/RenderPropsComponent';
import Drill from './components/Tree';

function App() {

  function showParagraph (isOn, toggleIsOn) {
    return <p>rendered with render prop {isOn}<button onClick={toggleIsOn}>Toggle</button></p>
  }

  return (
    <div>
      <RenderPropsComponent render={showParagraph} />
      <FlexContainer flexDirection="column">
        <p>123</p>
        <p>987</p>
      </FlexContainer>
      <FlexContainer children={<p>sadsadsa</p>} />
      <Drill data="secret data" data2={1232132131} data3={[12321,343434,3454353]} isImportant/>
    </div>
  );
}

export default App;
