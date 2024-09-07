import router from './router'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { TonConnectUIProvider } from '@tonconnect/ui-react'
import './global.scss'

// TMA initial settings
Telegram.WebApp.ready()
Telegram.WebApp.expand()
Telegram.WebApp.disableVerticalSwipes()
Telegram.WebApp.setHeaderColor(Telegram.WebApp.themeParams.secondary_bg_color!)
Telegram.WebApp.enableClosingConfirmation()

const manifest = 'https://f670-94-141-125-31.ngrok-free.app/tonconnect-manifest.json'

const domNode = document.getElementById('root')!
const root = createRoot(domNode)

root.render(
  <StrictMode>
    <TonConnectUIProvider manifestUrl={manifest}>
      <RouterProvider router={router} />
    </TonConnectUIProvider>
  </StrictMode>
)