import './App.css';
import Fetch from './Components/Fetch';

function App() {
  document.body.style = 'background: linear-gradient(45deg, rgba(236, 223, 45, 0.089), rgb(221, 218, 8));'

  return (
    <div className="App">
      <Fetch />
    </div>
  );
}

export default App;
