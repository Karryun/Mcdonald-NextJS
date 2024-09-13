import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <p>
          Get started by editing&nbsp;
          <code className={styles.code}>app/page.js</code>
        </p>
      </div>

      <div className={styles.center}>
        <Image
          className={styles.logo}
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
      </div>

      <div className={styles.grid}>
        <Link
          href="/hoon"
          className={styles.card}
          rel="noopener noreferrer"
        >
          <h2>
            동훈 <span>-&gt;</span>
          </h2>
        </Link>

        <Link
          href="/jake"
          className={styles.card}
          rel="noopener noreferrer"
        >
          <h2>
            준혁 <span>-&gt;</span>
          </h2>
        </Link>

        <Link
          href="/sohee"
          className={styles.card}
          rel="noopener noreferrer"
        >
          <h2>
            소희 <span>-&gt;</span>
          </h2>
        </Link>

        <Link
          href="/karryun"
          className={styles.card}
          rel="noopener noreferrer"
        >
          <h2>
            도연 <span>-&gt;</span>
          </h2>
        </Link>

        <Link
          href="/sang"
          className={styles.card}
          rel="noopener noreferrer"
        >
          <h2>
            상훈 <span>-&gt;</span>
          </h2>
        </Link>
      </div>
    </main>
  );
}
