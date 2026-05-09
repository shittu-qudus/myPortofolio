import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Sidebar from "./sidebar";
import Head from "next/head";

interface Tech {
  id: number;
  photoUrl: string;
  tech: string;
}

interface Project {
  id: number;
  logo: string;
  title: string;
  about: string;
  url: string;
}

const Technologies: Tech[] = [
  { id: 1, photoUrl: "/icons/js.png", tech: "JavaScript" },
  { id: 2, photoUrl: "/icons/react.png", tech: "React" },
  { id: 3, photoUrl: "/icons/css.png", tech: "CSS" },
  { id: 4, photoUrl: "/icons/typescript.png", tech: "TypeScript" },
  { id: 5, photoUrl: "/icons/nextjs.png", tech: "Next.js" },
  { id: 6, photoUrl: "/icons/tailwind.png", tech: "Tailwind CSS" },
  { id: 7, photoUrl: "/icons/github.png", tech: "GitHub" },
  { id: 8, photoUrl: "/icons/html.png", tech: "HTML" },
  { id: 9, photoUrl: "/icons/reactnative.png", tech: "React Native" },
  { id: 10, photoUrl: "/icons/expo.png", tech: "Expo" },
];

const Projects: Project[] = [
  {
    id: 8,
    logo: "/logo/truemind.png",
    about: "Talentflow is Trueminds Innovation's unified internal LMS designed to support 50+ interns across six disciplines: PM, UI/UX, Frontend, Backend, Graphic Design and Social Media.",
    title: "TalentFlow",
    url: "https://talentflow-eight-weld.vercel.app/",
  },
  {
    id: 10,
    logo: "/logo/throughmylens.png",
    about: "A modern photography booking platform with Google Calendar integration, Stripe payments, and automated email workflows for a seamless client experience.",
    title: "ThroughMyLens",
    url: "https://www.throughmylens.uk/",
  },
  {
    id: 0,
    logo: "/logo/smarthire.jpg",
    about: "SaaS tool that helps job seekers create ATS-optimized resumes and cover letters with AI-assisted rewriting and customizable templates.",
    title: "SmartHire",
    url: "https://smart-hire-ashy.vercel.app/",
  },
  {
    id: 1,
    logo: "/logo/logo.png",
    about: "A platform that connects skilled workers with those in need of reliable services, ensuring a trusted hiring process and better service delivery.",
    title: "SkillHub",
    url: "https://skill-hub-yk14.vercel.app/",
  },
  {
    id: 2,
    logo: "/logo/image.png",
    about: "Website for an eco-conscious organization dedicated to sustainable waste management, recycling, and green practices.",
    title: "Greenville",
    url: "https://greenvilles.vercel.app/",
  },
  {
    id: 3,
    logo: "/logo/blacksfit.png",
    about: "A fully responsive, production e-commerce platform for a growing fashion brand — optimized for performance and currently live.",
    title: "BlacksFit",
    url: "https://www.blacksfit.com/",
  },
  {
    id: 4,
    logo: "/logo/laundry.png",
    about: "Smart laundry service platform with scheduling calendar, subscription plans, and an auto-responder for instant customer support.",
    title: "CleanEase",
    url: "https://clean-ease-orcin.vercel.app/",
  },
  {
    id: 5,
    logo: "/logo/nisha.png",
    about: "A visually striking photography portfolio and booking landing page built with Vite, React, and Tailwind CSS.",
    title: "Nisha Pics",
    url: "https://nisha-pics.vercel.app/",
  },
  {
    id: 6,
    logo: "/logo/thetechgirl.png",
    about: "Portfolio site for a product designer — clean layout, strong visual hierarchy, and end-to-end case studies.",
    title: "TheTechGirl",
    url: "https://azeez-adebola.vercel.app/",
  },
];

const CARDS_PER_PAGE = 3;

export default function Home() {
  const [isDownloading, setIsDownloading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(Projects.length / CARDS_PER_PAGE);
  const paginatedProjects = Projects.slice(
    (currentPage - 1) * CARDS_PER_PAGE,
    currentPage * CARDS_PER_PAGE
  );

  const handleDownload = () => {
    setIsDownloading(true);
    window.open(
      "https://drive.google.com/file/d/1yBAXpIh_CzP1GYHXtxD7jsM6jvMLjulH/view?usp=sharing",
      "_blank"
    );
    setTimeout(() => setIsDownloading(false), 1000);
  };

  const goToPage = (page: number) => {
    setCurrentPage(page);
    document.getElementById("hm-projects")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <Head>
        <title>SHITTU QUDUS — Frontend & Mobile Developer</title>
        <meta name="description" content="Portfolio of Shittu Qudus, Frontend Developer and Mobile App Developer." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="sidebar-comp">
        <Sidebar />
      </div>

      {/* ── Hero ── */}
      <section className="hm-hero">
        <div className="hm-hero-inner">
          <span className="hm-badge">Frontend &amp; Mobile Developer</span>
          <h1 className="hm-hero-name">
            Hi, I&apos;m<br />
            <span className="hm-hero-highlight">SHITTU QUDUS.</span>
          </h1>
          <p className="hm-hero-sub">
            I turn ideas into fast, accessible, and beautifully crafted digital
            experiences — for the web and for your pocket. Over the years my
            role has extended beyond coding to cross-team collaboration,
            feature definition, and shipping apps people love.
          </p>
          <div className="hm-hero-actions">
            <button className="hm-btn-primary" onClick={handleDownload} disabled={isDownloading}>
              {isDownloading ? "Opening…" : "Download Résumé ↓"}
            </button>
            <Link href="/contact" className="hm-btn-ghost">
              Get in touch →
            </Link>
          </div>
        </div>
      </section>

      {/* ── Tech Ticker ── */}
      <section className="hm-ticker-wrap">
        <div className="hm-ticker-label">
          <span>Stack</span>
        </div>
        <div className="hm-ticker">
          <div className="hm-ticker-track">
            {[...Technologies, ...Technologies].map((t, i) => (
              <div className="hm-ticker-item" key={i}>
                <span className="hm-ticker-icon">
                  <Image src={t.photoUrl} alt={t.tech} width={28} height={28} />
                </span>
                <span className="hm-ticker-name">{t.tech}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Projects ── */}
      <section className="hm-projects" id="hm-projects">
        <div className="hm-projects-header">
          <h2 className="hm-projects-title">Selected Work</h2>
          <span className="hm-projects-count">{Projects.length} projects</span>
        </div>

        {/* Desktop grid — all cards */}
        <div className="hm-grid hm-grid-desktop">
          {Projects.map((p) => (
            <ProjectCard key={p.id} project={p} />
          ))}
        </div>

        {/* Mobile — paginated */}
        <div className="hm-grid hm-grid-mobile">
          {paginatedProjects.map((p) => (
            <ProjectCard key={p.id} project={p} />
          ))}
        </div>

        {/* Pagination — mobile only */}
        <div className="hm-pagination">
          <button
            className="hm-page-btn"
            onClick={() => goToPage(currentPage - 1)}
            disabled={currentPage === 1}
            aria-label="Previous"
          >
            ←
          </button>
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <button
              key={page}
              className={`hm-page-btn${currentPage === page ? " hm-page-active" : ""}`}
              onClick={() => goToPage(page)}
              aria-label={`Page ${page}`}
            >
              {page}
            </button>
          ))}
          <button
            className="hm-page-btn"
            onClick={() => goToPage(currentPage + 1)}
            disabled={currentPage === totalPages}
            aria-label="Next"
          >
            →
          </button>
        </div>
      </section>

      <style>{`
        /* ══ Hero ══════════════════════════════════════════════════════════ */
        .hm-hero {
          min-height: 88vh;
          display: flex;
          align-items: center;
          padding: 0 2rem;
        }
        .hm-hero-inner {
          max-width: 680px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          gap: 1.4rem;
        }
        .hm-badge {
          display: inline-block;
          font-size: 0.72rem;
          font-weight: 600;
          letter-spacing: 0.13em;
          text-transform: uppercase;
          border: 1.5px solid rgba(255,255,255,0.25);
          border-radius: 999px;
          padding: 0.28rem 0.9rem;
          color: rgba(255,255,255,0.55);
          width: fit-content;
        }
        .hm-hero-name {
          font-size: clamp(2.8rem, 7vw, 5rem);
          font-weight: 800;
          line-height: 1.08;
          letter-spacing: -0.03em;
          color: #fff;
          margin: 0;
        }
        .hm-hero-highlight {
          color: rgba(255,255,255,0.45);
        }
        .hm-hero-sub {
          font-size: 1rem;
          line-height: 1.8;
          color: rgba(255,255,255,0.55);
          max-width: 520px;
          margin: 0;
        }
        .hm-hero-actions {
          display: flex;
          gap: 0.9rem;
          flex-wrap: wrap;
          margin-top: 0.4rem;
        }
        .hm-btn-primary {
          padding: 0.7rem 1.4rem;
          background: #fff;
          color: #000;
          font-size: 0.9rem;
          font-weight: 700;
          border: none;
          border-radius: 10px;
          cursor: pointer;
          transition: opacity 0.2s, transform 0.15s;
          font-family: inherit;
        }
        .hm-btn-primary:hover:not(:disabled) {
          opacity: 0.85;
          transform: translateY(-1px);
        }
        .hm-btn-primary:disabled { opacity: 0.5; cursor: not-allowed; }
        .hm-btn-ghost {
          padding: 0.7rem 1.4rem;
          background: transparent;
          color: rgba(255,255,255,0.75);
          font-size: 0.9rem;
          font-weight: 600;
          border: 1.5px solid rgba(255,255,255,0.2);
          border-radius: 10px;
          cursor: pointer;
          text-decoration: none;
          transition: border-color 0.2s, color 0.2s;
          font-family: inherit;
          display: inline-flex;
          align-items: center;
        }
        .hm-btn-ghost:hover {
          border-color: rgba(255,255,255,0.5);
          color: #fff;
        }

        /* ══ Ticker ════════════════════════════════════════════════════════ */
        .hm-ticker-wrap {
          display: flex;
          align-items: center;
          gap: 1.5rem;
          border-top: 1px solid rgba(255,255,255,0.08);
          border-bottom: 1px solid rgba(255,255,255,0.08);
          padding: 1rem 2rem;
          overflow: hidden;
        }
        .hm-ticker-label span {
          font-size: 0.7rem;
          font-weight: 700;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.3);
          white-space: nowrap;
        }
        .hm-ticker {
          flex: 1;
          overflow: hidden;
          mask-image: linear-gradient(to right, transparent, black 8%, black 92%, transparent);
        }
        .hm-ticker-track {
          display: flex;
          gap: 2.5rem;
          width: max-content;
          animation: hm-scroll 30s linear infinite;
        }
        .hm-ticker-track:hover { animation-play-state: paused; }
        @keyframes hm-scroll {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
        .hm-ticker-item {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          white-space: nowrap;
        }
        .hm-ticker-icon { display: flex; align-items: center; width: 28px; height: 28px; }
        .hm-ticker-icon img { object-fit: contain; }
        .hm-ticker-name {
          font-size: 0.85rem;
          color: rgba(255,255,255,0.55);
          font-weight: 500;
        }

        /* ══ Projects ══════════════════════════════════════════════════════ */
        .hm-projects {
          padding: 4rem 2rem 5rem;
          max-width: 1100px;
          margin: 0 auto;
        }
        .hm-projects-header {
          display: flex;
          align-items: baseline;
          justify-content: space-between;
          margin-bottom: 2rem;
        }
        .hm-projects-title {
          font-size: 1.6rem;
          font-weight: 800;
          color: #fff;
          letter-spacing: -0.02em;
        }
        .hm-projects-count {
          font-size: 0.8rem;
          color: rgba(255,255,255,0.35);
          font-weight: 500;
          letter-spacing: 0.05em;
        }

        /* ══ Grid ══════════════════════════════════════════════════════════ */
        .hm-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.25rem;
        }
        .hm-grid-mobile { display: none; }

        /* ══ Card ══════════════════════════════════════════════════════════ */
        .hm-card {
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.09);
          border-radius: 14px;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          transition: border-color 0.2s, transform 0.2s;
        }
        .hm-card:hover {
          border-color: rgba(255,255,255,0.22);
          transform: translateY(-3px);
        }
        .hm-card-img {
          position: relative;
          width: 100%;
          aspect-ratio: 16/9;
          background: rgba(255,255,255,0.06);
          overflow: hidden;
        }
        .hm-card-body {
          padding: 1rem 1.1rem 1.2rem;
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
          flex: 1;
        }
        .hm-card-title {
          font-size: 0.95rem;
          font-weight: 700;
          margin: 0;
        }
        .hm-card-title a {
          color: #fff;
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          gap: 0.3rem;
          transition: opacity 0.2s;
        }
        .hm-card-title a:hover { opacity: 0.7; }
        .hm-card-title a::after {
          content: "↗";
          font-size: 0.8rem;
          opacity: 0.5;
        }
        .hm-card-desc {
          font-size: 0.82rem;
          line-height: 1.65;
          color: rgba(255,255,255,0.5);
          margin: 0;
        }

        /* ══ Pagination ════════════════════════════════════════════════════ */
        .hm-pagination { display: none; }

        /* ══ Responsive ════════════════════════════════════════════════════ */
        @media (max-width: 900px) {
          .hm-grid-desktop { grid-template-columns: repeat(2, 1fr); }
        }

        @media (max-width: 640px) {
          .hm-hero { min-height: 92vh; padding: 2rem 1.2rem; }
          .hm-ticker-wrap { padding: 0.9rem 1.2rem; }
          .hm-projects { padding: 3rem 1.2rem 4rem; }

          /* Switch to paginated on mobile */
          .hm-grid-desktop { display: none; }
          .hm-grid-mobile {
            display: grid;
            grid-template-columns: 1fr;
            gap: 1rem;
          }

          /* Pagination */
          .hm-pagination {
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 0.5rem;
            margin-top: 1.75rem;
            flex-wrap: wrap;
          }
          .hm-page-btn {
            background: transparent;
            border: 1.5px solid rgba(255,255,255,0.2);
            color: rgba(255,255,255,0.65);
            border-radius: 8px;
            padding: 0.4rem 0.8rem;
            font-size: 0.88rem;
            cursor: pointer;
            transition: background 0.2s, color 0.2s, border-color 0.2s;
            font-family: inherit;
          }
          .hm-page-btn:disabled { opacity: 0.25; cursor: not-allowed; }
          .hm-page-btn:not(:disabled):hover {
            border-color: rgba(255,255,255,0.5);
            color: #fff;
          }
          .hm-page-active {
            background: #fff !important;
            color: #000 !important;
            font-weight: 700;
            border-color: #fff !important;
          }
        }
      `}</style>
    </>
  );
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="hm-card">
      <div className="hm-card-img">
        <Image
          src={project.logo}
          alt={`${project.title} preview`}
          fill
          style={{ objectFit: "cover" }}
          sizes="(max-width: 640px) 100vw, (max-width: 900px) 50vw, 33vw"
        />
      </div>
      <div className="hm-card-body">
        <h3 className="hm-card-title">
          <Link href={project.url} target="_blank" rel="noopener noreferrer">
            {project.title}
          </Link>
        </h3>
        <p className="hm-card-desc">{project.about}</p>
      </div>
    </div>
  );
}