import React from "react";
import "../App.css";
import { VscGithub } from "react-icons/vsc";
import { GrInstagram } from "react-icons/gr";
import { BsFacebook } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { GiGraduateCap } from "react-icons/gi";
import { AiOutlineArrowUp } from "react-icons/ai";


type Props = {};

const Home : React.FC = () => { 
    return (
      <>
      <header className="l-header">
        <nav className="nav bd-grid">
          <div>
            <a href="#" className="nav__logo">
              Yahya SAADAOUI
            </a>
          </div>

          <div className="nav__menu" id="nav-menu">
            <ul className="nav__list">
              <li className="nav__item">
                <a href="#home" className="nav__link active">
                  Home
                </a>
              </li>
              <li className="nav__item">
                <a href="#about" className="nav__link">
                  About
                </a>
              </li>
              <li className="nav__item">
                <a href="#skills" className="nav__link">
                  Skills
                </a>
              </li>
              <li className="nav__item">
                <a href="#portfolio" className="nav__link">
                  Portfolio
                </a>
              </li>
              <li className="nav__item">
                <a href="#contact" className="nav__link">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div className="nav__toggle" id="nav-toggle">
            <i className="bx bx-menu"></i>
          </div>
        </nav>
      </header>

      <main className="l-main">
        {/* <!--===== HOME =====--> */}
        <section className="home" id="home">
          <div className="home__container bd-grid">
            <h1 className="home__title">
              <span>HE</span>
              <br />
              LLO.
            </h1>

            <div className="home__scroll">
              <a href="#about" className="home__scroll-link">
                <AiOutlineArrowUp />
                Scroll down
              </a>
            </div>

            <img src="" alt="" className="home__img" />
          </div>
        </section>
              
            </main>
            </>
  );
};

export default Home;