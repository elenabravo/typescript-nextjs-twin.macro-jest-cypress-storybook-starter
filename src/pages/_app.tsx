/* eslint-disable @typescript-eslint/no-require-imports */
import React from 'react'
import type { AppProps } from 'next/app'
import { CacheProvider } from '@emotion/react'
import { cache } from '@emotion/css'
import GlobalStyles from '../styles/GlobalStyles'

if (typeof window !== 'undefined' && process.env.NODE_ENV !== 'production') {
  const ReactDOM = require('react-dom')
  const axe = require('@axe-core/react')
  axe(React, ReactDOM, 1000)
}

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <CacheProvider value={cache}>
      <GlobalStyles />
      <Component {...pageProps} />
    </CacheProvider>
  )
}

export default MyApp
