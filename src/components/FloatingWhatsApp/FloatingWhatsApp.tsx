import styles from './FloatingWhatsApp.module.css';

export default function FloatingWhatsApp() {
  return (
    <a
      href="https://wa.me/556992948505?text=Olá,%20poderia%20me%20ajudar%20com%20cor?"
      target="_blank"
      rel="noopener noreferrer"
      className={styles.btn}
      aria-label="Falar no WhatsApp"
    >
      <i className="fab fa-whatsapp" />
      <span className={styles.tooltip}>Falar no WhatsApp</span>
    </a>
  );
}
