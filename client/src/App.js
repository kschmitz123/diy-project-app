import { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import GlobalStyle from "./GlobalStyle";
import { LoadingScreen } from "./components/LoadingScreen";
import { HomePage } from "./pages/HomePage";
import routes from "./utils/routes";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 4000);
  }, []);

  return (
    <Router>
      <GlobalStyle />
      <Switch>
        <Route exact path="/">
          {loading ? <LoadingScreen /> : <HomePage />}
        </Route>
        {routes.map((route) => (
          <Route
            key={route.path}
            path={route.path}
            component={route.component}
          />
        ))}
      </Switch>
    </Router>
  );
}

export default App;
