
import './App.css';
import data from './data.json'

function App() {
  return (
    <div className="App">
      {data.map(el=><h3>{el.Title}</h3>)}
      
    </div>
  );
}

export default App;
