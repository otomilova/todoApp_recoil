import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { ChakraProvider } from '@chakra-ui/react'
import {RecoilRoot} from "recoil";
import SpinnerLoader from "./components/SpinnerLoader.jsx";


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <ChakraProvider>
          <RecoilRoot>

                  <React.Suspense fallback={<SpinnerLoader />}>
            <App />
                      </React.Suspense>

          </RecoilRoot>
      </ChakraProvider>
  </React.StrictMode>,
)
