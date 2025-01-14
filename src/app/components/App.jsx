import { useEffect } from "react"

import { AppRouter } from "../routes/AppRouter"
import { 
  mountSwipeBehavior,
  unmountSwipeBehavior,
  disableVerticalSwipes,
} from "@telegram-apps/sdk-react"

function App() {
  useEffect(() => {
    mountSwipeBehavior()
    disableVerticalSwipes()

    return () => {
      unmountSwipeBehavior()
    }
  })

  return (
    <>
      <AppRouter/>
    </>
  )
}

export default App
