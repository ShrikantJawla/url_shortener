import Head from 'next/head'
import { useState } from 'react'
import { Navbar } from '../components/Navbar'
import { Result, ShortenLinkBox } from '../components/ShortenLinkBox'
import { ShortenLinks } from '../components/ShortenLinks'

export default function Home() {
  const [results, setResults] = useState<Result[]>([])
  const updateResults = (result: Result) => setResults([...results, result])
  return (
    <>
      <Head>
        <title>Short URL</title>
        <meta
          name="description"
          content="It is a free tool to shorten a URL or reduce a link"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Navbar />
        <ShortenLinkBox updateResults={updateResults} />
        <ShortenLinks results={results} />
      </main>
    </>
  )
}
