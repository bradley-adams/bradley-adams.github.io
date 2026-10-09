import { useState, useEffect } from "react";
import "./App.css";

const JOBS = [
  {
    company: "Starboard Maritime Intelligence",
    role: "Senior Software Engineer — Defence & Intelligence",
    period: "Sep 2025 – Present",
    summary: "Acting technical lead for a squad of six engineers, owning technical design, architecture decisions and delivery planning while staying hands on in the code. Designed and delivered a customer facing Go REST API under a tight timeline and changing requirements. Take part in the on call rotation and run incidents from first response through to clean up. Mentored two associates and four interns, including running their one on ones.",    tech: ["Go", "PostgreSQL", "ClickHouse", "GCP", "Kubernetes", "Terraform", "React"],
  },
  {
    company: "UneeQ",
    role: "Software Developer — Product",
    period: "Jan 2024 – Aug 2025",
    summary: "Led development of a greenfield Go REST API and PostgreSQL database for a next generation admin platform. Built the Angular frontend for configuring digital human experiences. Contributed to Go backend session services and worked across Kubernetes deployments and Helm charts on AWS.",
    tech: ["Go", "Angular", "PostgreSQL", "AWS", "Kubernetes", "Helm", "Redis", "Docker"],
  },
  {
    company: "Sailthru by Marigold",
    role: "Software Engineer — Personalisation & Data Analytics",
    period: "Aug 2022 – Dec 2023",
    summary: "Worked across a full data pipeline from data lake through Redshift, exposed via Java services and a React frontend. Migrated Node.js services to Go. Debugged distributed pipeline issues across MongoDB, Kinesis and OpenSearch. Maintained a legacy PHP monolith and built React components with Vite and React Testing Library.",
    tech: ["Go", "React", "Java", "AWS", "Redshift", "MongoDB", "Kubernetes"],
  },
  {
    company: "Modica Group",
    role: "Software Developer — Reporting & Applications",
    period: "Nov 2018 – Jul 2022",
    summary: "Led an SFTP reporting project evolving from a PHP monolith into Go microservices with a React micro frontend. Worked across a wider modernisation effort moving from CakePHP to Go on the backend and from jQuery to React and TypeScript on the frontend. Developed a Go REST API boilerplate used as a foundation for new services. Contributed to mentoring, interviewing and onboarding engineers.",
    tech: ["Go", "React", "TypeScript", "PHP", "AWS", "PostgreSQL", "Docker"],
  },
];

const SKILLS = ["Go", "TypeScript", "React", "Angular", "PostgreSQL", "ClickHouse", "Redis", "Kubernetes", "Docker", "Terraform", "Helm", "AWS", "GCP", "JavaScript", "PHP", "HTML & CSS"];

export default function App() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => setVisible(true), 100);
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
          <p className="hero__role">Senior Software Engineer</p>
          <p className="hero__eyebrow">Based in Wellington, NZ</p>
          <p className="hero__bio">
            Senior Software Engineer with 7+ years across the full stack, building backends in Go and frontends in TypeScript, React and Angular. I also work with data systems like PostgreSQL and ClickHouse and deploy on AWS and GCP using Kubernetes and Terraform. I act as technical lead for a team of six, staying hands on in the code while owning architecture, delivery planning and operational readiness, and mentoring the engineers around me.
          </p>
          <p className="hero__bio">
            My background in construction and business taught me to work pragmatically, keep projects moving and communicate clearly with everyone. I enjoy solving problems and building things and I get just as much out of helping other engineers grow. I do my best work in teams that don't take themselves too seriously and I bring a chucklesome sense of humour to the mix. Outside work I'm a father of four boys and an avid rugby fan who appreciates good food.
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
          Open to interesting problems and always happy to have a chat.
        </p>
        <div className="contact__links">
          <a href="https://github.com/bradley-adams" target="_blank" rel="noopener noreferrer" className="contact__link">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/></svg>
            github.com/bradley-adams
          </a>
          <a href="https://linkedin.com/in/bradley-adams-265803111" target="_blank" rel="noopener noreferrer" className="contact__link">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="2" y="2" width="20" height="20" rx="2"/><path d="M7 10v8M7 7v.01M12 10v8m0-5a3 3 0 0 1 6 0v5"/></svg>
            linkedin.com/in/bradley-adams-265803111
          </a>
          <a href="#" className="contact__link" onClick={(e) => { e.preventDefault(); window.location.href = ['mai', 'lto:', 'bradley.wayne.adams', '@', 'gmail.com'].join(''); }}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m2 7 10 7 10-7"/></svg>
            bradley.wayne.adams@gmail.com
          </a>
        </div>
      </section>

      <footer className="footer">
        <p>© {new Date().getFullYear()} Bradley Adams · Wellington, NZ</p>
      </footer>
    </div>
  );
}