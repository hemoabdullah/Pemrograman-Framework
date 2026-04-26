import styles from './products.module.scss'

function ProductCard({ item }) {
  return (
    <article className={styles.card}>
      <img className={styles.card__image} src={item.image} alt={item.name} />
      <div className={styles.card__content}>
        <p className={styles.card__category}>{item.category}</p>
        <h2 className={styles.card__name}>{item.name}</h2>
        <p className={styles.card__price}>
          {new Intl.NumberFormat('id-ID', {
            style: 'currency',
            currency: 'IDR',
            maximumFractionDigits: 0
          }).format(item.price)}
        </p>
      </div>
    </article>
  )
}

function SkeletonCard() {
  return (
    <article className={styles.card}>
      <div className={`${styles.skeleton} ${styles.skeletonImage}`} />
      <div className={styles.card__content}>
        <div className={`${styles.skeleton} ${styles.skeletonText}`} />
        <div className={`${styles.skeleton} ${styles.skeletonTextWide}`} />
        <div className={`${styles.skeleton} ${styles.skeletonTextShort}`} />
      </div>
    </article>
  )
}

export default function ProductView({
  mode,
  products,
  loading,
  error,
  message,
  onRefresh
}) {
  return (
    <main className={styles.wrapper}>
      <div className={styles.header}>
        <div>
          <p className={styles.eyebrow}>Week 8 - CSR Data Fetching</p>
          <h1 className={styles.title}>Halaman Produk ({mode})</h1>
          <p className={styles.subtitle}>
            Menampilkan data dari endpoint <strong>/api/products</strong> dengan
            skeleton loading dan animasi.
          </p>
        </div>

        {onRefresh ? (
          <button
            className={styles.refreshButton}
            type="button"
            onClick={onRefresh}
            disabled={loading}
          >
            {loading ? 'Memuat...' : 'Refresh Data'}
          </button>
        ) : null}
      </div>

      {message ? <p className={styles.status}>{message}</p> : null}
      {error ? <p className={styles.error}>{error}</p> : null}

      <section className={styles.grid}>
        {loading
          ? [1, 2, 3].map((item) => <SkeletonCard key={item} />)
          : products.map((item) => <ProductCard key={item.id} item={item} />)}
      </section>
    </main>
  )
}
