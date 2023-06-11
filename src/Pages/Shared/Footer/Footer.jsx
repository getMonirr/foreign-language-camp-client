import CampContainer from "../../../components/Shared/CampContainer";
import Logo from "../../../assets/logo/camp-logo-dark.svg";
import { FaFacebook, FaLinkedin, FaTwitter, FaYoutube } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div className="bg-camp-bg-2">
        <CampContainer>
          <footer className="footer p-10 bg-camp-bg-2 text-white py-20 bg-opacity-80">
            <div>
              <img src={Logo} alt="logo" />
              <p>
                Foreign Language Camp
                <br />A Summer vacation Camp for Extra curriculum
              </p>
            </div>
            <div>
              <span className="footer-title">Address</span>
              <p>Level-8, 43, Banani, Dhaka</p>
              <p>Support: support@foreign.lan.camp.com</p>
              <p>(Available: Sat - Thu, 10:00 AM To 7:00 PM)</p>
            </div>
            <div>
              <span className="footer-title">Company</span>
              <a className="link link-hover">About us</a>
              <a className="link link-hover">Contact</a>
              <a className="link link-hover">Jobs</a>
            </div>
            <div>
              <span className="footer-title">Newsletter</span>
              <div className="form-control lg:w-80">
                <label className="label">
                  <span className="label-text text-white">
                    Enter your email address
                  </span>
                </label>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="username@site.com"
                    className="input input-bordered w-full pr-16 text-black"
                  />
                  <button className="btn bg-camp-primary text-white hover:text-black absolute top-0 right-0 rounded-l-none">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
          </footer>
        </CampContainer>
        <div className="bg-camp-bg-2">
          <CampContainer>
            <div className="footer footer-center p-10 bg-camp-bg-2 text-base-content rounded">
              <div>
                <div className="grid grid-flow-col gap-4">
                  <Link to="">
                    <FaFacebook className="h-6 w-6 hover:text-camp-secondary text-white transition-all" />
                  </Link>
                  <Link to="">
                    <FaYoutube className="h-6 w-6 hover:text-camp-secondary text-white transition-all" />
                  </Link>
                  <Link to="">
                    <FaTwitter className="h-6 w-6 hover:text-camp-secondary text-white transition-all" />
                  </Link>
                  <Link to="">
                    <FaLinkedin className="h-6 w-6 hover:text-camp-secondary text-white transition-all" />
                  </Link>
                </div>
              </div>
              <div>
                <p className="text-white">Copyright © 2023 - Foreign Language Camp</p>
              </div>
            </div>
          </CampContainer>
        </div>
      </div>
    </>
  );
};

export default Footer;
