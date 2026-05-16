import { useEffect, useState } from "react";
import {
  FiChevronDown,
  FiHeart,
  FiMenu,
  FiSearch,
  FiShoppingBag,
  FiUser,
  FiX,
} from "react-icons/fi";
import BrandMark from "./BrandMark.jsx";
import { defaultOrderLink, navLinks } from "../data/siteData.js";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 16);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const closeMenu = () => setOpen(false);
    window.addEventListener("resize", closeMenu);
    return () => window.removeEventListener("resize", closeMenu);
  }, []);

  return (
    <header className={`site-header ${scrolled ? "site-header--scrolled" : ""}`}>
      <div className="site-ribbon">FREE SHIPPING PAN INDIA | CERTIFIED GOLD &amp; DIAMONDS</div>
      <nav className="site-nav" aria-label="Primary">
        <BrandMark />
        <button
          type="button"
          className="nav-toggle"
          onClick={() => setOpen((value) => !value)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <FiX /> : <FiMenu />}
        </button>
        <div className={`nav-menu ${open ? "nav-menu--open" : ""}`}>
          {navLinks.map((link) => (
            <a key={link.label} href={link.href} onClick={() => setOpen(false)}>
              <span>{link.label}</span>
              {link.menu && <FiChevronDown aria-hidden="true" />}
            </a>
          ))}
        </div>
        <div className="nav-icons" aria-label="Quick actions">
          <a href="#collections" aria-label="Search collections">
            <FiSearch />
          </a>
          <a href="#occasions" aria-label="View gifting ideas">
            <FiHeart />
          </a>
          <a href={defaultOrderLink} target="_blank" rel="noreferrer" aria-label="Order on WhatsApp">
            <FiShoppingBag />
            <span>0</span>
          </a>
          <a href="#story" aria-label="View our story">
            <FiUser />
          </a>
        </div>
      </nav>
    </header>
  );
}
