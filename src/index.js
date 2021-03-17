import React from 'react'
import ReactDOM from 'react-dom'
import '../src/style/global.css'
import LowerBodyPage from './pages/LowerBodyPage'
import MainPage from './components/LowerBody/MainPage'

ReactDOM.render(
  <React.StrictMode>
    <MainPage />
  </React.StrictMode>,
  document.getElementById('root')
)
