import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Sidebar from "./sidebar";

export default function Home() {
  const [isDownloading, setIsDownloading] = useState(false);
  
  // Define interfaces instead of types for better readability
  interface Tech {
    id: number;
    photoUrl: string;
    tech: string;
  }
  
  interface Demo {
    id: number;
    logo: string;
    title: string;
    about: string;
    url: string;
  }

  const Projects: Demo[] = [
    {
      id: 1,
      logo: "/logo/logo.png",
      about: "SkillHub is a platform that connects skilled workers with those in need of reliable services, ensuring a trusted hiring process and better service delivery.",
      title: "SKILLHUB",
      url: "https://skill-hub-yk14.vercel.app/",
    },
    {
      id: 2,
      logo: "/logo/image.png",
      about: "Greenville EcoSolutions is an environmentally conscious organization dedicated to sustainable solutions for waste management, recycling, and eco-friendly practices. The company's mission is to reduce environmental impact through innovative strategies and technologies that foster a cleaner, more sustainable world.",
      title: "GREENVILLE",
      url: "https://greenville-0yx8.onrender.com/",
    },
  ];
  
  const Technologies: Tech[] = [
    {
      id: 1,
      photoUrl: "/icons/js.png",
      tech: "JavaScript",
    },
    {
      id: 2,
      photoUrl: "/icons/react.png",
      tech: "React",
    },
    {
      id: 3,
      photoUrl: "/icons/css.png",
      tech: "CSS",
    },
    {
      id: 4,
      photoUrl: "/icons/typescript.png",
      tech: "TypeScript",
    },
    {
      id: 5,
      photoUrl: "/icons/nextjs.png",
      tech: "Next.js",
    },
    {
      id: 6,
      photoUrl: "/icons/tailwind.png",
      tech: "Tailwind CSS",
    },
    {
      id: 7,
      photoUrl: "/icons/github.png",
      tech: "GitHub",
    },
    {
      id: 8,
      photoUrl: "/icons/html.png",
      tech: "HTML",
    },
  ];

  const handleDownload = () => {
    setIsDownloading(true);

    // Resume content as a string
    const resumeContent = `# SHITTU QUDUS ADEKUNLE
**Frontend Developer**  
Lagos, Nigeria  
Phone: 08112211061  
Email: shittuqadekunle@gmail.com  
LinkedIn: https://www.linkedin.com/in/shittu-qudus-5787762ab/ | GitHub: https://github.com/shittu-qudus

## PROFESSIONAL SUMMARY
Dedicated Frontend Developer with experience building responsive, user-friendly web applications. Passionate about creating seamless digital experiences while leveraging my background in Food Science to bring a unique perspective to technical challenges. Seeking opportunities to contribute my skills in React, JavaScript, and UI/UX design to innovative projects.

## EDUCATION
**Bachelor of Technology in Food Science and Technology**  
Kwara State University, Malete, Kwara State, Nigeria  
*2018 - 2024*

## SKILLS
- **Programming Languages**: JavaScript, TypeScript
- **Frontend Technologies**: React, Next.js, Tailwind CSS
- **Version Control**: Git
- **Additional Skills**: Responsive Design, SEO Optimization, UI/UX Principles

## WORK EXPERIENCE
**Production Intern**  
Lagasef Bakery, Ogun State, Nigeria  
*2022 - 2023*
- Collaborated with production team to ensure quality control in bread manufacturing processes
- Documented production workflows and suggested optimizations to improve efficiency
- Gained valuable experience in operational management and team coordination

## PROJECTS

### SkillHub
**Frontend Developer**  
*Technologies: JavaScript, React, CSS*
- Developed a responsive platform that connects skilled workers with clients seeking reliable services
- Implemented user-friendly interfaces ensuring intuitive navigation and seamless user experience
- Optimized application for SEO to improve discoverability and market reach
- https://github.com/shittu-qudus/SkillHub | https://skill-hub-yk14.vercel.app/

### Greenville EcoSolutions
**Frontend Developer**  
*Technologies: JavaScript, React, CSS*
- Contributed to the frontend development of an eco-conscious platform focused on sustainable waste management
- Created responsive layouts that effectively showcased the company's environmental initiatives
- Enhanced user interface to optimize site performance and accessibility standards
- https://greenville-0yx8.onrender.com/

## CERTIFICATIONS
**Frontend Engineering**  
AltSchool Africa  
*Expected Completion: 2025*

## LANGUAGES
- English (Fluent)
- Yoruba (Native)`;

    try {
      // Create a Blob from the resume content
      const blob = new Blob([resumeContent], { type: "text/markdown" });

      // Create a URL for the Blob
      const url = URL.createObjectURL(blob);

      // Create a link element and trigger download
      const a = document.createElement("a");
      a.href = url;
      a.download = "Shittu_Qudus_Adekunle_Resume.md";
      document.body.appendChild(a);
      a.click();

      // Clean up
      document.body.removeChild(a);
      URL.revokeObjectURL(url);

      setTimeout(() => {
        setIsDownloading(false);
      }, 1000);
    } catch (error) {
      console.error("Download failed:", error);
      setIsDownloading(false);
    }
  };

  return (
    <>
      <div className="sidebar-comp">
        <Sidebar />
      </div>
      <div className="home-content">
        <div className="intro-text">
          <div className="into">
            <span className="name-text">Hi, I&apos;m SHITTU </span>
            <span className="about-text">
              During my years as a{" "}
              <span className="ft">Front-End Software Engineer</span>, my role
              has extended beyond coding to effective communication with various
              departments, defining new features and spearheading the
              development of new apps.
            </span>
            <br />
            <button
              className="res-btn"
              onClick={handleDownload}
              disabled={isDownloading}
            >
              {isDownloading ? "Downloading..." : "Download Resume"}
            </button>
          </div>
          <div className="image-cont">
            <Image
              className="rounded-2xl"
              src="/icons/id.jpg"
              alt="PROFILE PIC"
              height={300}
              width={500}
              priority
            />
          </div>
        </div>
      </div>

      <div className="exp-tech">
        <div className="exp">
          <h1 style={{ color: "white", fontSize: "3rem" }}>XP</h1>
          <span className="exp-text">
            with the most popular ecosystem frontend
          </span>
        </div>

        <div className="techs">
          <div className="tech-slider">
            <div className="slider-track">
              {Technologies.map((technology) => (
                <div className="tech-item" key={technology.id}>
                  <span className="tech-icon">
                    <Image
                      src={technology.photoUrl}
                      alt={`${technology.tech} icon`}
                      height={300}
                      width={500}
                    />
                  </span>
                  <span className="tech-name">{technology.tech}</span>
                </div>
              ))}

              {Technologies.map((technology) => (
                <div className="tech-item" key={`dup-${technology.id}`}>
                  <span className="tech-icon">
                    <Image
                      src={technology.photoUrl}
                      alt={`${technology.tech} icon`}
                      height={300}
                      width={500}
                    />
                  </span>
                  <span className="tech-name">{technology.tech}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="past-projct">
        <h2 className="x-projects">Past projects</h2>
        <br />
        <div className="card-container">
          {Projects.map((project) => (
            <div key={project.id} className="project-card">
              <div className="cards">
                <div className="card-content">
                  <div className="imagediv"></div>
                  <div className="project-info">
                    <span className="project-icon">
                      <Image
                        src={project.logo}
                        alt={`${project.title} logo`}
                        height={100}
                        width={100}
                      />
                    </span>
                    <span className="project-title">{project.title}</span>
                    <Link className="project-url" href={project.url}>
                      <span>{project.url}</span>
                    </Link>
                    <span className="project-description">{project.about}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}