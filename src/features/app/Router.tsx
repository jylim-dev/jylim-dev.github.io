import { Suspense } from "react";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import AboutContainer from "../about/Container";

const router = createRoutesFromElements(
  <Route
    path="/"
    // element={
    //   <Suspense>
    //     <LayoutContainer />
    //     <ModalContainer />
    //   </Suspense>
    // }
    // errorElement={<ErrorContainer />}
  >
    <Route index element={<AboutContainer />} />
    {/* <Route path="*" element={<NotFound />} /> */}
  </Route>,
);

export default createBrowserRouter(router, {
  basename: "/",
});
