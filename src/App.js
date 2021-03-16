import './App.css';
import Maze from './Maze';

function App() {
  return (
    <div>
      <h1 className='heading'>Rat in a Maze Visualizer</h1>
      <div className='maze'>
        <Maze/>
      </div>
    </div>
  );
}

export default App;
