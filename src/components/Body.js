import { Switch, Route } from 'react-router-dom';

import NewsDetail from './NewsDetail';

const Body = () => (
  <div>
    <Switch>
      <Route path="/news/:title">
        <NewsDetail />
      </Route>
      <Route path="/news">This is news page body.</Route>
      <Route path="/about">This is about page body.</Route>
      <Route path="/" exact>
        This is top page body.
      </Route>
      <Route path="*">404</Route>
    </Switch>
  </div>
);

export default Body;
