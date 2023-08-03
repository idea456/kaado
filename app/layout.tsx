'use client'

import '../styles/globals.scss'
import Head  from 'next/head';
import Layout from '@/components/Layout'

export default function RootLayout({ children }: React.PropsWithChildren<unknown>) {
  return (
    <>
        <Head>
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" />
            <link href="https://fonts.googleapis.com/css2?family=Noto+Serif+JP:wght@300;400;500;700&display=swap" rel="stylesheet" />
        </Head>
        <Layout>
        {children}
        </Layout>
    </>
  );
}
