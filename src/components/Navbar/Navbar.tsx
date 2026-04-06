'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import styles from './Navbar.module.css';

const links = [
  { label: 'Sobre', href: '#sobre' },
  { label: 'Serviços', href: '#servicos' },
  { label: 'Contato', href: '#contato' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const close = () => setOpen(false);

  const handleAnchor = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();
    close();
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <>
      <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
        <nav className={styles.nav}>
          {/* Logo */}
          <a href="#inicio" onClick={(e) => handleAnchor(e, '#inicio')} className={styles.logoLink}>
            <Image
              src="/simply_nobg.png"
              alt="Magrão Pinturas"
              width={200}
              height={60}
              priority
              className={styles.logo}
            />
          </a>

          {/* Desktop links */}
          <ul className={styles.navLinks}>
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className={styles.navLink}
                  onClick={(e) => handleAnchor(e, l.href)}
                >
                  {l.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="https://wa.me/556992948505?text=Olá,%20poderia%20me%20ajudar%20com%20cor?"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.ctaNav}
              >
                <i className="fab fa-whatsapp" /> Orçamento
              </a>
            </li>
          </ul>

          {/* Hamburger */}
          <button
            className={`${styles.hamburger} ${open ? styles.active : ''}`}
            onClick={() => setOpen((p) => !p)}
            aria-label="Abrir menu"
          >
            <span />
            <span />
            <span />
          </button>
        </nav>
      </header>

      {/* Mobile drawer */}
      <div
        className={`${styles.drawer} ${open ? styles.drawerOpen : ''}`}
        role="dialog"
        aria-modal="true"
      >
        <ul className={styles.drawerLinks}>
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className={styles.drawerLink}
                onClick={(e) => handleAnchor(e, l.href)}
              >
                {l.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="https://wa.me/556992948505?text=Olá,%20poderia%20me%20ajudar%20com%20cor?"
              target="_blank"
              rel="noopener noreferrer"
              className={`${styles.drawerLink} ${styles.drawerCta}`}
              onClick={close}
            >
              <i className="fab fa-whatsapp" /> Solicitar Orçamento
            </a>
          </li>
        </ul>
      </div>

      {/* Overlay */}
      {open && (
        <div className={styles.overlay} onClick={close} aria-hidden="true" />
      )}
    </>
  );
}
