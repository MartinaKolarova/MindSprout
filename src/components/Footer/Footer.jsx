import Link from 'next/link';
import styles from './Footer.module.css';
export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.Credits}>
        <Link href="/credits">Credits</Link>
      </div>
      <p>
        © 2024, Webová stránka vytvořena v rámci Webové akademie Czechitas
        autory:
        <a href="https://github.com/MartinaKolarova"> Martina</a>,
        <a href="https://github.com/NikolKarnikova"> Nikol</a>
      </p>
    </footer>
  );
};
