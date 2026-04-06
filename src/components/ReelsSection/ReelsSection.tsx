'use client';

import { useRef, useState, useCallback, useEffect } from 'react';
import { useInView } from '@/hooks/useInView';
import styles from './ReelsSection.module.css';

const videos = [
  { src: '/videos/video_1.mp4', autoPlay: true,  featured: true  },
  { src: '/videos/video_2.mp4', autoPlay: false, featured: false },
  { src: '/videos/video_3.mp4', autoPlay: false, featured: false },
];

function VideoCard({
  src,
  autoPlay,
  featured = false,
  delay = 0,
}: {
  src: string;
  autoPlay: boolean;
  featured?: boolean;
  delay?: number;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(autoPlay);
  const [cardRef, inView] = useInView<HTMLDivElement>({ threshold: 0.1 });

  const toggle = () => {
    const v = videoRef.current;
    if (!v) return;
    v.paused ? (v.play(), setPlaying(true)) : (v.pause(), setPlaying(false));
  };

  return (
    <div
      ref={cardRef}
      className={`${styles.card} ${featured ? styles.cardFeatured : styles.cardSecondary} reveal reveal--up ${inView ? 'revealed' : ''}`}
      style={{ transitionDelay: `${delay}s` }}
      onClick={toggle}
    >
      {featured && (
        <div className={styles.featuredBadge}>
          <i className="fas fa-star" /> Em Destaque
        </div>
      )}
      <video
        ref={videoRef}
        src={src}
        muted
        loop
        playsInline
        autoPlay={autoPlay}
        className={styles.video}
      />
      <div className={`${styles.playOverlay} ${playing ? styles.hidden : ''}`}>
        <div className={styles.playIcon}>
          <i className="fas fa-play" />
        </div>
      </div>
      {featured && <div className={styles.featuredGradient} aria-hidden="true" />}
      <div className={styles.cardBorder} aria-hidden="true" />
    </div>
  );
}

export default function ReelsSection() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const total = videos.length;

  /* Header reveal */
  const [headerRef, headerInView] = useInView<HTMLDivElement>({ threshold: 0.2 });

  const onScroll = useCallback(() => {
    const track = trackRef.current;
    if (!track) return;
    const cardWidth = track.scrollWidth / total;
    const idx = Math.round(track.scrollLeft / cardWidth);
    setActiveIndex(Math.min(Math.max(idx, 0), total - 1));
  }, [total]);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    track.addEventListener('scroll', onScroll, { passive: true });
    return () => track.removeEventListener('scroll', onScroll);
  }, [onScroll]);

  const goTo = (index: number) => {
    const track = trackRef.current;
    if (!track) return;
    track.scrollTo({ left: (track.scrollWidth / total) * index, behavior: 'smooth' });
  };

  return (
    <section id="servicos" className={styles.section}>
      <div className={styles.inner}>
        {/* Header */}
        <div
          ref={headerRef}
          className={`${styles.header} reveal reveal--up ${headerInView ? 'revealed' : ''}`}
        >
          <div className={styles.headerText}>
            <span className={styles.tag}>Portfólio</span>
            <h2 className={styles.heading}>Conheça nosso<br />trabalho</h2>
            <p className={styles.sub}>
              Cada projeto conta uma história.<br />Veja a transformação que a cor pode fazer.
            </p>
          </div>

          <div className={styles.statsRow}>
            {[
              { icon: 'fa-paint-roller', value: '200+', label: 'Projetos' },
              { icon: 'fa-map-marker-alt', value: 'Porto Velho', label: 'RO' },
              { icon: 'fa-calendar', value: '2022', label: 'Desde' },
            ].map((s, i) => (
              <div
                key={s.label}
                className={`${styles.statChip} reveal reveal--scale ${headerInView ? 'revealed' : ''}`}
                style={{ transitionDelay: `${0.15 + i * 0.1}s` }}
              >
                <i className={`fas ${s.icon}`} />
                <span><strong>{s.value}</strong> {s.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Carousel wrapper */}
        <div className={styles.carouselWrapper}>
          <button
            className={`${styles.arrow} ${styles.arrowLeft} ${activeIndex === 0 ? styles.arrowDisabled : ''}`}
            onClick={() => goTo(Math.max(activeIndex - 1, 0))}
            aria-label="Vídeo anterior"
          >
            <i className="fas fa-chevron-left" />
          </button>

          <div className={styles.track} ref={trackRef}>
            <div className={styles.grid}>
              {videos.map((v, i) => (
                <VideoCard
                  key={i}
                  src={v.src}
                  autoPlay={v.autoPlay}
                  featured={v.featured}
                  delay={i * 0.12}
                />
              ))}
            </div>
          </div>

          <button
            className={`${styles.arrow} ${styles.arrowRight} ${activeIndex === total - 1 ? styles.arrowDisabled : ''}`}
            onClick={() => goTo(Math.min(activeIndex + 1, total - 1))}
            aria-label="Próximo vídeo"
          >
            <i className="fas fa-chevron-right" />
          </button>
        </div>

        {/* Dots – mobile only */}
        <div className={styles.dots} aria-label="Indicadores de slide">
          {videos.map((_, i) => (
            <button
              key={i}
              className={`${styles.dot} ${i === activeIndex ? styles.dotActive : ''}`}
              onClick={() => goTo(i)}
              aria-label={`Ir para vídeo ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
