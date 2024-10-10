import router from './router'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { TonConnectUIProvider } from '@tonconnect/ui-react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import setTma from './shared/utils/setTma'
import './styles/global.scss'
import './styles/variables.scss'

const domNode = document.getElementById('root')!
const root = createRoot(domNode)

const queryClient = new QueryClient()

root.render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <TonConnectUIProvider manifestUrl={import.meta.env.VITE_MANIFEST_URL}>
        <RouterProvider router={router} />
      </TonConnectUIProvider>
    </QueryClientProvider>
  </StrictMode>
)

setTma()