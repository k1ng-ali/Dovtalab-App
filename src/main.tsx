import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {HashRouter} from "react-router-dom";
import './index.css'
import App from './App.tsx'
import {NotificationProvider} from "./NotificationProvider.tsx";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <NotificationProvider>
          <HashRouter>
              <App />
          </HashRouter>
      </NotificationProvider>
  </StrictMode>,
)
