import './App.css';
import Counter from './components/Counter';
import MainComponent from './components/MainComponent';
import Timer from './components/Timer';
import LoginContextProvider from './context/LoginContextProvider';
import CounterRef from './components/CounterRef'
import RefToDomEl from './components/RefToDomEl'

function App() {
  return (
    <LoginContextProvider>
    <div className="App">
      <Counter />
      <Timer />
      <MainComponent />
      <CounterRef />
      <RefToDomEl />
    </div>
    </LoginContextProvider>
  );
}

export default App;
