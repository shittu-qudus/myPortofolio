import { useState } from "react";
import Image from "next/image";
import Link from "next/link";    
import Sidebar from "./sidebar";

export default function Home() {
  const [isDownloading, setIsDownloading] = useState(false);
  
  const handleDownload = () => {
    setIsDownloading(true);
    
   
    window.open("https://drive.google.com/file/d/1rAOfClLGTFDT_-SztJgB14wndx3v2apq/view?usp=share_link", "_blank");
    
    setTimeout(() => setIsDownloading(false), 1000);
  };
  
 
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
      url: "https://greenvilles.vercel.app/",
    },
    {
        id: 3,
      logo: "/logo/blacksfit.png",
      about: "BlacksFit is a modern, user-friendly e-commerce platform built for a growing fashion brand, offering a seamless shopping experience. The site is fully responsive, optimized for performance, and is currently live and operational for business.",
      title: "BLACKSFIT",
      url: "https://blacksfit-test.vercel.app/",
    },
    {
        id: 4,
      logo: "/logo/laundry.png",
      about: "CleanEase is a smart laundry service platform that simplifies laundry management with an integrated calendar for scheduling pickups/deliveries, subscription plans for recurring orders, and an auto-responder for instant customer support. It offers real-time tracking, automated reminders, and flexible billing.Making laundry effortless for busy households and businesses.",
      title: "CLEANEASE",
      url: "https://clean-ease-orcin.vercel.app/",
    }
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

  return (
    <>
      <div className="sidebar-comp">
        <Sidebar />
      </div>
      <div className="home-content">
        <div className="intro-text">
          <div className="into">
            <span className="name-text">Hi, I&apos;m SHITTU </span>
           <div className="lol">
             <span className="about-text">
              During my years as a{" "}
              <span className="ft">Front-End Software Engineer</span>, my role
              has extended beyond coding to effective communication with various
              departments, defining new features and spearheading the
              development of new apps.
            </span>
            
            <br />
             {/* <div className="image-cont">
            <Image
              className="mypic"
              src="/icons/id.jpg"
              alt="PROFILE PIC"
              height={300}
              width={300}
              priority
              
            />
          </div> */}
           </div>
           <button
              className="res-btn"
              onClick={handleDownload}
              disabled={isDownloading}
            >
              {isDownloading ? "Downloading..." : "Download Resume"}
            </button>
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
                      height={200}
                      width={200}
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
                      height={200}
                      width={200}
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
        <div className="card-container"  id="bbb">
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
                    <span className="project-title"><Link href={project.url} legacyBehavior>
  <a target="_blank" rel="noopener noreferrer">
    {project.title}
  </a>
</Link></span>
                    {/* <Link className="project-url" href={project.url}>
                      <span>{project.url}</span>
                    </Link> */}
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