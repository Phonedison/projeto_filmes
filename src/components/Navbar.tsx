import { FaCalendar } from "react-icons/fa";
import { GoHomeFill, GoStarFill } from "react-icons/go";
import { HiMiniPresentationChartLine } from "react-icons/hi2";
import { MdContactSupport } from "react-icons/md";
import { RiMovieFill } from "react-icons/ri";
import { TbSettingsFilled } from "react-icons/tb";

import img from "/img/images.jpeg";
import { FaCirclePlay } from "react-icons/fa6";

export function Navbar() {
  return (
    <>
      <div className="navbar__container">
        {/* Logotipo */}
        <div className="header__logotipo">
          <h2>UX MOVIE</h2>
        </div>
        <ul className="navbar__list">
          <li className="navbar__list-item">
            <GoHomeFill />
            Home
          </li>
          <li className="navbar__list-item">
            <GoStarFill />
            Favoritos
          </li>
          <li className="navbar__list-item">
            <FaCalendar />
            Coming soon
          </li>
          <li className="navbar__list-item">
            <HiMiniPresentationChartLine />
            Trending
          </li>
        </ul>
        <ul className="navbar__list">
          <li className="navbar__list-item">
            <TbSettingsFilled />
            Settings
          </li>
          <li className="navbar__list-item">
            <MdContactSupport />
            Support
          </li>
        </ul>
        <div className="navbar__list">
          <div className="navbar__title">
            <RiMovieFill /> <strong>Continue Watching</strong>
          </div>
          <ul className="navbar__list navbar__list-movies">
            <li className="navbar__list-item">
              <div className="movie-watching">
                <h5>Titulo</h5>
                <div className="movie-watching__info">
                  <div>
                    <FaCirclePlay />
                  </div>
                  <p>2h40min</p>
                </div>
                <img src={img} alt="" />
              </div>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
