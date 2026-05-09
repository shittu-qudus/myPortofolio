import Sidebar from "./sidebar";

const skills = [
  "JavaScript & TypeScript",
  "React & Next.js",
  "React Native (iOS & Android)",
  "Tailwind CSS",
  "Git & GitHub",
  "Responsive UI Design",
];

const About = () => {
  return (
    <>
      <div className="sidebar-comp">
        <Sidebar />
      </div>

      <main id="about-comp">

        {/* ── Hero ── */}
        <section className="ab-hero">
          <div className="ab-badge">Frontend &amp; Mobile Developer</div>
          <h1 className="ab-name">SHITTU QUDUS</h1>
          <p className="ab-tagline">
            I build fast, accessible, and beautifully crafted digital experiences
            — for the web and for your pocket.
          </p>
        </section>

        <div className="ab-divider" />

        {/* ── Who I Am ── */}
        <section className="ab-section">
          <h2 className="ab-section-title">Who I Am</h2>
          <p className="ab-text">
            My background is unconventional — I studied Food Science and
            Technology before curiosity pulled me into the world of software.
            That scientific mindset stuck: I approach every UI challenge like an
            experiment, iterating until the experience feels just right.
          </p>
          <p className="ab-text">
            Today I work as a <strong>Frontend Developer</strong> and{" "}
            <strong>Mobile App Developer</strong> (iOS &amp; Android with React
            Native), turning ideas into polished, production-ready products.
          </p>
        </section>

        {/* ── Journey ── */}
        <section className="ab-section">
          <h2 className="ab-section-title">My Journey</h2>
          <p className="ab-text">
            I completed a rigorous frontend engineering programme at{" "}
            <strong>AltSchool Africa</strong>, where I went from writing my
            first HTML tag to shipping full-stack-adjacent React applications.
            My learning has always been self-driven — real projects, real
            deadlines, real users.
          </p>
          <ul className="ab-skills">
            {skills.map((skill) => (
              <li key={skill} className="ab-chip">
                <span className="ab-dot" />
                {skill}
              </li>
            ))}
          </ul>
        </section>

        {/* ── Looking For ── */}
        <section className="ab-section ab-box">
          <h2 className="ab-section-title">What I&apos;m Looking For</h2>
          <p className="ab-text">
            I&apos;m actively seeking <strong>international internships</strong>,
            remote roles, and collaborations where I can contribute meaningfully
            and keep growing. If you value clean code, great design, and a
            developer who cares about the user — let&apos;s talk.
          </p>
        </section>

        {/* ── Beyond Code ── */}
        <section className="ab-section">
          <h2 className="ab-section-title">Beyond the Code</h2>
          <p className="ab-text">
            When I step away from the editor I&apos;m probably dissecting a
            cinematography reel, exploring where tech meets creativity, or
            picking up a skill I didn&apos;t know I needed yet.
          </p>
        </section>

      </main>

      <style>{`
        #about-comp {
          max-width: 680px;
          margin: 0 auto;
          padding: 3rem 1.5rem 5rem;
          display: flex;
          flex-direction: column;
        }

        /* Hero */
        .ab-hero {
          text-align: center;
          padding: 2.5rem 0 2rem;
        }
        .ab-badge {
          display: inline-block;
          font-size: 0.75rem;
          font-weight: 600;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          border: 1.5px solid rgba(255,255,255,0.3);
          border-radius: 999px;
          padding: 0.3rem 1rem;
          color: rgba(255,255,255,0.6);
          margin-bottom: 1.1rem;
        }
        .ab-name {
          font-size: clamp(2.4rem, 6vw, 3.8rem);
          font-weight: 800;
          letter-spacing: -0.02em;
          color: #fff;
          margin: 0 0 1rem;
          line-height: 1.1;
        }
        .ab-tagline {
          font-size: 1.05rem;
          line-height: 1.7;
          color: rgba(255,255,255,0.6);
          max-width: 520px;
          margin: 0 auto;
        }

        /* Divider */
        .ab-divider {
          height: 1px;
          background: rgba(255,255,255,0.1);
          margin: 2rem 0;
        }

        /* Sections */
        .ab-section {
          margin-bottom: 2.5rem;
          width: 100%;
        }
        .ab-section-title {
          font-size: 1.25rem;
          font-weight: 700;
          color: #fff;
          margin: 0 0 0.75rem;
          padding-left: 1rem;
          position: relative;
          display: block;
          width: 100%;
        }
        .ab-section-title::before {
          content: "";
          position: absolute;
          left: 0;
          top: 0.1em;
          height: 1.1em;
          width: 3px;
          background: #fff;
          border-radius: 2px;
        }
        .ab-text {
          font-size: 0.97rem;
          line-height: 1.8;
          color: rgba(255,255,255,0.65);
          margin-bottom: 0.75rem;
          display: block;
          width: 100%;
        }
        .ab-text strong {
          color: #fff;
          font-weight: 600;
        }

        /* Skills chips */
        .ab-skills {
          display: flex;
          flex-wrap: wrap;
          gap: 0.55rem;
          list-style: none;
          padding: 0;
          margin: 1rem 0 0;
          width: 100%;
        }
        .ab-chip {
          display: flex;
          align-items: center;
          gap: 0.4rem;
          background: rgba(255,255,255,0.06);
          border: 1px solid rgba(255,255,255,0.14);
          border-radius: 999px;
          padding: 0.32rem 0.85rem;
          font-size: 0.85rem;
          color: rgba(255,255,255,0.75);
          transition: background 0.2s;
        }
        .ab-chip:hover {
          background: rgba(255,255,255,0.12);
        }
        .ab-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #fff;
          flex-shrink: 0;
        }

        /* Highlight box */
        .ab-box {
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.1);
          border-radius: 14px;
          padding: 1.5rem 1.6rem;
        }

        /* Mobile */
        @media (max-width: 640px) {
          #about-comp {
            padding: 2rem 1.2rem 4rem;
          }
          .ab-tagline {
            font-size: 0.97rem;
          }
        }
      `}</style>
    </>
  );
};

export default About;