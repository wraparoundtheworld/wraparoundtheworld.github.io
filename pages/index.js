import Head from 'next/head';
import { Button } from '@react95/core';
import { Access229 } from '@react95/icons';

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Access229 variant="32x32_4" />

      <Button>Hello</Button>
    </div>
  );
}
