import Head from "next/head";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <title>Home - Next.js Professional App</title>
        <meta name="description" content="Professional Next.js application with Pages Router" />
      </Head>

      <div className="hero">
        <div className="container">
          <h1>Welcome to Next.js</h1>
          <p>Professional web application built with Next.js Pages Router</p>
          <div className="hero-buttons">
            <Link href="/about" className="btn btn-primary">About Me →</Link>
            <Link href="/api/hello" className="btn btn-secondary">View API</Link>
          </div>
        </div>
      </div>

      <div className="container">
        <section className="features">
          <h2 style={{ textAlign: 'center', marginBottom: '50px', fontSize: '2.5rem', color: 'var(--text-primary)' }}>
            Features & Technologies
          </h2>
          
          <div className="grid">
            <div className="card feature-card">
              <h3>🚀 Next.js 13.4.7</h3>
              <p>Modern React framework with server-side rendering, static site generation, and optimized performance.</p>
            </div>
            
            <div className="card feature-card">
              <h3>📁 Pages Router</h3>
              <p>File-based routing system that automatically creates routes based on the file structure in the pages directory.</p>
            </div>
            
            <div className="card feature-card">
              <h3>⚡ Fast Development</h3>
              <p>Hot reload, fast refresh, and development server for rapid development and testing.</p>
            </div>
            
            <div className="card feature-card">
              <h3>🎨 Professional Design</h3>
              <p>Clean, modern UI with responsive design, smooth animations, and professional styling.</p>
            </div>
            
            <div className="card feature-card">
              <h3>🔗 API Routes</h3>
              <p>Built-in API routes for serverless functions and backend functionality without a separate server.</p>
            </div>
            
            <div className="card feature-card">
              <h3>📱 Responsive</h3>
              <p>Fully responsive design that works seamlessly on desktop, tablet, and mobile devices.</p>
            </div>
          </div>
        </section>

        <section className="project-info" style={{ marginTop: '60px' }}>
          <div className="card">
            <h2 style={{ marginBottom: '20px', color: 'var(--primary-color)' }}>Project Information</h2>
            <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))' }}>
              <div>
                <h4 style={{ color: 'var(--text-primary)', marginBottom: '10px' }}>Developer</h4>
                <p style={{ color: 'var(--text-secondary)' }}>Hammam Abdullah B.G</p>
              </div>
              <div>
                <h4 style={{ color: 'var(--text-primary)', marginBottom: '10px' }}>Student ID</h4>
                <p style={{ color: 'var(--text-secondary)' }}>2341720203</p>
              </div>
              <div>
                <h4 style={{ color: 'var(--text-primary)', marginBottom: '10px' }}>Program</h4>
                <p style={{ color: 'var(--text-secondary)' }}>Information Technology</p>
              </div>
              <div>
                <h4 style={{ color: 'var(--text-primary)', marginBottom: '10px' }}>Framework</h4>
                <p style={{ color: 'var(--text-secondary)' }}>Next.js 13.4.7</p>
              </div>
            </div>
          </div>
        </section>

        <section className="quick-links" style={{ marginTop: '40px', marginBottom: '40px' }}>
          <div className="card">
            <h3 style={{ marginBottom: '20px', color: 'var(--primary-color)' }}>Quick Navigation</h3>
            <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))' }}>
              <Link href="/about" className="btn btn-secondary" style={{ marginBottom: '10px' }}>
                📋 About Page
              </Link>
              <Link href="/api/hello" className="btn btn-secondary" style={{ marginBottom: '10px' }}>
                🔌 API Endpoint
              </Link>
              <a href="https://nextjs.org/docs" target="_blank" rel="noopener noreferrer" className="btn btn-secondary" style={{ marginBottom: '10px' }}>
                📚 Next.js Docs
              </a>
              <a href="https://reactjs.org/docs" target="_blank" rel="noopener noreferrer" className="btn btn-secondary" style={{ marginBottom: '10px' }}>
                ⚛️ React Docs
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
