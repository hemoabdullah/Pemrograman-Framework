import Head from 'next/head'
import { useRouter } from 'next/router'

export default function CategoryCatchAllPage() {
  const router = useRouter()
  const slug = Array.isArray(router.query.slug) ? router.query.slug : []

  return (
    <>
      <Head>
        <title>Category Route</title>
      </Head>

      <section className="pageBlock">
        <p className="eyebrow">Catch-All Route</p>
        <h1>/category/[...slug]</h1>
        <p className="lead">Seluruh parameter URL ditampilkan dalam bentuk list.</p>

        <div className="panel">
          <h2>Slug Parts</h2>
          <ul className="bulletList">
            {slug.map((item, index) => (
              <li key={`${item}-${index}`}>
                {index + 1}. {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="metaRow">
          <span>Path</span>
          <strong>{router.asPath}</strong>
        </div>
      </section>
    </>
  )
}