import React from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter } from 'react-router-dom';
import './style/global.css';
import RangeProvider from './provider/RangeProvider';
import MainPage from './pages/LowerBodyPages/MainPage';
import FirstPage from './pages/LowerBodyPages/FirstPage';
import App from './pages/App';

ReactDOM.render(
  <React.StrictMode>
    <RangeProvider>
      <BrowserRouter>
        <Route exact path='/ExpGuide' component={App} />
        <Route exact path="/ExpGuide/BRP" component={FirstPage} />
        <Route path="/ExpGuide/BRP/main" component={MainPage} />
      </BrowserRouter>
    </RangeProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
