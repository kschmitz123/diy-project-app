import React, { useState, useEffect } from "react";
import GlobalStyle from "./GlobalStyle";
import { LoadingScreen } from "./components/LoadingScreen";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 4000);
  }, []);

  return (
    <>
      <GlobalStyle />
      {loading === false ? (
        <div className="App">Test deployment</div>
      ) : (
        <LoadingScreen />
      )}
    </>
  );
}

export default App;
