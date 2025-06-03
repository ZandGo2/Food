import Link from "next/link";
import styles from "./homePage.module.css"

const Guide = () => {
  return (
    <div className={styles.containerGuide}>
      <Link href="/menu">Menu</Link>
      <Link href="/categories">Categories</Link>
      <Link href="/">Discount</Link>
    </div>
  );
};

export default Guide;
