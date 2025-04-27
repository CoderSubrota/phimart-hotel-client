import React from "react";
import { RouterProvider } from "react-router-dom";
import routes from "./routes/routes";

function App() {
  return (
    <React.Fragment>
      <RouterProvider router={routes}></RouterProvider>
    </React.Fragment>
  )
}

export default App;
