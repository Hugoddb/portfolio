import { useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import Desktop from './components/desktop/Desktop'
import BootScreen from './components/desktop/BootScreen'

const shouldShowBoot = () => {
  if (window.location.hash) return false
  try {
    return !sessionStorage.getItem('booted')
  } catch {
    return true
  }
}

function App() {
  const [showBoot, setShowBoot] = useState(shouldShowBoot)

  const finishBoot = () => {
    try {
      sessionStorage.setItem('booted', '1')
    } catch {
    }
    setShowBoot(false)
  }

  return (
    <>
      <Desktop />
      <AnimatePresence>
        {showBoot && <BootScreen onDone={finishBoot} />}
      </AnimatePresence>
    </>
  )
}

export default App
