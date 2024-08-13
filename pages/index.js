// developerstool.codes
import Head from 'next/head';
import Link from 'next/link';
import BoxShadowGenerator from '../components/BoxShadowGenerator';
import { getAllPresets } from '../utils/presets';
import styles from '../styles/Home.module.css';  // Add this import

export default function Home({ presets }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Box Shadow Generator</title>
        <meta name="description" content="Create custom CSS box shadows with our easy-to-use generator" />
        <meta name="keywords" content="CSS, box-shadow, generator, web design" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Box Shadow Generator</h1>
        
        <BoxShadowGenerator />

        <section className={styles.presets}>
          <h2>Presets</h2>
          <ul>
            {presets.map((preset) => (
              <li key={preset.slug}>
                <Link href={`/${preset.slug}`}>
                  {preset.name}
                </Link>
              </li>
            ))}
          </ul>
        </section>
      </main>

      <footer className={styles.footer}>
        <p>Created with Next.js</p>
      </footer>
    </div>
  );
}

export async function getStaticProps() {
  const presets = getAllPresets();
  return {
    props: { presets },
  };
}