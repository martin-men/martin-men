import ReactDOM from 'react-dom/client'
import { App } from './App.tsx'
import { GlobalContextProvider } from './GlobalContext.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <GlobalContextProvider>
    <App />
  </GlobalContextProvider>
)
