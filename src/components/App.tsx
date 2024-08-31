//import styles from './App.module.scss'
import Swap from './Swap/Swap'

export default function App() {
  const theme = Telegram.WebApp.themeParams

  return (
    <main>
      <Swap theme={theme}/>
    </main>
  )
}