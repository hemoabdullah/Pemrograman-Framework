import Head from "next/head";
import Link from "next/link";

export default function About() {
  return (
    <>
      <Head>
        <title>About - Next.js Professional App</title>
        <meta name="description" content="About page - Hammam Abdullah B.G" />
      </Head>

      <div className="container">
        <div className="hero" style={{ padding: '60px 0', marginBottom: '40px' }}>
          <h1>About Me</h1>
          <p>Information Technology Student & Web Developer</p>
        </div>

        <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' }}>
          <div className="card">
            <h3 style={{ color: 'var(--primary-color)', marginBottom: '20px' }}>👤 Personal Information</h3>
            <div style={{ lineHeight: '1.8' }}>
              <p><strong>Nama Mahasiswa:</strong> Hammam Abdullah B.G</p>
              <p><strong>NIM:</strong> 2341720203</p>
              <p><strong>Program Studi:</strong> Information Technology</p>
            </div>
          </div>

          <div className="card">
            <h3 style={{ color: 'var(--primary-color)', marginBottom: '20px' }}>🎓 Academic Details</h3>
            <div style={{ lineHeight: '1.8' }}>
              <p><strong>University:</strong> [Politeknik negeri malang]</p>
              <p><strong>Faculty:</strong> [Information Technology]</p>
              <p><strong>Year:</strong> [2026]</p>
              <p><strong>GPA:</strong> [3.8]</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
