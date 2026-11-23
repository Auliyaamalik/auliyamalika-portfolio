import Hero from "@/components/Hero";
import Reveal from "@/components/Reveal";
import Photo from "@/components/Photo";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import CvButton from "@/components/CvButton";
import { stack } from "@/data/content";

export default function Page() {
  return (
    <main>
      <Hero />
      <section id="about">
        <div className="wrap about">
          <Reveal className="photo glass"><Photo /></Reveal>
          <Reveal>
            <h2>About Me</h2>
            <p
              style={{
                color: "var(--cream)",
                fontSize: "1.15rem"
              }}
            >
              Hi! I'm an Information Systems student at Institut Teknologi
              Sepuluh Nopember (ITS), currently figuring out the world of
              enterprise architecture, business analysis, and data analytics.
            </p>

            <p>
              I've had the chance to work on different things through
              internships and college projects, from mapping enterprise
              applications and working with cloud infrastructure to
              building dashboards and making sense of data.
            </p>

            <p>
              What I find interesting is seeing how everything connects:
              the people, the processes, the systems, and the data.
              Outside of all that, I also spend quite a bit of my time
              working with teams, organizing events, and occasionally
              juggling way too many things at once.
            </p>

            <div className="fact"><strong>3.76</strong><span>GPA / 4.00 · Information Systems, ITS</span></div>
            <div className="fact"><strong>2025</strong><span>Bakti BCA Scholarship Awardee</span></div>
            <div className="fact"><strong>1st</strong><span>UI/UX Rafatech Competition, UIN Raden Fatah Palembang 2024</span></div>
          </Reveal>
        </div>
      </section>

      <section id="experience">
        <div className="wrap">
          <Reveal><h2>Experience</h2><p>A look at my internship and organizational experiences.</p></Reveal>
          <Experience />
          <div className="orgs">
            <Reveal className="glass"><h3>Head of External Affairs Department, HMSI ITS</h3><p style={{ fontSize: ".85rem", color: "var(--rose)", margin: "4px 0 10px" }}>Mar 2026 – Present</p><p style={{ fontSize: ".93rem", margin: 0 }}>Leading departmental initiatives, coordinating cross-functional teams, and overseeing program execution to achieve organizational goals.</p></Reveal>
            <Reveal className="glass"><h3>Head of Sponsorship, ISE! 2025</h3><p style={{ fontSize: ".85rem", color: "var(--rose)", margin: "4px 0 10px" }}>Mar – Nov 2025</p><p style={{ fontSize: ".93rem", margin: 0 }}>Managed a database of 400+ potential sponsors, coordinated partnership outreach, and secured collaborations with five companies.</p></Reveal>
          </div>
        </div>
      </section>

      <section id="projects">
        <div className="wrap">
          <Reveal><h2>Project</h2><p>A collection of my academic and internship projects. Click on a project to see more details.</p></Reveal>
          <Projects />
        </div>
      </section>

      <section id="stack">
        <div className="wrap">
          <Reveal><h2>Tech stack</h2></Reveal>
          {stack.map(([title, items]) => (
            <Reveal key={title} className="row"><h3>{title}</h3><div className="chips">{items.map((x) => <span key={x} className="chip glass">{x}</span>)}</div></Reveal>
          ))}
        </div>
      </section>

      <section id="contact">
        <div className="wrap">
          <Reveal className="contact glass">
            <div>
              <h2>Let's Connect!</h2>
              <p>I'm open to internship opportunities, projects, and collaborations. Feel free to reach out!</p>
              <CvButton className="btn main">View My CV</CvButton>
            </div>
            <div className="links">
              <a href="mailto:aulyamalidi@gmail.com"><b>Email</b><span>aulyamalidi@gmail.com</span></a>
              <a href="https://linkedin.com/in/auliya-malika-idi" target="_blank" rel="noopener"><b>LinkedIn</b><span>linkedin.com/in/auliya-malika-idi</span></a>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
