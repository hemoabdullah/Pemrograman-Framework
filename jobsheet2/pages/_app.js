import Head from 'next/head';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Next.js Pages Router - Professional Web Application" />
        <meta name="author" content="Hammam Abdullah B.G" />
        <link rel="icon" href="/favicon.ico" />
        <title>Next.js Professional App</title>
      </Head>
      
      <div className="app-wrapper">
        <nav className="nav">
          <div className="container nav-container">
            <div className="nav-brand">Next.js App</div>
            <div className="nav-links">
              <a href="/" className="nav-link">Home</a>
              <a href="/about" className="nav-link">About</a>
              <a href="/api/hello" className="nav-link">API</a>
            </div>
          </div>
        </nav>
        
        <main>
          <Component {...pageProps} />
        </main>
        
        <footer className="footer">
          <div className="container">
            <p>&copy; 2026 Hammam Abdullah B.G. Built with Next.js Pages Router.</p>
          </div>
        </footer>
      </div>
    </>
  );
}

export default MyApp;
