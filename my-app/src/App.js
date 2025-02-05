import './App.css';
import FunctionalGreeting from './components/FunctionalGreeting';
import FunctionalGreetingWithProps from './components/FunctionalGreetingWithProps';

function App() {
  return (
    <div className="App">
      <FunctionalGreeting />
      <FunctionalGreetingWithProps
       greeting="Nice to meeting you!"
       name="Miles" 
       age="33" 
       />
    </div>
  );
}

export default App;
