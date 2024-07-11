import React from "react";

import QrSvg from "../../assets/svg/Qr Code.svg";
import GoogleSvg from "../../assets/svg/GooglePlay.svg";
import AppStoreSvg from "../../assets/svg/AppStore.svg";
import FacebookSvg from "../../assets/svg/Icon-Facebook.svg";
import TwitterSvg from "../../assets/svg/Icon-Twitter.svg";
import InstagramSvg from "../../assets/svg/icon-instagram.svg";
import LinkedInSvg from "../../assets/svg/Icon-Linkedin.svg";
import CopyrightSvg from "../../assets/svg/icon-copyright.svg";

import "./index.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__main">
        <div className="footer__main__col">
          <div className="footer__main__h1">Exclusive</div>
          <div className="footer__main__h2">Subscribe</div>
          <div>Get 10% off your first order</div>
          <div>
            <input type="text" placeholder="Enter your email"></input>
            <img />
          </div>
        </div>
        <div className="footer__main__col">
          <div className="footer__main__h2">Support</div>
          <div>
            111 Bijoy sarani, Dhaka,
            <br /> DH 1515, Bangladesh.
          </div>
          <div>exclusive@gmail.com</div>
          <div>+88015-88888-9999</div>
        </div>
        <div className="footer__main__col">
          <div className="footer__main__h2">Account</div>
          <div>My Account</div>
          <div>Login / Register</div>
          <div>Cart</div>
          <div>Wishlist</div>
          <div>Shop</div>
        </div>
        <div className="footer__main__col">
          <div className="footer__main__h2">Quick Link</div>
          <div>Privacy Policy</div>
          <div>Terms Of Use</div>
          <div>FAQ</div>
          <div>Contact</div>
        </div>
        <div className="footer__main__col">
          <div className="footer__main__h2">Downaload App</div>
          <div>
            <div className="footer__main__save">
              Save $3 with App New User Only
            </div>
            <div className="footer__main__img">
              <img src={QrSvg} alt="qr-code" />
              <div className="footer__main__img-2">
                <img src={GoogleSvg} alt="google-play" />
                <img src={AppStoreSvg} alt="app-store" />
              </div>
            </div>
          </div>
          <div className="footer__main__society">
            <img src={FacebookSvg} alt="facebook" />
            <img src={TwitterSvg} alt="twitter" />
            <img src={InstagramSvg} alt="instagram" />
            <img src={LinkedInSvg} alt="linked-in" />
          </div>
        </div>
      </div>
      <div className="footer__bot">
        <img src={CopyrightSvg} alt="copyright" />
        <div>Copyright Rimel 2022. All right reserved</div>
      </div>
    </div>
  );
};

export default Footer;
