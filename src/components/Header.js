import { Switch, Route } from 'react-router-dom';

import HeaderText from './HeaderText';

import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <Switch>
        <Route path="/:page">
          <HeaderText />
        </Route>
        <Route path="/">TOP</Route>
      </Switch>
    </header>
  );
};

export default Header;
