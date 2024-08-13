import React, { useState } from 'react';
import styles from '../styles/BoxShadowGenerator.module.css';

const BoxShadowGenerator = ({ initialValues }) => {
  const [values, setValues] = useState(initialValues || {
    horizontalLength: 16,
    verticalLength: 16,
    blurRadius: 4,
    spreadRadius: 6,
    shadowColor: '#000000',
    backgroundColor: '#ffffff',
    boxColor: '#cccccc',
    opacity: 1,
    outline: 0,
    inset: false,
  });
  const [copied, setCopied] = useState(false);

  const handleChange = (e) => {
    const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
    setValues({ ...values, [e.target.name]: value });
  };

  const boxShadow = `${values.inset ? 'inset ' : ''}${values.horizontalLength}px ${values.verticalLength}px ${values.blurRadius}px ${values.spreadRadius}px ${values.shadowColor}${Math.round(values.opacity * 255).toString(16).padStart(2, '0')}`;

  const boxStyle = {
    width: '200px',
    height: '200px',
    backgroundColor: values.boxColor,
    boxShadow,
    outline: `${values.outline}px solid ${values.shadowColor}`,
  };
  const cssCode = `box-shadow: ${boxShadow};
background-color: ${values.backgroundColor};
outline: ${values.outline}px solid ${values.shadowColor};`;

  const copyToClipboard = () => {
    navigator.clipboard.writeText(cssCode).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };
  return (
    <div className={styles.container}>
      <div className={styles.preview} style={{ backgroundColor: values.backgroundColor }}>
        <div style={boxStyle}></div>
      </div>
      <div className={styles.controls}>
        <label>
          Horizontal Length:
          <input type="range" name="horizontalLength" min="-50" max="50" value={values.horizontalLength} onChange={handleChange} />
          <span>{values.horizontalLength}px</span>
        </label>
        <label>
          Vertical Length:
          <input type="range" name="verticalLength" min="-50" max="50" value={values.verticalLength} onChange={handleChange} />
          <span>{values.verticalLength}px</span>
        </label>
        <label>
          Blur Radius:
          <input type="range" name="blurRadius" min="0" max="100" value={values.blurRadius} onChange={handleChange} />
          <span>{values.blurRadius}px</span>
        </label>
        <label>
          Spread Radius:
          <input type="range" name="spreadRadius" min="-50" max="50" value={values.spreadRadius} onChange={handleChange} />
          <span>{values.spreadRadius}px</span>
        </label>
        <label>
          Shadow Color:
          <input type="color" name="shadowColor" value={values.shadowColor} onChange={handleChange} />
        </label>
        <label>
          Background Color:
          <input type="color" name="backgroundColor" value={values.backgroundColor} onChange={handleChange} />
        </label>
        <label>
          Box Color:
          <input type="color" name="boxColor" value={values.boxColor} onChange={handleChange} />
        </label>
        <label>
          Opacity:
          <input type="range" name="opacity" min="0" max="1" step="0.01" value={values.opacity} onChange={handleChange} />
          <span>{values.opacity}</span>
        </label>
        <label>
          Outline:
          <input type="range" name="outline" min="0" max="20" value={values.outline} onChange={handleChange} />
          <span>{values.outline}px</span>
        </label>
        <label>
          Inset:
          <input type="checkbox" name="inset" checked={values.inset} onChange={handleChange} />
        </label>
      </div>
      <div className={styles.codeContainer}>
        <pre className={styles.code}>{cssCode}</pre>
        <button onClick={copyToClipboard} className={styles.copyButton}>
          {copied ? 'Copied!' : 'Copy to Clipboard'}
        </button>
      </div>
    </div>
  );
};

export default BoxShadowGenerator;