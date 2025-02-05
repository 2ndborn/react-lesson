import './App.css';
import FunctionalGreeting from './components/FunctionalGreeting';
import FunctionalGreetingWithProps from './components/FunctionalGreetingWithProps';
import StatefulGreeting from './components/StatefulGreeting';

function App() {
  return (
    <div className="App">
      <StatefulGreeting greeting="I am a stateful greeting component"/>
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
