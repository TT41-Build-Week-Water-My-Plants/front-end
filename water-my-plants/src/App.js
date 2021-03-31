import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';
//import Login from './components/Login';
import PrivateRoute from "./components/PrivateRoute";
import PlantsList from "./components/PlantsList";
import AddPlantForm from "./components/AddPlantForm";

function App() {
  return (
    <div className="App">
      <header className="App-header">

        <LoginPage />
      </header>
    </div>
  );
}

export default App;
