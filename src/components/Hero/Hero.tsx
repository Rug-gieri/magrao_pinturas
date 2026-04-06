'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import styles from './Hero.module.css';

export default function Hero() {
  const headingRef = useRef<HTMLHeadingElement>(null);
  const subRef = useRef<HTMLParagraphElement>(null);
  const btnsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Staggered entrance animations using plain CSS classes
    const elements = [headingRef.current, subRef.current, btnsRef.current];
    elements.forEach((el, i) => {
      if (!el) return;
      el.style.animationDelay = `${i * 0.18}s`;
      el.classList.add(styles.fadeInUp);
    });
  }, []);

  const scrollTo = (id: string) =>
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section id="inicio" className={styles.hero}>
      {/* Parallax background */}
      <div className={styles.bgWrapper} aria-hidden="true">
        <Image
          src="/images/home_hero.png"
          alt="Background pintura"
          fill
          priority
          className={styles.bgImage}
          sizes="100vw"
        />
        <div className={styles.bgOverlay} />
      </div>

      {/* Floating paint-stroke accents */}
      <div className={styles.accent1} aria-hidden="true" />
      <div className={styles.accent2} aria-hidden="true" />

      {/* Content */}
      <div className={styles.content}>
        <span className={`section-tag ${styles.tag}`}>Porto Velho · RO</span>
        <h1 ref={headingRef} className={styles.heading}>
          O poder de um novo começo,<br />
          com uma nova{' '}
          <span className="highlight">cor</span>.
        </h1>
        <p ref={subRef} className={styles.sub}>
          Simplificando a pintura da sua casa com um clique.
        </p>

        <div ref={btnsRef} className={styles.buttons}>
          <a
            href="https://wa.me/556992948505?text=Olá,%20poderia%20me%20ajudar%20com%20cor?"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.btnPrimary}
          >
            <i className="fab fa-whatsapp" /> Solicitar Orçamento
          </a>
          <button
            onClick={() => scrollTo('#servicos')}
            className={styles.btnSecondary}
          >
            Ver Trabalhos <i className="fas fa-arrow-down" />
          </button>
        </div>

        {/* Stats row */}
        <div className={styles.stats}>
          {[
            { value: '200+', label: 'Projetos Concluídos' },
            { value: '4 anos', label: 'de Experiência' },
            { value: '5★', label: 'Avaliação Média' },
          ].map((s) => (
            <div key={s.label} className={styles.statItem}>
              <strong>{s.value}</strong>
              <span>{s.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        className={styles.scrollIndicator}
        onClick={() => scrollTo('#servicos')}
        aria-label="Rolar para baixo"
      >
        <i className="fas fa-chevron-down" />
      </button>
    </section>
  );
}
