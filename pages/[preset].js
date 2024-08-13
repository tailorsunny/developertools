import Head from 'next/head';
import BoxShadowGenerator from '../components/BoxShadowGenerator';
import { getPresetBySlug, getAllPresets } from '../utils/presets';

export default function PresetPage({ preset }) {
  return (
    <div>
      <Head>
        <title>{`${preset.name} - Box Shadow Generator`}</title>
        <meta name="description" content={`Create a ${preset.name} box shadow effect with our generator`} />
        <meta name="keywords" content={`CSS, box-shadow, ${preset.name}, web design`} />
      </Head>
      <h1>{preset.name} Box Shadow</h1>
      <BoxShadowGenerator initialValues={preset.values} />
    </div>
  );
}

export async function getStaticPaths() {
  const presets = getAllPresets();
  const paths = presets.map((preset) => ({ params: { preset: preset.slug } }));
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const preset = getPresetBySlug(params.preset);
  return { props: { preset } };
}