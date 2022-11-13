import React from "react";
import { BrowserRouter } from 'react-router-dom';
import { Footer } from "./Layouts/Footer";
import { Header } from './Layouts/Header';
import Main from "./Layouts/Main/Main";
import 'react-toastify/dist/ReactToastify.css';
import SITE_INFO from "./constants/site-info";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <div className="App">
      <ToastContainer />
      <BrowserRouter>
        <div>
          <Header siteTitle={SITE_INFO.SITE_TITLE} siteLogo={SITE_INFO.SITE_LOGO} />
          <Main />
          <Footer siteTitle={SITE_INFO.SITE_TITLE} />
        </div>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
