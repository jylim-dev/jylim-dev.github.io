import { Suspense } from "react";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import AboutContainer from "../about/Container";
import WorksContainer from "../works/Container";
import LayoutContainer from "../shared/layout/Container";

const router = createRoutesFromElements(
  <Route
    element={
      <Suspense>
        <LayoutContainer />
        {/* <ModalContainer /> */}
      </Suspense>
    }
    // errorElement={<ErrorContainer />}
  >
    <Route index element={<AboutContainer />} />
    <Route path="works" element={<WorksContainer />} />
    {/* <Route path="*" element={<NotFound />} /> */}
  </Route>,
);

export default createBrowserRouter(router, {
  basename: "/",
});
