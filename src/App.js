import './App.css';
import { Counter } from './components/Counter/Counter';
import { CounterContextProvider } from './context/countetContext';

function App() {
  return (
    <CounterContextProvider>
      <Counter />
    </CounterContextProvider>

  );
}

export default App;
