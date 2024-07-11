import React from "react";
import { Link } from "react-router-dom";
import HeaderSlider from '../../components/header-slider/HeaderSlider'

import HeaderSlide from "../../assets/png/header-slider.png";
import CartSVG from "../../assets/svg/Cart1.svg";
import SearchSVG from "../../assets/svg/search.svg";
import SmallHeartSVG from "../../assets/svg/heart small.svg";
import UserOff from "../../assets/svg/User=Off.svg";
import DropDown from "../../assets/svg/DropDown.svg";
import "./index.css";

const Header = () => {
  return (
    <div className="header">
      <div className="header__top">
        <div className="header__center">
          Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
          <Link className="header__center__link">ShopNow</Link>
        </div>
        <select defaultValue={0} className="header__center__language">
          <option>English</option>
          <option>Русский</option>
        </select>
      </div>
      <div className="header__bot">
        <h1 className="header__bot__exclusive">Exclusive</h1>
        <div className="header__bot__navbar">
          <Link
            to={"/"}
            className="header__bot__navbar__link header__bot__navbar__link-active"
          >
            Home
          </Link>
          <Link to={"/contacts"} className="header__bot__navbar__link">
            Contact
          </Link>
          <Link to={"/about"} className="header__bot__navbar__link">
            About
          </Link>
          <Link to={"/sign-up"} className="header__bot__navbar__link">
            Sign Up
          </Link>
        </div>
        <div className="header__bot__right">
          <div className="header__bot__right__search">
            <input type="search" placeholder="What are you looking for?" />
            <img src={SearchSVG} alt="search" />
          </div>
          <div className="header__bot__right__svg">
            <img src={SmallHeartSVG} alt="small-heart" />
            <img src={CartSVG} alt="cart" />
            <img src={UserOff} alt="user" />
          </div>
        </div>
      </div>
      <div className="header__optional">
        <div className="header__optional__list">
          <div className="header__optional__dropdown">
            <div>Woman's Fashion</div>
            <img src={DropDown} alt="drop-down" />
          </div>
          <div className="header__optional__dropdown">
            <div>Man's Fashion</div>
            <img src={DropDown} alt="drop-down" />
          </div>
          <div>Electronics</div>
          <div>Home & Lifestyle</div>
          <div>Medecine</div>
          <div>Sports & Outdoor</div>
          <div>Baby's & Toys</div>
          <div>Groceries & Pets</div>
          <div>Health & Beauty</div>
        </div>
        <HeaderSlider
          img1={HeaderSlide}
          img2={HeaderSlide}
          img3={HeaderSlide}
          img4={HeaderSlide}
          img5={HeaderSlide}
        />
      </div>
    </div>
  );
};

export default Header;
