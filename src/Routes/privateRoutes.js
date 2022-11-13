import { Account, ChangeEmail, ChangePassword, ChangeProfile } from "../Pages/Account";

export const privateRoutes = [
    { 
      path: "/account/*",
      component: Account,
      routes: [
        { 
          path: "change-email",
          component: ChangeEmail
        },
        { 
          path: "change-profile",
          component: ChangeProfile
        },
        { 
          path: "change-password",
          component: ChangePassword
        }
      ]
    }
  ];