import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import GlobalStyle from "./GlobalStyle";
import { LoadingScreen } from "./components/LoadingScreen";
import { HomePage } from "./pages/HomePage";
import { AddProjectPage } from "./pages/AddProjectPage";
import { BrowsePage } from "./pages/BrowsePage";
import { CategoryPage } from "./pages/CategoryPage";
import { DetailsPage } from "./pages/DetailsPage";
import { FavouritesPage } from "./pages/FavouritesPage";

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
        <Route path="/category">
          <CategoryPage />
        </Route>
        <Route path="/browse">
          <BrowsePage />
        </Route>
        <Route path="/projects/:projectId">
          <DetailsPage />
        </Route>
        <Route path="/favourites">
          <FavouritesPage />
        </Route>
        <Route path="/add">
          <AddProjectPage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
