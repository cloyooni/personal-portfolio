"use client"

import { useState, useEffect } from "react"
import "./App.css"
import { initScrollAnimations } from "./animations"

function App() {
  const [activeTab, setActiveTab] = useState("technical")

  useEffect(() => {
    initScrollAnimations()
  }, [])

  return (
    <div className="portfolio">
      {/* Header/Navigation */}
      <header className="header">
        <div className="container header-container">
          <div className="logo">
            <a href="/" className="logo-link">
              <span className="logo-text">HCY</span>
            </a>
          </div>
          <nav className="nav">
            <a href="#about" className="nav-link">
              About
            </a>
            <a href="#experience" className="nav-link">
              Experience
            </a>
            <a href="#projects" className="nav-link">
              Projects
            </a>
            <a href="#contact" className="nav-link">
              Contact
            </a>
          </nav>
          <div className="header-actions">
            <a href="/resume.pdf" download className="btn btn-outline">
              ↓ Resume
            </a>
            <div className="social-links">
              <a href="https://github.com" target="_blank" rel="noreferrer" className="social-link">
                <img src="/github.png" alt="GitHub" />
              </a>
              <a
                href="https://www.linkedin.com/in/hana-chloe-yoon"
                target="_blank"
                rel="noreferrer"
                className="social-link"
              >
                <img src="/linkedin.png" alt="LinkedIn" />
              </a>
              <a href="mailto:ina.chloe@gmail.com" className="social-link">
                <img src="/email.png" alt="Email" />
              </a>
            </div>
          </div>
        </div>
      </header>

      <main className="main">
        {/* Hero Section */}
        <section className="hero section">
          <div className="container">
            <div className="hero-content">
              <div className="hero-text">
                <h1 className="hero-title">
                  <span className="hero-name">Hana</span>
                  <span className="hero-name accent">Chloe</span>
                  <span className="hero-name">Yoon</span>
                </h1>
                <p className="hero-subtitle">
                  Full Stack Developer | UCLA Computer Science '26 | Passionate about building real-time apps, intuitive interfaces, and inclusive tech communities.
                </p>
                <div className="hero-buttons">
                  <a href="#contact" className="btn btn-primary">
                    Contact me →
                  </a>
                  <a href="#projects" className="btn btn-outline">
                    View my work
                  </a>
                </div>
                <div className="hero-contact">
                  <a href="mailto:ina.chloe@gmail.com" className="contact-link">
                    ✉️ ina.chloe@gmail.com
                  </a>
                  <a href="tel:7144016879" className="contact-link">
                    (714) 401-6879
                  </a>
                </div>
              </div>
              <div className="hero-image">
                <div className="profile-image">
                  <img
                    src="/profilepic.png"
                    alt="Hana Chloe Yoon"
                    className="profile-img"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="about section bg-light">
          <div className="container">
            <div className="section-header">
              <h2 className="section-title">About Me</h2>
              <div className="section-divider"></div>
            </div>
            <div className="about-content">
              <div className="about-col">
                <h3 className="about-subtitle">Education</h3>
                <div className="card">
                  <div className="card-content">
                    <div className="education-header">
                      <div className="space-y-2">
                        <h4 className="education-title">University of California, Los Angeles (UCLA)</h4>
                        <p className="education-degree">Bachelor of Science, Computer Science</p>
                        <p className="education-courses">Relevant Coursework: Data Structures, Algorithms, Operating Systems, Software Engineering, Web Development</p>
                      </div>
                      <div className="education-date">
                        <p>Expected June 2026</p>
                        <p className="education-location">Los Angeles, California</p>
                      </div>
                    </div>
                  </div>
                </div>

                <h3 className="about-subtitle skills-title">Technical Skills</h3>
                <div className="skills-list">
                  <span className="skill-badge">C++</span>
                  <span className="skill-badge">Java</span>
                  <span className="skill-badge">JavaScript</span>
                  <span className="skill-badge">Python</span>
                  <span className="skill-badge">C#</span>
                  <span className="skill-badge">React</span>
                  <span className="skill-badge">HTML</span>
                  <span className="skill-badge">CSS</span>
                  <span className="skill-badge">Node.js</span>
                  <span className="skill-badge">Express.js</span>
                  <span className="skill-badge">MongoDB</span>
                  <span className="skill-badge">Firebase</span>
                  <span className="skill-badge">Unity</span>
                  <span className="skill-badge">Assembly</span>
                </div>
              </div>
              <div className="about-col">
                <h3 className="about-subtitle">My Story</h3>
                <div className="about-story">
                  <p>
                    I'm a Computer Science student at UCLA with a passion for creating innovative solutions through
                    technology. My journey began when I founded Little Miss Coders, an organization dedicated to
                    empowering young girls in STEM.
                  </p>
                  <p>
                    At UCLA, I've had the opportunity to work on exciting projects, from developing a point-and-click
                    survival horror game to creating an interactive 3D maze using Augmented Reality. I'm particularly
                    interested in the intersection of technology and user experience.
                  </p>
                  <p>
                    Beyond coding, I'm a dedicated volleyball player who has served as team captain for seven years.
                    This experience has taught me valuable leadership skills that I bring to every project I work on.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="experience section">
          <div className="container">
            <div className="section-header">
              <h2 className="section-title">Experience</h2>
              <div className="section-divider"></div>
            </div>

            <div className="tabs">
              <div className="tabs-header">
                <button
                  className={`tab-btn ${activeTab === "technical" ? "active" : ""}`}
                  onClick={() => setActiveTab("technical")}
                >
                  Technical Experience
                </button>
                <button
                  className={`tab-btn ${activeTab === "leadership" ? "active" : ""}`}
                  onClick={() => setActiveTab("leadership")}
                >
                  Leadership Experience
                </button>
              </div>

              <div className="tabs-content">
                <div className={`tab-panel ${activeTab === "technical" ? "active" : ""}`}>
                  <div className="card">
                    <div className="card-content">
                      <div className="experience-header">
                        <div>
                          <h3 className="experience-title">Society of Women's Engineering (SWE)</h3>
                          <p className="experience-position">Web Development Committee</p>
                        </div>
                        <div className="experience-date">September 2024 - Current</div>
                      </div>
                      <div className="experience-details">
                        <ul className="experience-list">
                          <li>Developing a SWE membership portal that streamlines event sign in, integrating backend APIs and databases to track member information and progress, and encourage involvement with SWE events (1,400+ students)</li>
                          <li>Create and implement the design of SWE Glassdoor website, a community-focused career preparation platform (React, HTML, CSS)</li>
                          <li>Collaborate with backend engineers to connect API endpoints and build a mentor-mentee matching algorithm to enhance user experience</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="card">
                    <div className="card-content">
                      <div className="experience-header">
                        <div>
                          <h3 className="experience-title">Evening with Industry (EWI)</h3>
                          <p className="experience-position">Web Developer</p>
                        </div>
                        <div className="experience-date">September 2024 - January 2025</div>
                      </div>
                      <div className="experience-details">
                        <ul className="experience-list">
                          <li>Designed and launched the 2025 Evening with Industry website, featuring event details and a registration system for UCLA's largest student-run networking event, serving 300+ participants and 40 companies (React, HTML, and CSS)</li>
                          <li>Developed a dynamic table-sorting algorithm to efficiently match students with company representatives based on preferences</li>
                          <li>Created parity with both desktop and mobile implementations, ensuring consistency in functionality and accessibility to expand viewer reach</li>
                          <li>Optimized user interface by redesigning layout, color schemes, and visual elements to improve user navigation and information attainability</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="card">
                    <div className="card-content">
                      <div className="experience-header">
                        <div>
                          <h3 className="experience-title">Engineers for Professional Inclusion Conference (EPIC)</h3>
                          <p className="experience-position">Web Developer Lead</p>
                        </div>
                        <div className="experience-date">January 2025 - Current</div>
                      </div>
                      <div className="experience-details">
                        <ul className="experience-list">
                          <li>Producing a website requested by SWE's Advocacy Committee that exhibits EPIC's purpose and event details, increasing attendee usability</li>
                          <li>Integrate provided Figma designs into a responsive web interface for users to view and access essential information</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="card">
                    <div className="card-content">
                      <div className="experience-header">
                        <div>
                          <h3 className="experience-title">UCLA Samueli School of Engineering</h3>
                          <p className="experience-position">
                            E96: Game Development in Unity – Team Lead and UI Developer
                          </p>
                        </div>
                        <div className="experience-date">September 2023 - December 2023</div>
                      </div>
                      <div className="experience-details">
                        <ul className="experience-list">
                          <li>Led a team to develop a point-and-click survival horror game using Unity and C#</li>
                          <li>
                            Integrated architectural elements, physics, and player mechanics to ensure seamless gameplay
                            and functionality in a fast-paced environment
                          </li>
                          <li>
                            Designed an immersive User Interface aligned with the game themes, enhancing user experience
                            with multiple interactive menus
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="card">
                    <div className="card-content">
                      <div className="experience-header">
                        <div>
                          <h3 className="experience-title">UCLA Samueli School of Engineering</h3>
                          <p className="experience-position">CS 31 and 32 Courses</p>
                        </div>
                        <div className="experience-date">September 2023 - March 2024</div>
                      </div>
                      <div className="experience-details">
                        <ul className="experience-list">
                          <li>
                            Developed an optimized navigation system that generates tours for UCLA, creating the most
                            effective route that explains significant places through the implementation of hashmaps,
                            linked lists, vectors, and a structural hierarchy of inheritance and polymorphism
                          </li>
                          <li>
                            Created an interactive game that allows the player to control character behaviors against
                            computer-generated opponents, applying object-oriented programming principles, dynamic
                            memory allocation, and pointers
                          </li>
                          <li>
                            Designed a data structure Map Project that represents a collection of students and their
                            GPAs with arrays, pointers, and linked lists
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                <div className={`tab-panel ${activeTab === "leadership" ? "active" : ""}`}>
                  <div className="card">
                    <div className="card-content">
                      <div className="experience-header">
                        <div>
                          <h3 className="experience-title">Little Miss Coders</h3>
                          <p className="experience-position">Founder and President</p>
                        </div>
                        <div className="experience-date">August 2020 - Current</div>
                      </div>
                      <div className="experience-details">
                        <ul className="experience-list">
                          <li>
                            Founded an organization that empowers young girls in STEM by teaching programming and
                            problem-solving skills
                          </li>
                          <li>
                            Collaborated with local elementary schools, developing interactive lesson plans and
                            organizing monthly coding workshops for 20+ students
                          </li>
                          <li>
                            Secured $850 in funding through a grant proposal to expand the program's reach, promoting
                            diversity and inclusion in technology
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="card">
                    <div className="card-content">
                      <div className="experience-header">
                        <div>
                          <h3 className="experience-title">
                            UCLA Alumni Scholars Club (ASC) and Gold Shield Recipient
                          </h3>
                          <p className="experience-position">Gold Shield Scholar</p>
                        </div>
                        <div className="experience-date">September 2023 - Current</div>
                      </div>
                      <div className="experience-details">
                        <ul className="experience-list">
                          <li>
                            One of fifty students to be selected for ASC out of 1,200 applicants and one of three
                            Freshmen awarded the Gold Shield Scholarship
                          </li>
                          <li>
                            Chosen for embracing the values of community, leadership, and service through the
                            involvement in campus events and organizations
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="card">
                    <div className="card-content">
                      <div className="experience-header">
                        <div>
                          <h3 className="experience-title">High School, Club, and College Club Volleyball</h3>
                          <p className="experience-position">Team Captain</p>
                        </div>
                        <div className="experience-date">November 2018 - Current</div>
                      </div>
                      <div className="experience-details">
                        <ul className="experience-list">
                          <li>
                            Voted as Team Captain across seven years of volleyball experience, fostering positive
                            collaboration and team morale
                          </li>
                          <li>
                            Strengthened adaptability to dynamic environments, enhancing decision-making under pressure
                            while promoting strategic thinking
                          </li>
                          <li>
                            Successfully led teams to victory by improving team cohesion through effective communication
                            and collaboration strategies with the coach
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="projects section bg-light">
          <div className="container">
            <div className="section-header">
              <h2 className="section-title">Projects</h2>
              <div className="section-divider"></div>
              <p className="section-subtitle">A showcase of my technical projects and creative work.</p>
            </div>

            <div className="projects-grid">
              <div className="project-card">
                <div className="project-image chitchat-project" style={{
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  position: 'relative'
                }}>
                  <div className="project-logo-container">
                    <span className="project-icon">💬</span>
                  </div>
                </div>
                <div className="project-content">
                  <h3 className="project-title">ChitChat (Messaging Platform)</h3>
                  <p className="project-description">
                    Constructed a real-time messaging app using a client-server architecture with React, Node.js, Express.js, and MongoDB.
                    Implemented secure user authentication using JWT for token-based access and bcrypt for password hashing.
                  </p>
                  <div className="project-tags">
                    <span className="project-tag">React</span>
                    <span className="project-tag">Node.js</span>
                    <span className="project-tag">Express.js</span>
                    <span className="project-tag">MongoDB</span>
                    <span className="project-tag">JWT</span>
                  </div>
                </div>
              </div>

              <div className="project-card">
                <div className="project-image task-tracker-project">
                  <div className="project-logo-container">
                    <span className="project-icon">✓</span>
                  </div>
                </div>
                <div className="project-content">
                  <h3 className="project-title">Task Tracker</h3>
                  <p className="project-description">
                    Produced a real-time task management app, featuring Google Authentication and cloud-synced task storage to enable dynamic task organization.
                    Implemented drag-and-drop task reordering, due date management with visual indicators, and real-time updates.
                  </p>
                  <div className="project-tags">
                    <span className="project-tag">React</span>
                    <span className="project-tag">Firebase</span>
                    <span className="project-tag">Node.js</span>
                    <span className="project-tag">Express.js</span>
                    <span className="project-tag">OpenAI API</span>
                  </div>
                </div>
              </div>

              <div className="project-card">
                <div className="project-image pet-project">
                  <div className="project-logo-container">
                    <span className="project-icon">🐾</span>
                  </div>
                </div>
                <div className="project-content">
                  <h3 className="project-title">Automated Pet Feeding System</h3>
                  <p className="project-description">
                    Developed a responsive web app with a tracking screen that allows users to schedule pet feedings and monitor water levels for a pet feeder.
                    Led the creation of dynamic water bowl images, reflecting real-time sensor data to enhance user engagement and app functionality.
                  </p>
                  <div className="project-tags">
                    <span className="project-tag">React</span>
                    <span className="project-tag">Node.js</span>
                    <span className="project-tag">Express.js</span>
                    <span className="project-tag">IoT</span>
                  </div>
                </div>
              </div>

              <div className="project-card">
                <div className="project-image dashboard-project">
                  <div className="project-logo-container">
                    <span className="project-icon">📊</span>
                  </div>
                </div>
                <div className="project-content">
                  <h3 className="project-title">Comprehensive Data Analytics Dashboard</h3>
                  <p className="project-description">
                    Developed a responsive dashboard that allows users to manage and visualize data across various
                    domains, including customer interaction, product management, and sales analytics. Designed a
                    user-friendly interface using React with Material-UI.
                  </p>
                  <div className="project-tags">
                    <span className="project-tag">React</span>
                    <span className="project-tag">Material-UI</span>
                    <span className="project-tag">Node.js</span>
                    <span className="project-tag">MongoDB</span>
                  </div>
                </div>
              </div>

              <div className="project-card">
                <div className="project-image website-project">
                  <div className="project-logo-container">
                    <span className="project-icon">🏛️</span>
                  </div>
                </div>
                <div className="project-content">
                  <h3 className="project-title">Theta Tau Website Revamp</h3>
                  <p className="project-description">
                    Collaborated with a team of developers and UI designers to rewrite and update the Theta Tau
                    professional engineering fraternity website. Enhanced functionality and user experience through
                    effective communication and technical skills.
                  </p>
                  <div className="project-tags">
                    <span className="project-tag">HTML</span>
                    <span className="project-tag">CSS</span>
                    <span className="project-tag">JavaScript</span>
                    <span className="project-tag">React</span>
                  </div>
                </div>
              </div>

              <div className="project-card">
                <div className="project-image game-project">
                  <div className="project-logo-container">
                    <span className="project-icon">🎮</span>
                  </div>
                </div>
                <div className="project-content">
                  <h3 className="project-title">Game Development in Unity</h3>
                  <p className="project-description">
                    Led a team to develop a point-and-click survival horror game using Unity and C#. Integrated
                    architectural elements, physics, and player mechanics to ensure seamless gameplay and functionality
                    in a fast-paced environment.
                  </p>
                  <div className="project-tags">
                    <span className="project-tag">Unity</span>
                    <span className="project-tag">C#</span>
                    <span className="project-tag">Game Development</span>
                    <span className="project-tag">UI Design</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="contact section">
          <div className="container">
            <div className="section-header">
              <h2 className="section-title">Get in Touch</h2>
              <div className="section-divider"></div>
              <p className="section-subtitle">
                Feel free to reach out if you'd like to collaborate on a project or just want to connect!
              </p>
            </div>

            <div className="contact-cards">
              <div className="contact-card">
                <div className="contact-icon">
                  <img src="./email.png" alt="Email" />
                </div>
                <h3 className="contact-title">Email</h3>
                <p className="contact-info">ina.chloe@gmail.com</p>
                <a href="mailto:ina.chloe@gmail.com" className="btn btn-outline">
                  Send Email
                </a>
              </div>

              <div className="contact-card">
                <div className="contact-icon">
                  <img src="./linkedin.png" alt="LinkedIn" />
                </div>
                <h3 className="contact-title">LinkedIn</h3>
                <p className="contact-info">Connect with me on LinkedIn</p>
                <a
                  href="https://www.linkedin.com/in/hana-chloe-yoon"
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-outline"
                >
                  Visit Profile
                </a>
              </div>

              <div className="contact-card">
                <div className="contact-icon">
                  <img src="./github.png" alt="GitHub" />
                </div>
                <h3 className="contact-title">GitHub</h3>
                <p className="contact-info">Check out my code repositories</p>
                <a href="https://github.com" target="_blank" rel="noreferrer" className="btn btn-outline">
                  View GitHub
                </a>
              </div>
            </div>

            <div className="resume-download">
              <a href="/resume.pdf" download className="btn btn-primary btn-lg">
                ↓ Download Resume
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="footer">
        <div className="container footer-container">
          <div className="footer-copyright">
            <p>© {new Date().getFullYear()} Hana Chloe Yoon. All rights reserved.</p>
          </div>
          <div className="footer-social">
            <a href="https://github.com" target="_blank" rel="noreferrer" className="social-link">
              <img src="/github.png" alt="GitHub" />
            </a>
            <a
              href="https://www.linkedin.com/in/hana-chloe-yoon"
              target="_blank"
              rel="noreferrer"
              className="social-link"
            >
              <img src="/linkedin.png" alt="LinkedIn" />
            </a>
            <a href="mailto:ina.chloe@gmail.com" className="social-link">
              <img src="/email.png" alt="Email" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
