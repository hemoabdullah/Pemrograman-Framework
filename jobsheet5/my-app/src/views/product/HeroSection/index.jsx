import styles from './HeroSection.module.css'

export default function HeroSection() {
  return (
    <header className={styles.hero}>
      <p className={styles.label}>Product View</p>
      <h1 className={styles.title}>Hero Section Produk</h1>
      <p className={styles.subtitle}>
        Tugas 2: Hero section dipisahkan dari main section untuk struktur view yang
        lebih maintainable.
      </p>
    </header>
  )
}