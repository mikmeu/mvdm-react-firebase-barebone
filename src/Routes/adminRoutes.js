import { Admin } from "../Pages/Admin";
import { AdminPageBuilder, AdminPageBuilderEdit } from "../Pages/Admin/AdminPageBuilder";

export const adminRoutes = [
    { 
      path: "/admin/*",
      component: Admin,
      routes: [
        {
            path: "pages/*",
            component: AdminPageBuilder,
            routes: [{
                path: ":id",
                component: AdminPageBuilderEdit
            }
            ]
        }
      ]
    }
  ];