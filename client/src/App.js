import './App.css';
//components
import Navbar from './components/navigationbar'
import Todofrom from './components/todoform'
import Currenttodo from './components/currenttodo'

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Todofrom/>
      <Currenttodo/>
    </div>
  );
}

export default App;
