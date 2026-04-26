import styles from './MainSection.module.css'

const productList = [
  'Laptop Framework 13',
  'Mechanical Keyboard',
  'Monitor 27 Inch',
]

export default function MainSection() {
  return (
    <main className={styles.mainSection}>
      <h2 className={styles.heading}>Main Section</h2>
      <p className={styles.description}>Daftar produk ditampilkan pada section terpisah.</p>

      <ul className={styles.list}>
        {productList.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </main>
  )
}