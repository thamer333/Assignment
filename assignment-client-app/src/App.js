import logo from './logo.svg';
import './App.css';
import { Switch, Route,Link } from 'react-router-dom';
import { List } from './pages/list/component';
import { Details } from './pages/details/component';

export const routes = {
  LIST: '/',
  DETAILS: '/:id',
};

function App() {
  return (
    <div className="App">

      <div style={{padding: '30px', marginBottom: '40px'}}>
      <nav>
          <ul>
            <li>
              <Link to={routes.LIST}>Home</Link>
            </li>
          </ul>
        </nav>
      </div>
      <Switch>
          <Route exact path={routes.LIST} component={List} />
          <Route exact path={routes.DETAILS} component={Details} />
      </Switch>
    </div>
  );
}

export default App;
