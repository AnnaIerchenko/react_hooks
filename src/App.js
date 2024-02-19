import './App.css';
import Counter from './components/Counter';
import MainComponent from './components/MainComponent';
import Timer from './components/Timer';
import LoginContextProvider from './context/LoginContextProvider';
import CounterRef from './components/CounterRef'
import RefToDomEl from './components/RefToDomEl'
import ReducerCounter from './components/ReducerCounter';
import MemoClick from './components/MemoClick';
import CallbackClick from './components/Callback/CallbackClick';
import UseCustomHook from './components/customHook/UseCustomHook';

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
      <CallbackClick />
      <UseCustomHook />
    </div>
    </LoginContextProvider>
  );
}

export default App;
