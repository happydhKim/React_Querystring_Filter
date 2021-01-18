import * as React from 'react';
import {
  BrowserRouter as Router,
  Switch,
} from 'react-router-dom';
import {
  RecoilRoot,
} from 'recoil';
import {Main} from './pages';

const App: React.FC = () => (
  <RecoilRoot>
    <Router>
      <Switch>
        <Main />
      </Switch>
    </Router>
  </RecoilRoot>
);

export default App;
