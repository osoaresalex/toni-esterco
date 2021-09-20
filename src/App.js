import React from 'react';
import { Route, Switch } from "react-router-dom";

import Template from './template';
import SearchPage from "./pages/search-page";
import DetailsPage from "./pages/details-page";

function App() {
  return (
    <Template>
      <Switch>
        <Route exact path="/" component={SearchPage} />
        <Route exact path="/code-hero/" component={SearchPage} />
        <Route path="/code-hero/details" component={DetailsPage} />
      </Switch>
    </Template>
  );
}

export default App;
