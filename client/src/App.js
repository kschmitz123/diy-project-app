import { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import GlobalStyle from "./GlobalStyle";
import LoadingScreen from "./components/LoadingScreen";
import routes from "./utils/router/routes";
import { LoginPage } from "./pages/LoginPage";
import { UserProvider } from "./utils/contexts/context";
import { ProtectedRoute } from "./utils/router/ProtectedRoute";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 4000);
  }, []);

  return (
    <UserProvider>
      <Router>
        <GlobalStyle />
        <Switch>
          <Route exact path="/">
            {loading ? <LoadingScreen /> : <LoginPage />}
          </Route>
          {routes.map((route) => (
            <ProtectedRoute
              key={route.path}
              path={route.path}
              component={route.component}
            />
          ))}
        </Switch>
      </Router>
    </UserProvider>
  );
}

export default App;
