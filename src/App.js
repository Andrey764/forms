import './App.css';
import { Person } from './Person';

function App() {
  return (
    <div className="App">
     {new Person().render()}
    </div>
  );
}

export default App;
