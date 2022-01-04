import './App.css';
import { BrowserRouter } from 'react-router-dom/cjs/react-router-dom.min';
import { NavLink, Switch, Route } from 'react-router-dom';
import Dogs from './views/Dogs/Dogs';
import Dog from './views/Dog/Dog';

function App() {
  return (
    <BrowserRouter>
      <header>
        <NavLink to="/dogs">Home</NavLink>
      </header>
      <Switch>
        <Route exact path="/dogs" component={Dogs} />
        <Route exact path="/dogs/:id" component={Dog} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
