import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>{"{ JA }"}</h1>
        <nav className="navbar">
          <ul>
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
          <h3>
            Searching for opportunites with a team that has a growth mindset
          </h3>
          <ul>
            <li>Always eager to learn, adapt, and grow</li>
            <li>Test my communication and team skills</li>
            <li>Have more authority and autonomy over the systems I build</li>
            <li>B.S. in Computer Engineering from CSULB</li>
          </ul>
          <a
            href="http://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            L
          </a>
          <a href="http://github.com" target="_blank" rel="noopener noreferrer">
            G
          </a>
          <a href="http://google.com" target="_blank" rel="noopener noreferrer">
            Email
          </a>
        </section>
        <section className="about-me">
          <img src="" alt="profile shot of joseph" />
        </section>
        <section className="highlighted-work">
          ram to lineup 1-line layout
        </section>
        <section className="closing-remarks">Say Hello to Me ;P</section>
      </main>
      <footer className="end-content">Designed by your boy</footer>
    </div>
  );
}

export default App;
