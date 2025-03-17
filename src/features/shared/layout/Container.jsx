import { Link, Outlet } from "react-router-dom";
import { PATH_PROJECT, PATH_WORK } from "../constants/path";

const LayoutContainer = () => {
  return (
    <div className="layout-container">
      <header className="sticky top-0 z-10 backdrop-filter backdrop-blur-sm bg-opacity-40 border-b border-gray-200">
        <nav className="max-w-5xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <Link to="/">
              <span className="text-2xl text-gray-900 font-semibold">G0</span>
            </Link>
            <div className="flex space-x-4 text-gray-900">
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
