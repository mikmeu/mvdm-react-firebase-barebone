import { Home, Page, Subpage, Blog } from '../Pages';
import { Login, Register, ResetPassword } from '../Pages/Security';
export const routes = [
    { 
      path: "/",
      component: Home
    },
    { 
      path: "/blog",
      component: Blog
    },
    { 
      path: "/login",
      component: Login
    },
    { 
      path: "/register",
      component: Register
    },
    { 
      path: "/reset-password",
      component: ResetPassword
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