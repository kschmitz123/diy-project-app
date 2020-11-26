import React, { useState, useEffect } from "react";
import GlobalStyle from "./GlobalStyle";
import { LoadingScreen } from "./components/LoadingScreen";
import { HomePage } from "./pages/HomePage";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 4000);
  }, []);

  return (
    <>
      <GlobalStyle />
      {loading === false ? <HomePage /> : <LoadingScreen />}
    </>
  );
}

export default App;
