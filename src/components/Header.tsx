import { FaSearch } from "react-icons/fa";

import img_user from "/img/afro-man-profile.png";
import { IoIosArrowDown, IoMdNotificationsOutline } from "react-icons/io";
import { MdFilterList } from "react-icons/md";

export function Header() {
  return (
    <>
      <div className="header__container">
        {/* Pèsquisa */}
        <div className="header__research">
          <div className="header__research-select">
            <select name="" id="">
              <option value="">Movies</option>
              <option value=""></option>
              <option value=""></option>
              <option value=""></option>
              <option value=""></option>
              <option value=""></option>
            </select>
          </div>
          <form className="header__research-form">
            <button>
              <FaSearch />
            </button>
            <input type="text" />
            <a href="#">
              <MdFilterList />
            </a>
          </form>
        </div>
        {/* User Notification */}
        <div className="header__user">
          <div className="header__user-notification">
            <IoMdNotificationsOutline />
          </div>
          <div className="header__user-container">
            <div className="header__user-info">
              <p>Fulano</p>
              <p>Plano</p>
            </div>
            <div className="header__user-img">
              <img src={img_user} alt="" />
            </div>
            <div className="header__user-config">
              <IoIosArrowDown />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
