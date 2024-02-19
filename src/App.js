import './App.css';
import Counter from './components/Counter';
import MainComponent from './components/MainComponent';
import Timer from './components/Timer';
import LoginContextProvider from './context/LoginContextProvider';
import CounterRef from './components/CounterRef'
import RefToDomEl from './components/RefToDomEl'
import ReducerCounter from './components/ReducerCounter';
import MemoClick from './components/MemoClick';

function App() {
  return (
    <LoginContextProvider>
    <div className="App">
      <Counter />
      <Timer />
      <MainComponent />
      <CounterRef />
      <RefToDomEl />
      <ReducerCounter />
      <MemoClick />
    </div>
    </LoginContextProvider>
  );
}

export default App;
