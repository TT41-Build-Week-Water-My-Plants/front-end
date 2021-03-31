import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';
//import Login from './components/Login';
import PrivateRoute from "./components/PrivateRoute";
import PlantsList from "./components/PlantsList";
import AddPlantForm from "./components/AddPlantForm";
import LoginPage from './components/LoginPage';
import Signup from './components/Signup';
import MarketingPage from './components/MarketingPage';
import EditPlant from './components/EditPlants';


function App() {
  return (
    <div className="App">
      <header className="App-header">

        <Router>
        <Route exact path='/' component={MarketingPage} />
        <Route path='/signup' component={Signup} />
        <Route path='/login' component={LoginPage} />
        <PrivateRoute path='/plants' component={PlantsList} />
        <PrivateRoute path='/edit-plant' component={EditPlant} />
        <PrivateRoute path='/add-plants' component={AddPlantForm} />
        </Router>
      </header>
    </div>
  );
}

export default App;
