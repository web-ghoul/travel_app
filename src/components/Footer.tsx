import { BsTwitterX } from "react-icons/bs";
import { CiLocationOn, CiMail } from "react-icons/ci";
import { FaFacebookF, FaLinkedin } from "react-icons/fa";
import { FiPhone } from "react-icons/fi";

const Footer = () => {
  return (
    <footer>
      <div className="top">
        <img src="/public/images/logo.svg" alt="" />
        <h3>ترافل للسياحة</h3>
      </div>
      <div className="middle">
        <h6>
          يوفر الموقع معلومات شاملة عن الوجهة، بما في ذلك الصور والفيديو. يسهل
          حجز رحلات وأنشطة وإقامة.
        </h6>
        <div className="links">
          <h6>اللأقسام:</h6>
          <ul>
            <li>
              <a href="">لماذا نحن؟</a>
            </li>
            <li>
              <a href="">رحلاتنا المميزة</a>
            </li>
            <li>
              <a href="">اراء العملاء</a>
            </li>
          </ul>
        </div>
        <div className="links contact_us">
          <h6>تواصل معنا:</h6>
          <ul>
            <li>
              <CiMail />
              <span>Info@gmail.com</span>
            </li>
            <li>
              <FiPhone />
              <span>+201201098757</span>
            </li>
            <li>
              <CiLocationOn />
              <span>123 Street, City, Country</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="bottom">
        <div className="social">
          <a href="">
            <FaLinkedin />
          </a>
          <a href="">
            <BsTwitterX />
          </a>
          <a href="">
            <FaFacebookF />
          </a>
        </div>
        <h6>جميع الحقوق محفوظة © {new Date().getFullYear()}</h6>
      </div>
    </footer>
  );
};

export default Footer;
