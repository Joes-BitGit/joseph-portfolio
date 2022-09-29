import { useState } from "react";
import "./App.css";
import "./index.css";

function App() {
  const [mobileNavMenu, setMobileNavMenu] = useState(false);

  const toggleMobileNav = () => {
    setMobileNavMenu(!mobileNavMenu);
  };

  return (
    <div className="App">
      <header className="App-header primary-header flex">
        <p className="logo-initials">{"{ JA }"}</p>

        <button
          className={`mobile-nav-toggle ${mobileNavMenu ? "active" : ""}`}
          /* looks for id primary-navigation */
          aria-controls="primary-navigation"
          aria-expanded={mobileNavMenu}
          onClick={toggleMobileNav}
        >
          <span className="sr-only">Menu</span>
        </button>

        <nav className="navbar">
          <ul
            id="primary-navigation"
            className={`primary-navigation flex ${
              mobileNavMenu ? "active-mobile-menu" : ""
            }`}
          >
            <li className="nav-link-item">Home</li>
            <li className="nav-link-item">Projects</li>
          </ul>
        </nav>
      </header>
      <main className="main-content">
        <section className="intro-blurb">
          <p className="greeting">
            Greetings I'm-
            <h2 className="intro-name">Joseph</h2>
          </p>

          <h3 className="intro-description">A Software Engineer.</h3>
          <h4 className="intro-sub">
            Searching for opportunites with a team that has a growth mindset
          </h4>
          <ul className="intro-list">
            <li>📈 Always eager to learn, adapt, and grow</li>
            <li>🗣 Test my interpersonal and team skills</li>
            <li>
              ✍️ Have more authority and autonomy over the systems I build
            </li>
            <li>📚 B.S. Computer Engineering from CSULB</li>
          </ul>
          <div className="parent-info-links">
            <a
              href="http://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="info-links"
            >
              LinkedIn
            </a>
            <a
              href="http://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="info-links"
            >
              Github
            </a>
            <a
              href="http://google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="info-links"
            >
              Email
            </a>
          </div>
        </section>
        <section className="about-section">
          <h3 className="about-me">About Me</h3>
          <p className="about-me-first">
            Yo! My name is Joseph Almeida, I've been close to a computer since
            an early age but did not start programming until I reached
            university. TAlk about your love of games and smartphones
          </p>
          <p className="about-me-second">
            When I'm not coding I play games with my friends, work out, or when
            the weather permits some amateur astronomy
          </p>
          <img src="" alt="profile shot of Joseph" />
        </section>
        <section className="highlighted-work">
          <h3 className="projects">Highlighted Work</h3>
          <div className="parent">
            <div className="card 1">
              <h4 className="card-title">Pomodoro</h4>
              <p className="card-desc">
                25/5 Timer pumpkin style for the spooky season
              </p>
              <img src="" alt="timer" className="visual" />
            </div>
            <div className="card 2">
              <h4 className="card-title">Menu</h4>
              <p className="card-desc">
                Menu that creates, reads/searches, updates, and deletes items
                for a restaurant
              </p>
              <img src="" alt="menu builder" className="visual" />
            </div>
            <div className="card 3">
              <h4 className="card-title">Marvel Lookup</h4>
              <p className="card-desc">
                Marvel character search that uses the Marvel API
              </p>
              <img src="" alt="marvel lookup info" className="visual pink" />
            </div>
            <div className="card 4">
              <h4 className="card-title">Journal</h4>
              <p>Personal Journal to write thoughts and feelings down</p>
              <img src="" alt="journal" className="visual" />
            </div>
            <div className="card 5">
              <h4 className="card-title">Amatuer Astronomy</h4>
              <p className="card-desc">Future Project</p>
              <img src="" alt="screenshot of the timer" className="visual" />
            </div>
            <div className="card 6">
              <h4 className="card-title">Link to Freelance Projects</h4>
              <p className="card-desc">Future Project</p>
              <span>Perfecto Foods</span>
              <span>LA Costa Website</span>
              <span>100 Devs websites e.g Beauty Salon, etc.</span>
              <img src="" alt="screenshot of the timer" className="visual" />
            </div>
          </div>
        </section>
        <section className="closing-remarks">
          <h3 className="contact-info">Stay In Touch</h3>
          <p className="contact-sub">Don't be a stranger ;P</p>
          <div className="parent-info-links">
            <a
              href="http://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="info-links"
            >
              LinkedIn
            </a>
            <a
              href="http://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="info-links"
            >
              Github
            </a>
            <a
              href="http://google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="info-links"
            >
              Email
            </a>
          </div>
        </section>
      </main>
      <footer className="end-content">
        <span>Designed by your boy</span>
        <div className="attribution">
          <div>
            Icons made by{" "}
            <a
              href="https://www.flaticon.com/authors/creatype"
              title="Creatype"
              className="footer-attribution"
            >
              Creatype
            </a>{" "}
            from{" "}
            <a
              href="https://www.flaticon.com/"
              title="Flaticon"
              className="footer-attribution"
            >
              www.flaticon.com
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
