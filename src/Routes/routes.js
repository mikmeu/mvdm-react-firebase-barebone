import { Home, Page, Subpage } from '../Pages';
export const routes = [
    { 
      path: "/",
      component: Home
    },
    { 
      path: "/test/*",
      component: Page,
      routes: [
        {
        path: ":page",
        component: Subpage
       } 
      ]
    }
  ];