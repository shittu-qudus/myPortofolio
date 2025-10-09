'use client';
import Link from 'next/link';
import { useState } from 'react';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => setIsOpen(!isOpen);

  return (
    <>
      {/* Toggle button for mobile */}
      <button className="sidebar-toggle" onClick={toggleSidebar}>
        ☰
      </button>

      {/* Overlay */}
      {isOpen && <div className="overlay" onClick={toggleSidebar} />}

      <aside className={`sidebar ${isOpen ? 'open' : ''}`}>
        <nav className="sidebar-nav">
          <ul className="nav-links">
            <li>
              <Link href="/" onClick={toggleSidebar}>Home</Link>
            </li>
            <li>
              <Link href="about" onClick={toggleSidebar}>About</Link>
            </li>
            <li>
              <Link href="contact" onClick={toggleSidebar}>Contact</Link>
            </li>
          </ul>

          <ul className="social-icons">
            <li>
              <Link href="https://github.com/shittu-qudus">
                {/* GitHub SVG */}
              </Link>
            </li>
            <li>
              <Link href="https://www.linkedin.com/in/shittu-qudus-5787762ab/">
                {/* LinkedIn SVG */}
              </Link>
            </li>
            <li>
              <Link href="mailto:shittuqadekunle@gmail.com">
                {/* Email SVG */}
              </Link>
            </li>
          </ul>
        </nav>
      </aside>
    </>
  );
};

export default Sidebar;
