import React, { useState, useEffect } from 'react'
import { Route, BrowserRouter } from 'react-router-dom'
import MainPage from '../components/LowerBody/MainPage'
import FirstPage from '../components/LowerBody/FirstPage'

const LowerBodyPage = () => {
  return (
    <BrowserRouter>
      <Route exact path="/" component={FirstPage} />
      <Route path="/main" component={MainPage} />
    </BrowserRouter>
  )
}

export default LowerBodyPage
