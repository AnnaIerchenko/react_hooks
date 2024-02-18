import './App.css';
import Counter from './components/Counter';
import MainComponent from './components/MainComponent';
import Timer from './components/Timer';
import LoginContextProvider from './context/LoginContextProvider';

function App() {
  return (
    <LoginContextProvider>
    <div className="App">
      <Counter />
      <Timer />
      <MainComponent />
    </div>
    </LoginContextProvider>
  );
}

export default App;
