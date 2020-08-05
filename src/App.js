import React from "react";

import MainContainer from "./containers/MainContainer";
import { Route } from "react-router-dom";
function App() {
  return (
    <div>
      <Route path="/" component={MainContainer} exact />
    </div>
  );
}

export default App;
