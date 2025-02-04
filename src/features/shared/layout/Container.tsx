import { FunctionComponent } from "react";
import { Link, Outlet } from "react-router-dom";

const LayoutContainer: FunctionComponent = () => {
  return (
    <div className="layout-container">
      <header>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/works">Works</Link>
        </nav>
      </header>
      <Outlet />
    </div>
  );
};

export default LayoutContainer;
