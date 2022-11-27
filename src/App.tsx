import './App.css'
import { AppUseContext } from './components/Application'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Helmet, HelmetProvider } from 'react-helmet-async'
import { createGlobalStyle } from 'styled-components'
import { theme } from './helpers/theme'

function App() {
  return (
    <HelmetProvider>
      <div>
        <Helmet>
          <script src='./app.html' type='text/javascript' async></script>
        </Helmet>
        <GlobalStyle />
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<AppUseContext />} />
          </Routes>
        </BrowserRouter>
      </div>
    </HelmetProvider>
  )
}

export default App

const GlobalStyle = createGlobalStyle`
  body {
    box-sizing: border-box;
    background-color: ${theme.background.backgroundColor};
    font-family: 'Montserrat', sans-serif;
    -ms-overflow-style: none;
    scrollbar-width: none;
  }
  body::-webkit-scrollbar {
    display: none;
  }
`
