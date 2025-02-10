import { Suspense } from "react";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import AboutContainer from "../about/Container";
import WorksContainer from "../works/Container";
import LayoutContainer from "../shared/layout/Container";
import ProjectsContainer from "../projects/Container";
import { PATH_PROJECT, PATH_WORK } from "../shared/constants/path";

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
    <Route path={PATH_WORK} element={<WorksContainer />} />
    <Route path={PATH_PROJECT} element={<ProjectsContainer />} />
    {/* <Route path="*" element={<NotFound />} /> */}
  </Route>,
);

export default createBrowserRouter(router, {
  basename: "/",
});
