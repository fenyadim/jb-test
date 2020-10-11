import Header from "./Header";
import Footer from "./Footer";

import styles from "../styles/components/layout.module.scss";

export default function Layout({ children }) {
  return (
    <div className={styles.container}>
      <Header />
      <div className={styles.offer}>{children}</div>
      <Footer />
    </div>
  );
}
