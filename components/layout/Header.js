import Link from "next/link";
import styles from "./layout.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.left}>
        <Link href="/">Food</Link>
      </div>
      <div className={styles.right}>
        <Link href="/menu">menu</Link>
        <Link href="/category">categories</Link>
      </div>
    </header>
  );
};

export default Header;
