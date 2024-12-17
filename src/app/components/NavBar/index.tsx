"use client";

import { useState } from "react";
import Link from "next/link";
import "./index.scss";
import videos from "./../../mock/videos";

const Navbar: React.FC = () => {

  const uniqueCategories = videos.reduce((categories, video) => {
    if (!categories.includes(video.category)) {
      categories.push(video.category);
    }
    return categories;
  }, [] as string[]);

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className="navbar bg-neutral-950">
      <div className="navbar-container">
        {/* Hamburger Menu */}
        <button className="menu-toggle" onClick={toggleMenu}>
          ☰
        </button>

        <div className={`menu ${isMenuOpen ? "open" : ""}`}>
          <div className="dropdown">
            <button className="dropdown-toggle">Categories</button>
            <ul className="dropdown-menu bg-neutral-800">
              {
                uniqueCategories.map((category, index) => (
                  <li key={index}><Link className="p-2 text-small" href={`/category/${category.toLowerCase().replaceAll(" ","-")}`}>{category}</Link></li>
                ))
              }
            </ul>
          </div>



          <Link href="/vanilla-link" className="nav-link">
            Dummy Link
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;