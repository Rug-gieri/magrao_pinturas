'use client';

import { useInView } from '@/hooks/useInView';
import styles from './Footer.module.css';

const ctaButtons = [
  {
    href: 'https://wa.me/556992948505?text=Olá,%20poderia%20me%20ajudar%20com%20cor?',
    icon: 'fab fa-whatsapp',
    label: 'Mensagem',
    variant: 'whatsapp',
  },
  {
    href: 'https://wa.me/c/556992948505',
    icon: 'fab fa-whatsapp',
    label: 'Catálogo',
    variant: 'catalog',
  },
  {
    href: 'https://www.instagram.com/magraopinturas7/',
    icon: 'fab fa-instagram',
    label: 'Instagram',
    variant: 'insta',
  },
];

export default function Footer() {
  const [innerRef, inView] = useInView<HTMLDivElement>({ threshold: 0.2 });

  return (
    <footer className={styles.footer} id="contato">
      <div className={styles.glow} aria-hidden="true" />

      <div ref={innerRef} className={styles.inner}>
        {/* Tag + heading */}
        <span
          className={`section-tag ${styles.tag} reveal reveal--up ${inView ? 'revealed' : ''}`}
        >
          Contato
        </span>

        <h2
          className={`${styles.heading} reveal reveal--up ${inView ? 'revealed' : ''}`}
          style={{ transitionDelay: '0.1s' }}
        >
          Fale comigo, veja preços e acompanhe
        </h2>

        <p
          className={`${styles.sub} reveal reveal--up ${inView ? 'revealed' : ''}`}
          style={{ transitionDelay: '0.2s' }}
        >
          Entre em contato e descubra como podemos transformar{' '}
          <strong>sua ideia em realidade</strong>.
        </p>

        {/* CTA buttons – staggered */}
        <div className={styles.buttons}>
          {ctaButtons.map((b, i) => (
            <a
              key={b.label}
              href={b.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`${styles.btn} ${styles[b.variant as keyof typeof styles]} reveal reveal--up ${inView ? 'revealed' : ''}`}
              style={{ transitionDelay: `${0.3 + i * 0.1}s` }}
            >
              <i className={b.icon} />
              {b.label}
            </a>
          ))}
        </div>

        <div
          className={`${styles.divider} reveal reveal--scale ${inView ? 'revealed' : ''}`}
          style={{ transitionDelay: '0.65s' }}
        />

        <div
          className={`${styles.bottom} reveal reveal--up ${inView ? 'revealed' : ''}`}
          style={{ transitionDelay: '0.75s' }}
        >
          <p className={styles.copyright}>
            © 2025{' '}
            <a href="https://rethinksoftware.com.br" target="_blank" rel="noopener noreferrer">
              Rethink Software
            </a>
            . Todos os direitos reservados.
          </p>
          <p className={styles.made}>
            Feito com <i className="fas fa-heart" style={{ color: '#ff4444' }} /> em Porto Velho
          </p>
        </div>
      </div>
    </footer>
  );
}
