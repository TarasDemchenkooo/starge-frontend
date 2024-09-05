import router from './router'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import './global.scss'

// TMA initial settings
Telegram.WebApp.ready()
Telegram.WebApp.expand()
Telegram.WebApp.disableVerticalSwipes()
Telegram.WebApp.setHeaderColor(Telegram.WebApp.themeParams.secondary_bg_color!)
Telegram.WebApp.enableClosingConfirmation()

const domNode = document.getElementById('root')!
const root = createRoot(domNode)
root.render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)