import { RouterProvider } from "react-router-dom";
import Router from "./Router";

function AppContainer() {
  return <RouterProvider router={Router} />;
}

export default AppContainer;
