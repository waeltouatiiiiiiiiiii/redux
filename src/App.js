import './App.css';
import Addtask from './components/Addtask';
import ListTask from './components/ListTask';
import 'bootstrap/dist/css/bootstrap.css';

function App() {
  return (
    <div className="App m-5">
      <Addtask/>
      <ListTask/>
    </div>
  );
}

export default App;
