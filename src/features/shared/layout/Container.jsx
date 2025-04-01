import { Link, Outlet } from "react-router-dom";
import { PATH_PROJECT, PATH_WORK } from "../constants/path";

const LayoutContainer = () => {
  return (
    <div className="layout-container">
      <header className="sticky top-0 z-10 backdrop-filter backdrop-blur-md backdrop-saturate-150 bg-white/50">
        <nav className="max-w-5xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex justify-center mx-auto space-x-8 text-gray-900">
              <Link to="/">ABOUT</Link>
              <Link to={`/${PATH_WORK}`}>WORK</Link>
              <Link to={`/${PATH_PROJECT}`}>PROJECT</Link>
            </div>
          </div>
        </nav>
      </header>
      <div className="max-w-5xl mx-auto p-4">
        <Outlet />
      </div>
    </div>
  );
};

export default LayoutContainer;
