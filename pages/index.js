import Head from 'next/head';
import { Button, Icon } from '@react95/core';

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Icon name="access_229_32x32_4bit" />

      <Button>Hello</Button>
    </div>
  );
}
