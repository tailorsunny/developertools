// developerstool.codes
import Head from 'next/head';
import Link from 'next/link';
import SEO from '../components/SEO'

import BoxShadowGenerator from '../components/BoxShadowGenerator';
import { getAllPresets } from '../utils/presets';
import styles from '../styles/Home.module.css';  // Add this import

export default function Home({ pageTitle, pageDescription, pageKeywords }) {
  return (
    <div className={styles.container}>
      <SEO
        title={pageTitle}
        description={pageDescription}
        keywords={pageKeywords}
      />

      <main className={styles.main}>
        <h1 className={styles.title}>Box Shadow Generator</h1>

        <BoxShadowGenerator />

        {/* <section className={styles.presets}>
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
        </section> */}
      </main>

      <footer className={styles.footer}>
        <p>developertools.dev</p>
      </footer>
    </div>
  );
}

export async function getStaticProps() {
  const presets = getAllPresets();
  return {
    props: {
      pageTitle: "Box Shadow Generator",
      pageDescription: "Create custom CSS box shadows with our easy-to-use Box Shadow Generator tool",
      pageKeywords: "Box Shadow Generator, CSS tool, web design, shadow effects",
    },
  };
}