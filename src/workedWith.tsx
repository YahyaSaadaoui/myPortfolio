import React from 'react';

const workedWith : React.FC = () => {
  return (
    <div>
      <section className="portfolio section" id="portfolio">
        <div>
          <h2 className="section-title">Companies I have Worked With</h2>

          <div className="portfolio__container bd-grid">
            <div
              onClick={() =>
                (window.location.href = "https://kamagaming.ma/")
              }
              className="portfolio__img">
              <img
                src="assets\kamagaminglogo.png"
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
                (window.location.href = "https://kamagaming.ma/")
              }
              className="portfolio__img">
              <img
                src="assets\tajrayancarslogo.png"
                alt="Gaming Portal to a real gaming pc with high end performance , with pre installed games and a lot of features."
              />
              <h3>Taj Rayan Car</h3>
              <div className="portfolio__link">
                <a href="#" className="portfolio__link-name">
                  {" "}
                </a>
              </div>
            </div>
            <div
              onClick={() =>
                (window.location.href = "https://kamagaming.ma/")
              }
              className="portfolio__img">
              <img
                src="assets\creativecanalmedia.png"
                alt="Gaming Portal to a real gaming pc with high end performance , with pre installed games and a lot of features."
              />
              <h3>Creative Canal Media</h3>
              <div className="portfolio__link">
                <a href="#" className="portfolio__link-name">
                  {" "}
                </a>
              </div>
            </div>
            <div
              onClick={() =>
                (window.location.href = "https://kamagaming.ma/")
              }
              className="portfolio__img">
              <img
                src="assets\pixelshadelogo.png"
                alt="Gaming Portal to a real gaming pc with high end performance , with pre installed games and a lot of features."
              />
              <h3>Pixel Shade</h3>
              <div className="portfolio__link">
                <a href="#" className="portfolio__link-name">
                  {" "}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default workedWith;
