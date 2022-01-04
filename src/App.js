import './App.css';
import { BrowserRouter } from 'react-router-dom/cjs/react-router-dom.min';
import { NavLink, Switch, Route } from 'react-router-dom';
import Dogs from './views/Dogs/Dogs';

function App() {
  return (
    <BrowserRouter>
      <header>
        <NavLink to="/dogs">Home</NavLink>
      </header>
      <Switch>
        <Route exact path="/dogs" component={Dogs} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
