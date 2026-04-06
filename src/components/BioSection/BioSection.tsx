'use client';

import Image from 'next/image';
import { useInView } from '@/hooks/useInView';
import styles from './BioSection.module.css';

export default function BioSection() {
  const [photoRef, photoInView] = useInView<HTMLDivElement>({ threshold: 0.2 });
  const [contentRef, contentInView] = useInView<HTMLDivElement>({ threshold: 0.15 });

  return (
    <section id="sobre" className={styles.section}>
      <div className={styles.inner}>
        {/* Photo – slides in from the left */}
        <div
          ref={photoRef}
          className={`${styles.photoWrap} reveal reveal--left ${photoInView ? 'revealed' : ''}`}
        >
          <div className={styles.photoRing} aria-hidden="true" />
          <div className={styles.photoContainer}>
            <Image
              src="/images/magrao.png"
              alt="Dean De Andrade Belo – Magrão Pinturas"
              fill
              sizes="(max-width: 640px) 260px, 380px"
              className={styles.photo}
            />
          </div>
          <div className={styles.badge}>
            <i className="fas fa-paint-roller" />
            <span>Desde 2022</span>
          </div>
        </div>

        {/* Content – slides in from the right */}
        <div
          ref={contentRef}
          className={`${styles.content} reveal reveal--right ${contentInView ? 'revealed' : ''}`}
        >
          <span className="section-tag">Quem somos</span>
          <h2 className={styles.heading}>
            Dean De Andrade Belo
            <br />
            <span>Pintor Imobiliário</span>
          </h2>
          <p className={styles.body}>
            Porto Velho, 24 anos, mudando desde 2022 a vida das pessoas
            através das cores. Jovem e disposto a descomplicar sua vida quando
            o assunto é pintura! Acompanhe meus trabalhos diariamente nas
            redes sociais e me chama pra um orçamento!
          </p>

          {/* Social proof chips */}
          <div className={styles.chips}>
            {[
              { icon: 'fa-map-marker-alt', label: 'Porto Velho · RO' },
              { icon: 'fa-star', label: 'Alta avaliação' },
              { icon: 'fa-clock', label: 'Resposta rápida' },
            ].map((c, i) => (
              <span
                key={c.label}
                className={`${styles.chip} reveal reveal--up ${contentInView ? 'revealed' : ''}`}
                style={{ transitionDelay: `${0.15 + i * 0.08}s` }}
              >
                <i className={`fas ${c.icon}`} />
                {c.label}
              </span>
            ))}
            {/* GuiaFix verified badge */}
            <a
              href="https://guiafix.com.br/porto-velho-ro/pintor"
              target="_blank"
              rel="noopener noreferrer"
              className={`${styles.chip} ${styles.chipGuia} reveal reveal--up ${contentInView ? 'revealed' : ''}`}
              style={{ transitionDelay: '0.39s' }}
              title="Ver perfil no GuiaFix"
            >
              <i className="fas fa-shield-alt" />
              Verificado no GuiaFix
            </a>
          </div>

          <div className={styles.actions}>
            <a
              href="https://wa.me/556992948505?text=Olá,%20poderia%20me%20ajudar%20com%20cor?"
              target="_blank"
              rel="noopener noreferrer"
              className={`${styles.btnWhatsapp} reveal reveal--up ${contentInView ? 'revealed' : ''}`}
              style={{ transitionDelay: '0.5s' }}
            >
              <i className="fab fa-whatsapp" /> Fale Comigo no WhatsApp
            </a>
            <a
              href="https://www.instagram.com/magraopinturas7/"
              target="_blank"
              rel="noopener noreferrer"
              className={`${styles.btnInsta} reveal reveal--up ${contentInView ? 'revealed' : ''}`}
              style={{ transitionDelay: '0.6s' }}
            >
              <i className="fab fa-instagram" /> Instagram
            </a>
            <a
              href="https://guiafix.com.br/porto-velho-ro/pintor"
              target="_blank"
              rel="noopener noreferrer"
              className={`${styles.btnGuia} reveal reveal--up ${contentInView ? 'revealed' : ''}`}
              style={{ transitionDelay: '0.7s' }}
            >
              <i className="fas fa-th-large" /> Ver no GuiaFix
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
