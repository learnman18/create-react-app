import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import App from './App';
import { BrowserRouter} from 'react-router-dom';
import { Auth0Provider } from '@auth0/auth0-react';

// import MainRouting from './components/routing/MainRouter';
// import ErrorMsg from './components/routing/Error';
// import ChildOne from './components/routing/ChildOne';
// import Travel from './components/routing/Travel';


const root = ReactDOM.createRoot(document.getElementById('root'));
console.log("button is clicked");
root.render(
  <React.StrictMode>
    <Auth0Provider
    domain="dev-b647ji6lgbhuqoqr.us.auth0.com"
    clientId="ieTHJ9yjQ4ut55SVadikiQDEOgSLkSWH"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
    >
      <BrowserRouter>
      <App></App>
        {/* <Routes>
          <Route path='/' element={<MainRouting />}></Route>
          <Route path='travel' element={<Travel pageName='Travel'></Travel>}>
              <Route path='child-one' element={<ChildOne />}></Route>
          </Route>
            <Route element={<ErrorMsg></ErrorMsg>}></Route>
        </Routes> */}
      </BrowserRouter>
    </Auth0Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
