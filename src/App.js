import React from "react";
import { BrowserRouter } from 'react-router-dom';
import { Footer } from "./Layouts/Footer";
import { Header } from './Layouts/Header';
import Main from "./Layouts/Main/Main";

import SITE_INFO from "./constants/site-info";

function App() {
  return (
    <div className="App">
      
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
