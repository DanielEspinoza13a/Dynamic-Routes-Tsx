import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import RoutesComponent from "./routes/RoutesComponent";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          {RoutesComponent.map((route, index) => (
            <Route
              path={route.path}
              key={index}
              element={React.createElement(route.component)}
            />
          ))}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
