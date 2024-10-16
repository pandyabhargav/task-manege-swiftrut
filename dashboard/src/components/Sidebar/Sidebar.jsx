import { Link, useLocation } from "react-router-dom";

const Sidebar = () => {
  const location = useLocation();

  return (
    <>
      <div className="sidebar" id="sidebar">
        <div className="sidebar-inner slimscroll">
          <div id="sidebar-menu" className="sidebar-menu">
            <ul>
              <li className="menu-title">
                <span>Main</span>
              </li>

              <li className={`${location.pathname === "/" ? "active" : ""}`}>
                <Link to={"/"}>
                  <span>Dashboard</span>
                </Link>
              </li>

              <li className={location.pathname === "/tasks" ? "active" : ""}>
                <Link to={"/tasks"}>
              <span>Tasks</span>
                </Link>
              </li>

              <li className={location.pathname === "/category" ? "active" : ""}>
                <Link to={"/category"}>
                  <span>Category</span>
                </Link>
              </li>

              <li className={location.pathname === "/tag" ? "active" : ""}>
                <Link to={"/tag"}>
                   <span>Priority</span>
                </Link>
              </li>


              {/* <li
                className={`${location.pathname === "/users" ? "active" : ""}`}>
                <Link to={"/users"}>
                  <i className="fe fe-users"></i> <span>Users</span>
                </Link>
              </li> */}

         
{/* 
              <li
                className={`${location.pathname === "/role" ? "active" : ""}`}>
                <Link to={"/role"}>
                  <i className="fa fa-anchor"></i> <span>Role</span>
                </Link>
              </li> */}

          
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
