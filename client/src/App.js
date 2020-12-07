import { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import GlobalStyle from "./GlobalStyle";
import { LoadingScreen } from "./components/LoadingScreen";
import routes from "./utils/routes";
import { LoginPage } from "./pages/LoginPage";
import { AuthProvider } from "./utils/contexts/context";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 4000);
  }, []);

  return (
    <AuthProvider>
      <Router>
        <GlobalStyle />
        <Switch>
          <Route exact path="/">
            {loading ? <LoadingScreen /> : <LoginPage />}
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
    </AuthProvider>
  );
}

export default App;
