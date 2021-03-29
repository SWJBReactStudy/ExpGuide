import React from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter } from 'react-router-dom';
import './style/global.css';
import RangeProvider from './provider/RangeProvider';
import MainPage from './pages/LowerBodyPages/MainPage';
import FirstPage from './pages/LowerBodyPages/FirstPage';
import App from './pages/App';
import wholeBodyPage from './components/WholeBody/wholeBodyPage';  //나중에 pages 폴더로 옯기기

ReactDOM.render(
  <React.StrictMode>
    <RangeProvider>
      <BrowserRouter>
        <Route exact path='/ExpGuide' component={App} /> {/*App is select page*/}

        <Route exact path='/ExpGuide/WholeBody' component={wholeBodyPage} />
        <Route exact path="/ExpGuide/BRP" component={FirstPage} />
        <Route path="/ExpGuide/BRP/main" component={MainPage} />
      </BrowserRouter>
    </RangeProvider> 
  </React.StrictMode>,
  document.getElementById('root'),
);
