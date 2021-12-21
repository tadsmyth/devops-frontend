import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import SideNavbar from './components/SideNavbar';
import Header from './components/Header';
import Contents from './components/Contents';
import CreatingTasks from './components/bodyComponents/CreatingTasks';


function App() {
  return (
    <div className="App">
      <h1>Todo</h1>
      <Header />
      <Contents />
      <CreatingTasks />
    </div>
  );
}

export default App;
