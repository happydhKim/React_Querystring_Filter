import * as React from 'react';
import {
  BrowserRouter as Router,
  Switch,
} from 'react-router-dom';

const App: React.FC = () => (
  <Router>
    <Switch>
      <div>Setting Test</div>
    </Switch>
  </Router>
);

export default App;
