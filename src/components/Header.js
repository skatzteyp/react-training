import { Switch, Route } from 'react-router-dom';

const Header = () => (
  <header>
    <Switch>
      <Route path="/news">News</Route>
      <Route path="/about">About</Route>
      <Route path="/">Top</Route>
    </Switch>
  </header>
);

export default Header;
