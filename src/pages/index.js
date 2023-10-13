import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';

import styles from './index.module.css';

function HeroBanner() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro">
            The Guides
          </Link>
        </div>
      </div>
    </header>
  );
}

function BackgroundWrapper(props) {
  return (
    <div className="adventurer-monthly-wallpaper-wrapper">
      {props.children}
    </div>)
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Guides and modules for foundry vtt, other oddities."
    >
      <BackgroundWrapper>
        <HeroBanner />
      </BackgroundWrapper>
    </Layout>
  );
}