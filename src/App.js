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
          <h4>
            Searching for opportunites with a team that has a growth mindset
          </h4>
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
          <p>
            Yo! My name is Joseph Almeida, I've been close to a computer since
            an early age but did not start programming until I reached
            university.
          </p>
          <p>
            When I'm not coding I play games with my friends, work out, or when
            the weather permits some amateur astronomy
          </p>
        </section>
        <section className="highlighted-work">
          <div className="parent white">
            <div className="box 1">1</div>
            <div className="box 2">2</div>
            <div className="box 3">3</div>
            <div className="box 4">4</div>
          </div>
        </section>
        <section className="closing-remarks">Say Hello to Me ;P</section>
      </main>
      <footer className="end-content">Designed by your boy</footer>
    </div>
  );
}

export default App;
