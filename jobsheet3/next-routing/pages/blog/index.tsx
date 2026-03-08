import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'

interface BlogPost {
  title: string
  slug: string
  excerpt: string
  author: string
  date: string
}

const BlogPage: NextPage = () => {
  const blogPosts: BlogPost[] = [
    {
      title: 'Introduction to Next.js',
      slug: 'introduction-nextjs',
      excerpt: 'Learn the basics of Next.js framework and its powerful features.',
      author: 'Hammam Abdullah B.G',
      date: '2026-03-08'
    },
    {
      title: 'Routing Concepts in Web Development',
      slug: 'routing-concepts',
      excerpt: 'Understanding how routing works in modern web applications.',
      author: 'Hammam Abdullah B.G',
      date: '2026-03-07'
    },
    {
      title: 'TypeScript with React',
      slug: 'typescript-react',
      excerpt: 'Discover how TypeScript enhances React development.',
      author: 'Hammam Abdullah B.G',
      date: '2026-03-06'
    }
  ]

  return (
    <>
      <Head>
        <title>Blog - JOBSHEET PRAKTIKUM</title>
      </Head>
      
      <div className="hero">
        <div className="container">
          <h1>Blog</h1>
          <p>Daftar Artikel dengan Dynamic Routing</p>
        </div>
      </div>
      
      <div className="container">
        <div className="card">
          <h2 style={{ color: 'var(--primary-color)', marginBottom: '30px' }}>📝 Latest Blog Posts</h2>
          
          <div className="grid">
            {blogPosts.map((post, index) => (
              <div className="card" key={post.slug}>
                <h3 style={{ color: 'var(--primary-color)', marginBottom: '15px' }}>
                  {post.title}
                </h3>
                
                <p style={{ color: 'var(--text-secondary)', marginBottom: '15px', lineHeight: '1.6' }}>
                  {post.excerpt}
                </p>
                
                <div style={{ 
                  display: 'flex', 
                  justifyContent: 'space-between', 
                  alignItems: 'center',
                  fontSize: '14px',
                  color: 'var(--text-secondary)'
                }}>
                  <span>By {post.author} • {post.date}</span>
                  <Link 
                    href={`/blog/${post.slug}`}
                    className="btn btn-primary"
                    style={{ fontSize: '12px', padding: '6px 12px' }}
                  >
                    Read More →
                  </Link>
                </div>
              </div>
            ))}
          </div>
          
          <div style={{ marginTop: '40px', textAlign: 'center' }}>
            <Link href="/" className="btn btn-secondary">
              ← Back to Home
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default BlogPage
