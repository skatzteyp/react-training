import { Switch, Route } from 'react-router-dom';

const Body = () => (
  <div>
    <Switch>
      <Route path="/news">This is news page body.</Route>
      <Route path="/about">This is about page body.</Route>
      <Route path="/">This is top page body.</Route>
    </Switch>
  </div>
);

export default Body;
