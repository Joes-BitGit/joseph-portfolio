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
            <li>Home</li>
            <li>Projects</li>
          </ul>
        </nav>
      </header>
      <main className="main-content">
        <section className="intro-blurb">
          <p>Greetings I'm-</p>
          <h2 className="intro-name">Joseph</h2>
          <h3 className="intro-description">
            Software Engineer under progress
          </h3>
          <h4>
            Searching for opportunites with a team that has a growth mindset
          </h4>
          <ul>
            <li>Always eager to learn, adapt, and grow</li>
            <li>Test my communication and team skills</li>
            <li>Have more authority and autonomy over the systems I build</li>
            <li>B.S. Computer Engineering from CSULB</li>
          </ul>
          <a
            href="http://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          <a href="http://github.com" target="_blank" rel="noopener noreferrer">
            Github
          </a>
          <a href="http://google.com" target="_blank" rel="noopener noreferrer">
            Email
          </a>
        </section>
        <section className="about-me">
          <h3 className="about-section">About Me</h3>
          <p>
            Yo! My name is Joseph Almeida, I've been close to a computer since
            an early age but did not start programming until I reached
            university.
          </p>
          <p>
            When I'm not coding I play games with my friends, work out, or when
            the weather permits some amateur astronomy
          </p>
          <img src="" alt="profile shot of Joseph" />
        </section>
        <section className="highlighted-work">
          <h3 className="projects">Highlighted Work</h3>
          <div className="parent">
            <div className="card 1">
              <h4>Pomodoro</h4>
              <p>25/5 Timer pumpkin style for the spooky season</p>
              <img src="" alt="timer" className="visual" />
            </div>
            <div className="card 2">
              <h4>Menu</h4>
              <p>
                Menu that creates, reads/searches, updates, and deletes items
                for a restaurant
              </p>
              <img src="" alt="menu builder" className="visual" />
            </div>
            <div className="card 3">
              <h4>Marvel Lookup</h4>
              <p>Marvel character search that uses the Marvel API</p>
              <img src="" alt="marvel lookup info" className="visual pink" />
            </div>
            <div className="card 4">
              <h4>Journal</h4>
              <p>Personal Journal to write thoughts and feelings down</p>
              <img src="" alt="journal" className="visual" />
            </div>
            <div className="card 5">
              <h4>Amatuer Astronomy</h4>
              <p>Future Project</p>
              <img src="" alt="screenshot of the timer" className="visual" />
            </div>
          </div>
        </section>
        <section className="closing-remarks">
          <h3 className="contact-info">Stay In Touch</h3>
          <p>Don't be a stranger ;P</p>
          <a
            href="http://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          <a href="http://github.com" target="_blank" rel="noopener noreferrer">
            Github
          </a>
          <a href="http://google.com" target="_blank" rel="noopener noreferrer">
            Email
          </a>
        </section>
      </main>
      <footer className="end-content">
        Designed by your boy
        <div className="attribution">
          <div>
            Icons made by{" "}
            <a
              href="https://www.flaticon.com/authors/creatype"
              title="Creatype"
            >
              Creatype
            </a>{" "}
            from{" "}
            <a href="https://www.flaticon.com/" title="Flaticon">
              www.flaticon.com
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
