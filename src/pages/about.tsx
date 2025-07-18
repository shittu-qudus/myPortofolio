import Sidebar from "./sidebar";

const About = () => {
  return (
    <>
      <div className="sidebar-comp">
        <Sidebar />
      </div>
      <main id="about-comp" className="max-w-3xl mx-auto px-4 mt-0py-12 ml-200">
        <section className="">
          <h1 className="text-4xl font-bold mb-4 text-center">About Me</h1>
          <p className="text-lg text-gray-700">
            Hi, I&apos;m <span className="font-semibold"><span className="text-2xl text-white">SHITTU QUDUS. A</span></span>,a passionate Frontend Developer with a background in Food Science and Technology.
            While I started in the sciences, my curiosity and love for technology led me to make a bold transition into web development.
          </p>
        </section>
        
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">My Journey</h2>
          <p className="text-gray-700">
            I completed a comprehensive frontend engineering program at AltSchool Africa, where I honed my skills in:
          </p>
          <ul className="list-disc list-inside mt-3 mb-3 text-gray-700">
            <li>JavaScript & TypeScript</li>
            <li>React & Next.js</li>
            <li>Tailwind CSS & Git/GitHub</li>
            <li>Building responsive, user-friendly interfaces</li>
          </ul>
          <p className="text-gray-700">
            My journey into tech has been self-driven, backed by hands-on projects and a hunger to keep learning and improving.
          </p>

          <h2 className="text-2xl font-semibold">What I&apos;m Looking For</h2>
          <p className="text-gray-700">
            I&apos;m currently seeking international internship opportunities, remote roles, and collaborations that will allow me to grow while contributing to exciting teams and projects.
          </p>
          <p className="mt-2 text-gray-700">
            If you&apos;re looking for a dedicated frontend developer who values clean code, great design, and a user-first approach, let&apos;s connect!
          </p>

          <h2 className="text-2xl font-semibold">Outside of Code...</h2>
          <p className="text-gray-700">
            When I&apos;m not building web apps, I&apos;m likely exploring the intersection of tech and creativity, watching cinematography reels or learning something new.
          </p>
        </section>
      </main>
    </>
  );
}

export default About;