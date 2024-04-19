import React from "react";
import "./App.css";
import { VscGithub } from "react-icons/vsc";
import { GrInstagram } from "react-icons/gr";
import { BsFacebook } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { GiGraduateCap } from "react-icons/gi";
import { AiOutlineArrowUp } from "react-icons/ai";
import Main from "./main";
import workedWith from "./workedWith"

type Props = {};

const App : React.FC = (props: Props) => { 
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
                <a href="#workedWith" className="nav__link">
                  Worked With
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

        {/* <!--===== ABOUT =====--> */}
<section className="about section" id="about">
  <h2 className="section-title">About</h2>

  <div className="about__container bd-grid">
    <div className="about__content">
      <h2 className="about__subtitle">I'm Yahya SAADAOUI</h2>
      <span className="about__profession">
        Experienced Full Stack Engineer with a proven track record of
        delivering high-quality and scalable web applications.
        Possessing strong expertise in front-end frameworks (React,
        Angular, Vue...) and back-end frameworks
        (Node.js,Laravel,Symfony...), I bring a unique combination of
        technical and creative skills to every project. My passion for
        coding and drive to stay up-to-date with industry trends ensure
        that every project I take on is completed to the highest
        standards.
      </span>
<div className="about__social">
                <a
                  href="https://github.com/YahyaSaadaoui"
                  className="about__social-icon">
                  <VscGithub />
                </a>
                <a
                  href="https://web.facebook.com/yahya.saadaoui.509/"
                  className="about__social-icon">
                  <BsFacebook />
                </a>
                <a
                  href="https://www.instagram.com/dr_slow72/"
                  className="about__social-icon">
                  <GrInstagram />
                </a>
                <a
                  href="https://www.linkedin.com/in/yahya-saadaoui-76546322a/"
                  className="about__social-icon">
                  <BsLinkedin />
                </a>

              </div>
    </div>
    <div className="about__img">
      <img src="assets/me.png" alt="" />
    </div>
  </div>
</section>


        {/* <!--===== SKILLS =====--> */}
        <section className="skills section" id="skills">
          <h2 className="section-title">Skills</h2>

          <div className="skills__container bd-grid">
            <div className="skills__box">
              <div className="FrameWorks">
              <h3 className="skills__subtitle">FrameWorks</h3>
              <span className="skills__name">Next</span>
              <span className="skills__name">React</span>
              <span className="skills__name">Symfony</span>
              <span className="skills__name">Laravel</span>
              </div>

            <div className="backfront">
              <h3 className="skills__subtitle">Front-end / Back-end</h3>
              <span className="skills__name">Html</span>
              <span className="skills__name">CSS</span>
              <span className="skills__name">SCSS</span>
              <span className="skills__name">Bootstrap</span>
              <span className="skills__name">Javascript</span>
              <span className="skills__name">Python</span>
              <span className="skills__name">PHP</span>
              <span className="skills__name">C# / C++</span>
              <span className="skills__name">Java</span>
              </div>

              <div className="database">
              <h3 className="skills__subtitle">Data Bases</h3>
              <span className="skills__name">MySQL</span>
              <span className="skills__name">SQL</span>
              <span className="skills__name">Transact SQL</span>
              <span className="skills__name">PL/SQL</span>
              </div>

              <div className="Tools">
              <h3 className="skills__subtitle">Tools</h3>
              <span className="skills__name">Git</span>
              <span className="skills__name">GitHub</span>
              <span className="skills__name">GitLab</span>
              <span className="skills__name">Docker</span>
              </div>

              <div className="IDE">
              <h3 className="skills__subtitle">IDE</h3>
              <span className="skills__name">Visual studio</span>
              <span className="skills__name">Visual studio code</span>
              <span className="skills__name">SQL Manager</span>
              <span className="skills__name">Android Studio</span>
              <span className="skills__name">PhpStorme</span>
              <span className="skills__name">Sublime</span>
              </div>
              
              <div className="Designing">
              <h3 className="skills__subtitle">
                Designing & Video Editing Tools
              </h3>
              <span className="skills__name">Photoshop</span>
              <span className="skills__name">Adobe premier</span>
              <span className="skills__name">Adobe Illustrator</span>
              <span className="skills__name">Adobe Audition/Audacity</span>
              </div>

              <div className="OperatingSYS">
              <h3 className="skills__subtitle">Operating Systems</h3>
              <span className="skills__name">Ubuntu</span>
              <span className="skills__name">Kali Linux</span>
              </div>
              
              <div className="Other">
              <h3 className="skills__subtitle">Other</h3>
              <span className="skills__name">Notion</span>
                <span className="skills__name">Figma</span>
              </div>
            </div>
          </div>
        </section>

        {/* <!--===== PORTFOLIO =====--> */}
        <section className="portfolio section" id="portfolio">
          <div>
            <h2 className="section-title">Portfolio</h2>

            <div className="portfolio__container bd-grid">
              <div
                onClick={() =>
                  (window.location.href = "https://kamagaming.ma/")
                }
                className="portfolio__img">
                <img
                  src="assets\kamagaming.png"
                  alt="Gaming Portal to a real gaming pc with high end performance , with pre installed games and a lot of features."
                />
                <h3>KamaGaming</h3>
                <div className="portfolio__link">
                  <a href="#" className="portfolio__link-name">
                    {" "}
                  </a>
                </div>
              </div>
                            <div
                onClick={() =>
                  (window.location.href = "https://tajrayancars.com/")
                }
                className="portfolio__img">
                <img
                  src="assets\tajrayancar.png"
                  alt="Car Rental App"
                />
                <h3>Taj Rayan Cars</h3>
                <div className="portfolio__link">
                  <a href="#" className="portfolio__link-name">
                    {" "}
                  </a>
                </div>
              </div>
  
              <div                 onClick={() =>
                  (window.location.href = "https://ekspecto.com")
                } className="portfolio__img">
                <img
                  src="assets\ekspecto.jpg"
                  alt="Social App"
                />
                <h3>Ekspecto</h3>
                <div className="portfolio__link">
                  <a href="#" className="portfolio__link-name">
                    {" "}
                  </a>
                </div>
              </div>
                            <div
                onClick={() =>
                  (window.location.href = "https://cityweather.netlify.app")
                }
                className="portfolio__img">
                <img
                  src="assets\weather_forecastapp.JPG"
                  alt="WeatherForecastapp"
                />
                <h3>Weather Forecast App</h3>
                <div className="portfolio__link">
                  <a href="#" className="portfolio__link-name">
                    {" "}
                  </a>
                </div>
              </div>
              <div
                onClick={() =>
                  (window.location.href = "https://projetx.netlify.app")
                }
                className="portfolio__img">
                <img src="assets/projectx.JPG" alt="games web site" />
                <h3>Games Website</h3>
                <div className="portfolio__link">
                  <a href="#" className="portfolio__link-name">
                    {" "}
                  </a>
                </div>
              </div>
              <div
                onClick={() =>
                  (window.location.href = "https://e-commerce-te.netlify.app")
                }
                className="portfolio__img">
                <img src="assets/ecom.png" alt="e-commerce-app" />
                <h3>E-Commerce App</h3>
                <div className="portfolio__link">
                  <a href="#" className="portfolio__link-name">
                    {" "}
                  </a>
                </div>
              </div>
              <div
                onClick={() =>
                  (window.location.href = "https://storeofnike.netlify.app")
                }
                className="portfolio__img">
                <img src="assets/NIkeStore.png" alt="Nike Store" />
                <h3>Nike Store</h3>
                <div className="portfolio__link">
                  <a href="#" className="portfolio__link-name">
                    {" "}
                  </a>
                </div>
              </div>
              <div
                onClick={() =>
                  (window.location.href = "https://todoreactawebpp.netlify.app")
                }
                className="portfolio__img">
                <img
                  src="assets/to do app react screen shot .png"
                  alt="Todo-App"
                />
                <h3>React ToDo Web App </h3>
                <div className="portfolio__link">
                  <a href="#" className="portfolio__link-name">
                    {" "}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* ========Worked With==========*/}
        <section className="workedWith section" id="workedWith">
        <div>
          <h2 className="section-title">Companies I have Worked With</h2>

          <div className="workedWith__container bd-grid">
            <div
              onClick={() =>
                (window.location.href = "https://kamagaming.ma/")
              }
              className="workedWith__img">
              <img
                src="assets\kamagaminglogo.png"
                alt="Gaming Portal to a real gaming pc with high end performance , with pre installed games and a lot of features."
              />
              <h3></h3>
              <div className="workedWith__link">
                <a href="#" className="workedWith__link-name">
                  {" "}
                </a>
              </div>
            </div>

            <div
              onClick={() =>
                (window.location.href = "https://kamagaming.ma/")
              }
              className="workedWith__img tajrayancar">
              <img
                src="assets\tajrayancarlogo.png"
                alt="Gaming Portal to a real gaming pc with high end performance , with pre installed games and a lot of features."
              />
              <h3></h3>
              <div className="workedWith__link">
                <a href="#" className="workedWith__link-name">
                  {" "}
                </a>
              </div>
            </div>
            <div
              onClick={() =>
                (window.location.href = "https://kamagaming.ma/")
              }
              className="workedWith__img creativecanalmedia">
              <img
                src="assets\creativecanalmedialogo.jpeg"
                alt="Gaming Portal to a real gaming pc with high end performance , with pre installed games and a lot of features."
              />
              <h3></h3>
              <div className="workedWith__link">
                <a href="#" className="workedWith__link-name">
                  {" "}
                </a>
              </div>
            </div>
            <div
              onClick={() =>
                (window.location.href = "https://kamagaming.ma/")
              }
              className="workedWith__img">
              <img
                src="assets\pixelshadelogo.png"
                alt="Gaming Portal to a real gaming pc with high end performance , with pre installed games and a lot of features."
              />
              <h3></h3>
              <div className="workedWith__link">
                <a href="#" className="workedWith__link-name">
                  {" "}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
        {/* <!--===== CONTACT =====--> */}
        <section className="contact section" id="contact">
          <h2 className="section-title">Contact</h2>

          <div className="contact__container bd-grid">
            <div className="contact__info">
              <h3 className="contact__subtitle">EMAIL</h3>
              <span className="contact__text">yahyasaadaoui2019@gmail.com</span>

              <h3 className="contact__subtitle">PHONE</h3>
              <span className="contact__text">+212 0648280812</span>

              <h3 className="contact__subtitle">ADRESS</h3>
              <span className="contact__text">Morroco</span>

              <h3 className="contact__subtitle">My Cv</h3>
              <span className="contact__text">                <a
                  href="assets/yahya-saadaoui.pdf"
                  download
                  className="contact__text">Download
                </a></span>
            </div>

            <form
              action="https://formsubmit.co/2eb8e0fdb6665fc29b687cda23375574"
              method="POST"
              className="contact__form">
              <div className="contact__inputs">
                <input
                  type="text"
                  placeholder="Name"
                  className="contact__input"
                  required
                />
                <input
                  type="mail"
                  placeholder="Email"
                  className="contact__input"
                  required
                />
              </div>

              <textarea
                name=""
                id=""
                cols={0}
                rows={10}
                className="contact__input"
                required></textarea>

              <input type="submit" value="Send" className="contact__button" />
            </form>
          </div>
        </section>
      </main>
             
      {/* <!--===== FOOTER =====--> */}
      <footer className="footer section">
        <div className="footer__container bd-grid">
          <div className="footer__data">
            <h2 className="footer__title">EXPLORE</h2>
            <ul>
              <li>
                <a href="#home" className="footer__link">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="footer__link">
                  About
                </a>
              </li>
              <li>
                <a href="#skills" className="footer__link">
                  Skills
                </a>
              </li>
              <li>
                <a href="#portfolio" className="footer__link">
                  Portfolio
                </a>
              </li>
              <li>
                <a href="#workedWith" className="footer__link">
                  Contact
                </a>
              </li>
              <li>
                <a href="#Contact" className="footer__link">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div className="footer__data">
            <h2 className="footer__title">FOLLOW</h2>
            <a
              href="https://github.com/YahyaSaadaoui"
              className="footer__social">
              <VscGithub />
            </a>
            <a
              href="https://web.facebook.com/hafsa.elomrani.9/"
              className="footer__social">
              <BsFacebook />
            </a>
            <a
              href="https://www.instagram.com/dr_slow72/"
              className="footer__social">
              <GrInstagram />
            </a>
            <a
              href="https://www.linkedin.com/in/yahya-saadaoui-76546322a/"
              className="footer__social">
              <BsLinkedin />
            </a>
            <a
              href="assets/yahya-saadaoui.pdf"
              download
              className="footer__social">
              <GiGraduateCap />
            </a>
          </div>
        </div>
      </footer>
      <Main />
    </>
  );
};

export default App;
