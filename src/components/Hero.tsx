import styles from "./Hero.module.css";

export default function Hero({ first, second }) {
  return (
    <>
      <section className={styles["hero-section"]}>
        <article className={styles["hero-title"]}>
          <span className={styles["hero-span"]}>{first}</span>
          <span className={styles["hero-span"]}>{second}</span>
        </article>
      </section>
    </>
  );
}
