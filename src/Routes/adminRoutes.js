import { Admin } from "../Pages/Admin";
import { AdminPageBuilder, AdminPageBuilderCreate, AdminPageBuilderEdit } from "../Pages/Admin/AdminPageBuilder";

export const adminRoutes = [
    { 
      path: "/admin/*",
      component: Admin,
      routes: [
        {
            path: "pages/*",
            component: AdminPageBuilder,
            routes: [
            {
              path: "create",
              component: AdminPageBuilderCreate
            },
            {
                path: ":id",
                component: AdminPageBuilderEdit
            }
            ]
        }
      ]
    }
  ];