import Logo from "../../assets/img/daily_task.png";

import { useDispatch } from "react-redux";
import { logoutUser } from "../../features/auth/authApiSlice";
import UseAuthUser from "../../hooks/UseAuthUser";
import { Link } from "react-router-dom";

const Header = () => {
  const { user } = UseAuthUser();
  const dispatch = useDispatch();
  const handleUserLogout = (e) => {
    e.preventDefault();
    dispatch(logoutUser());
  };

  //Mobile menu show/hide
  const handleMobileMenu = () => {
    const main_wrapper = document.querySelector(".main-wrapper");

    if (main_wrapper.classList.contains("slide-nav")) {
      main_wrapper.classList.remove("slide-nav");
    } else {
      main_wrapper.classList.add("slide-nav");
    }
  };
  return (
    <>
      <div className="header">
        <div className="header-left">
          <h1>Task</h1>
        </div>


        <a onClick={handleMobileMenu} className="mobile_btn" id="mobile_btn">
          <i className="fa fa-bars"></i>
        </a>

        
      </div>
    </>
  );
};

export default Header;
