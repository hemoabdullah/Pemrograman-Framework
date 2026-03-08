import type { NextPage, GetServerSideProps } from 'next'
import Head from 'next/head'
import Link from 'next/link'

interface BlogPostProps {
  slug: string
}

interface BlogPost {
  title: string
  content: string
  author: string
  date: string
}

const BlogDetailPage: NextPage<BlogPostProps> = ({ slug }) => {
  // Sample blog posts data
  const blogPosts: Record<string, BlogPost> = {
    'introduction-nextjs': {
      title: 'Introduction to Next.js',
      content: 'Next.js is a React framework that enables server-side rendering, static site generation, and many other powerful features for building modern web applications.',
      author: 'Hammam Abdullah B.G',
      date: '2026-03-08'
    },
    'routing-concepts': {
      title: 'Routing Concepts in Web Development',
      content: 'Routing is the process of directing users to different pages based on their requests. In Next.js, routing is handled automatically based on the file structure.',
      author: 'Hammam Abdullah B.G',
      date: '2026-03-07'
    },
    'typescript-react': {
      title: 'TypeScript with React',
      content: 'TypeScript adds static typing to JavaScript, helping developers catch errors early and build more robust applications with better IntelliSense support.',
      author: 'Hammam Abdullah B.G',
      date: '2026-03-06'
    }
  }

  const post = blogPosts[slug] || {
    title: 'Post Not Found',
    content: 'The blog post you are looking for does not exist.',
    author: 'Unknown',
    date: '2026-03-08'
  }

  return (
    <>
      <Head>
        <title>{post.title} - Blog - JOBSHEET PRAKTIKUM</title>
      </Head>
      
      <div className="hero">
        <div className="container">
          <h1>Blog Post</h1>
          <p>Dynamic Routing dengan slug: <strong>{slug}</strong></p>
        </div>
      </div>
      
      <div className="container">
        <div className="card">
          <div style={{ marginBottom: '30px' }}>
            <h2 style={{ color: 'var(--primary-color)', marginBottom: '15px' }}>
              📝 {post.title}
            </h2>
            
            <div style={{ 
              display: 'flex', 
              justifyContent: 'space-between', 
              alignItems: 'center',
              marginBottom: '20px',
              padding: '10px 0',
              borderBottom: '1px solid var(--border-color)'
            }}>
              <div>
                <p style={{ color: 'var(--text-secondary)', fontSize: '14px' }}>
                  <strong>Author:</strong> {post.author}
                </p>
                <p style={{ color: 'var(--text-secondary)', fontSize: '14px' }}>
                  <strong>Published:</strong> {post.date}
                </p>
              </div>
              
              <div style={{ textAlign: 'right' }}>
                <span style={{ 
                  backgroundColor: 'var(--primary-color)', 
                  color: 'white', 
                  padding: '4px 8px', 
                  borderRadius: '4px',
                  fontSize: '12px'
                }}>
                  BLOG
                </span>
              </div>
            </div>
          </div>
          
          <div className="card">
            <div style={{ lineHeight: '1.8', color: 'var(--text-primary)' }}>
              {post.content}
            </div>
          </div>
          
          <div style={{ marginTop: '30px', textAlign: 'center' }}>
            <div style={{ display: 'flex', gap: '15px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link href="/blog" className="btn btn-secondary">
                ← Back to Blog List
              </Link>
              <Link href="/" className="btn btn-primary">
                🏠 Home
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export const getServerSideProps: GetServerSideProps<BlogPostProps> = async (context) => {
  const { slug } = context.params as { slug: string }
  
  return {
    props: {
      slug
    }
  }
}

export default BlogDetailPage
