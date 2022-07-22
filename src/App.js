import { Counter } from './component/Counter';
import './App.css';
import {Bulb} from './component/BulbOnOff'
function App() {
  return (
    <>
    <div className="App">
    <Bulb/>
    <br/>
    <hr/>
    <Counter/>
    </div>
    </>
  );
}

export default App;
