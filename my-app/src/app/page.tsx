import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Image
          className={styles.logo}
          src="https://drive.google.com/uc?export=view&id=1x7v5OhkTxtz5Dtr2MzwmUFumOQFib21V"
          alt="Scholarly Logo"
          width={100}
          height={100}
          priority
        />
        <div className={styles.ctas}>
            <h2>Website under construction</h2>
        </div>
      </main>
    </div>
  );
}
