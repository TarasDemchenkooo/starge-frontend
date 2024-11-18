import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { TonConnectUIProvider } from '@tonconnect/ui-react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import setTma from './shared/utils/setTma'
import App from './App'
import './styles/fonts.scss'
import './styles/variables.scss'
import './styles/global.scss'

setTma()

const domNode = document.getElementById('root')!
const root = createRoot(domNode)

root.render(
  <StrictMode>
    <QueryClientProvider client={new QueryClient()}>
      <TonConnectUIProvider manifestUrl={import.meta.env.VITE_MANIFEST_URL}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </TonConnectUIProvider>
    </QueryClientProvider>
  </StrictMode>
)