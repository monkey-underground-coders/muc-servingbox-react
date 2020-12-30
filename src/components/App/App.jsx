import React from "react";
import AppRouter from "components/AppRouter";
import routes from "src/routes.js";
import "styles/normalize.scss";
import { HelmetProvider } from "react-helmet-async";

const App = () => {
  return (
    <HelmetProvider>
      <div className="App">
        <AppRouter routes={routes} />
      </div>
    </HelmetProvider>
  );
};

export default App;
