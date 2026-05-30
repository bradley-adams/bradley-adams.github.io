import { useState, useEffect } from "react";
import "./App.css";

const ROLES = ["Senior Software Engineer", "Technical Lead", "Go & React Developer"];

const JOBS = [
  {
    company: "Starboard Maritime Intelligence",
    role: "Senior Software Engineer — Defence & Intelligence",
    period: "Sep 2025 – Present",
    summary: "Technical lead for the Defence and Intelligence squad. Designed and shipped a customer-facing Go REST API, led a ClickHouse migration from Postgres, and managed a team of 6 interns and associates.",
    tech: ["Go", "PostgreSQL", "ClickHouse", "GCP", "Kubernetes", "React", "Terraform"],
  },
  {
    company: "UneeQ",
    role: "Software Developer — Product",
    period: "Jan 2024 – Aug 2025",
    summary: "Led development of a Go REST API for a next-gen admin platform. Built Angular frontend for configuring digital humans, contributed to Kubernetes deployments and Go backend session services.",
    tech: ["Go", "Angular", "PostgreSQL", "AWS", "Kubernetes", "Helm", "Redis"],
  },
  {
    company: "Sailthru by Marigold",
    role: "Software Engineer — Personalisation & Data Analytics",
    period: "Aug 2022 – Dec 2023",
    summary: "Worked across a reporting platform from data lake to React frontend. Migrated Node.js services to Go, debugged distributed pipeline issues, and built React components with Vite and React Testing Library.",
    tech: ["Go", "React", "Java", "AWS", "Redshift", "MongoDB", "Kubernetes"],
  },
  {
    company: "Modica Group",
    role: "Software Developer — Reporting & Applications",
    period: "Nov 2018 – Jul 2022",
    summary: "Led an SFTP reporting project evolving from PHP monolith to Go microservices with a React micro frontend. Developed a Go REST API boilerplate and mentored junior developers.",
    tech: ["Go", "React", "TypeScript", "PHP", "AWS", "PostgreSQL", "Docker"],
  },
];

const SKILLS = ["Go", "React", "TypeScript", "PostgreSQL", "ClickHouse", "Kubernetes", "Docker", "Terraform", "GCP", "AWS", "gRPC", "REST APIs"];

export default function App() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [fade, setFade] = useState(true);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => setVisible(true), 100);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setRoleIndex((i) => (i + 1) % ROLES.length);
        setFade(true);
      }, 400);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={`site ${visible ? "site--visible" : ""}`}>
      <nav className="nav">
        <span className="nav__logo">BA</span>
        <div className="nav__links">
          <a href="#work">Work</a>
          <a href="#skills">Skills</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      <section className="hero">
        <div className="hero__content">
          <h1 className="hero__name">Bradley Adams</h1>
          <p className={`hero__role ${fade ? "hero__role--visible" : "hero__role--hidden"}`}>
            {ROLES[roleIndex]}
          </p>
          <p className="hero__eyebrow">Based in Wellington, NZ</p>
          <p className="hero__bio">
            7+ years building scalable backend systems and modern web applications.
            My path into tech from construction and business gave me a practical,
            problem-solving mindset — and I've learned there's always room for a bit of
            chucklesome humour along the way.
          </p>
          <div className="hero__actions">
            <a href="#work" className="btn btn--primary">See my work</a>
            <a href="#contact" className="btn btn--ghost">Get in touch</a>
          </div>
        </div>
        <div className="hero__accent" aria-hidden="true">
          <div className="hero__blob" />
        </div>
      </section>

      <section className="section" id="work">
        <h2 className="section__title">Experience</h2>
        <div className="jobs">
          {JOBS.map((job, i) => (
            <div className="job" key={i} style={{ animationDelay: `${i * 80}ms` }}>
              <div className="job__header">
                <div>
                  <h3 className="job__company">{job.company}</h3>
                  <p className="job__role">{job.role}</p>
                </div>
                <span className="job__period">{job.period}</span>
              </div>
              <p className="job__summary">{job.summary}</p>
              <div className="job__tech">
                {job.tech.map((t) => (
                  <span className="tag" key={t}>{t}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="section section--alt" id="skills">
        <h2 className="section__title">Skills</h2>
        <div className="skills">
          {SKILLS.map((s, i) => (
            <span className="skill" key={s} style={{ animationDelay: `${i * 40}ms` }}>{s}</span>
          ))}
        </div>
      </section>

      <section className="section" id="contact">
        <h2 className="section__title">Get in touch</h2>
        <p className="contact__text">
          Open to interesting problems, technical leadership roles, and teams that take their work seriously but not themselves.
        </p>
        <div className="contact__links">
          <a href="mailto:bradley.wayne.adams@gmail.com" className="contact__link">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m2 7 10 7 10-7"/></svg>
            bradley.wayne.adams@gmail.com
          </a>
          <a href="https://linkedin.com/in/bradley-adams-265803111" target="_blank" rel="noopener noreferrer" className="contact__link">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="2" y="2" width="20" height="20" rx="2"/><path d="M7 10v8M7 7v.01M12 10v8m0-5a3 3 0 0 1 6 0v5"/></svg>
            linkedin.com/in/bradley-adams-265803111
          </a>
          <a href="https://github.com/bradley-adams" target="_blank" rel="noopener noreferrer" className="contact__link">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/></svg>
            github.com/bradley-adams
          </a>
        </div>
      </section>

      <footer className="footer">
        <p>© {new Date().getFullYear()} Bradley Adams · Wellington, NZ</p>
      </footer>
    </div>
  );
}