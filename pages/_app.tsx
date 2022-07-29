import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { QueryClientProvider, QueryClient, Hydrate,  } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { useState } from 'react'
import { Provider } from 'jotai'
import ErrorBoundary from '../components/error/ErrorBoundary'

const client = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity,
    }
  }
})

function MyApp({ Component, pageProps }: AppProps) {
  const [queryClient] = useState(() => client)

  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>
      <ErrorBoundary error={pageProps.error}>
        {pageProps.dehydratedState && (
          <Provider>
            <ReactQueryDevtools />
            <Component {...pageProps} />
          </Provider>
        )}
        </ErrorBoundary>
      </Hydrate>
    </QueryClientProvider>
  )
}

export default MyApp
