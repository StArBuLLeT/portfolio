import { useState, useRef } from 'react';
import './App.css';

const projects = [
  {
    id: 1,
    name: 'Movie App',
    description:
      'Application for searching movies and popular movies which also provides informations about the movie.',
    image: 'assets/img/movieapp1.png',
    code: 'https://github.com/StArBuLLeT/movie-app',
    demo: 'https://movie-app-c4d00.web.app/',
  },
  {
    id: 2,
    name: 'Portfolio',
    description: 'About this website',
    image: 'https://via.placeholder.com/150',
    code: 'https://github.com/StArBuLLeT/portfolio',
    demo: 'https://starbullet.github.io/portfolio/',
  },
];

function Projects() {
  const [selectedProjectIndex, setSelectedProjectIndex] = useState(0);
  return (
    <div className="row projects-section">
      <h3>PROJECTS</h3>
      <div className="col-md-6 border-right project-selection">
        <ul className="nav flex-column nav-pills">
          {projects.map((project, i) => {
            return (
              <li
                key={i}
                className={
                  i === selectedProjectIndex
                    ? 'nav-item project-list-active'
                    : 'nav-item'
                }
                onClick={() => setSelectedProjectIndex(i)}
              >
                {project.name}
              </li>
            );
          })}
        </ul>
      </div>
      <div className="col-md-6 project-details">
        <h3>{projects[selectedProjectIndex].name}</h3>
        <p>{projects[selectedProjectIndex].description}</p>
        <div className="project-buttons">
          <a
            href={projects[selectedProjectIndex].code}
            className="btn"
            target="_blank"
          >
            CODE
          </a>
          <a
            href={projects[selectedProjectIndex].demo}
            className="btn"
            target="_blank"
          >
            DEMO
          </a>
        </div>
      </div>
    </div>
  );
}

function Footer() {
  return (
    <footer class="footer" role="contentinfo">
      <div class="container">
        <div class="row">
          <div class="col-sm-6">
            <p class="mb-1">
              &copy; Copyright Kevin Fontanilla. All Rights Reserved
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

function App() {
  return (
    <>
      <main id="main">
        <section className="section site-portfolio">
          <div className="container">
            <div className="row mb-5 align-items-center">
              <div
                className="col-md-12 col-lg-6 mb-4 mb-lg-0"
                data-aos="fade-up"
              >
                <h1>KEVIN FONTANILLA</h1>
                <p className="mb-0">FULL-STACK SOFTWARE ENGINEER</p>
              </div>
            </div>

            <div className="row resume-section">
              <div className="col-md-9 resume-text">
                Adaptable Software Developer Continuously Improving Coding and
                Design Skills
              </div>
              <div className="col-md-3">
                <a href="resumePath" className="btn resume-button" download>
                  DOWNLOAD RESUME
                </a>
              </div>
            </div>

            <Projects />

            <div className="row references-section">
              <h3>REFERENCES</h3>
              <div className="col-md-6">
                <p>
                  EMAIL:
                  <span className="badge bg-secondary">
                    kevin.fontanilla50@gmail.com
                  </span>
                </p>
                <p>
                  LINKEDIN:
                  <span className="badge bg-secondary">
                    https://www.linkedin.com/in/kevin-fontanilla
                  </span>
                </p>
                <p>
                  GITHUB:
                  <span className="badge bg-secondary">
                    https://github.com/StArBuLLeT
                  </span>
                </p>
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </main>
    </>
  );
}

export default App;
