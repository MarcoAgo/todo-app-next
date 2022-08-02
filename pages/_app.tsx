import type { AppProps } from 'next/app'
import { QueryClientProvider, QueryClient, Hydrate,  } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { useState } from 'react'
import { Provider } from 'jotai'
import ErrorBoundary from '../components/error/ErrorBoundary'
import Loader from '../components/shared/Loader'
import { globalStyles } from '../styles/styled/stitches.config'

const client = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 500000,
    }
  }
})

function MyApp({ Component, pageProps }: AppProps) {
  const [queryClient] = useState(() => client)

  globalStyles()

  const renderPage = () => pageProps.dehydratedState
    ? (
        <Provider>
            <Component {...pageProps} /> 
          </Provider>
      )
    : <Loader />

  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>
      <ErrorBoundary error={pageProps.error}>
        <ReactQueryDevtools />
          {renderPage()}
        </ErrorBoundary>
      </Hydrate>
    </QueryClientProvider>
  )
}

export default MyApp
