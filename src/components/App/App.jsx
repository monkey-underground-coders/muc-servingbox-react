import React from "react";
import AppRouter from "components/AppRouter";
import routes from "src/routes.js";
import "styles/normalize.scss";

const App = () => {
  return (
    <div className="App">
      <AppRouter routes={routes} />
    </div>
  );
};

export default App;
