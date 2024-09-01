import router from './router'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { TonConnectUIProvider } from '@tonconnect/ui-react'
import { RouterProvider } from 'react-router-dom'
import './global.scss'

// TMA initial settings
Telegram.WebApp.ready()
Telegram.WebApp.expand()
Telegram.WebApp.disableVerticalSwipes()
Telegram.WebApp.setHeaderColor(Telegram.WebApp.themeParams.secondary_bg_color!)

const manifest = 'https://fa3c-2a00-1fa1-4e31-d22a-5061-f6f6-c2ed-6ce3.ngrok-free.app/tonconnect-manifest.json'

const domNode = document.getElementById('root')!
const root = createRoot(domNode)
root.render(
  <StrictMode>
    <TonConnectUIProvider manifestUrl={manifest}>
      <RouterProvider router={router} />
    </TonConnectUIProvider>
  </StrictMode>
)
