import { Admin } from "../Pages/Admin";
import { AdminBlogs, AdminBlogsEdit } from "../Pages/Admin/AdminBlogs";

export const adminRoutes = [
    { 
      path: "/admin/*",
      component: Admin,
      routes: [
        {
            path: "blogs/*",
            component: AdminBlogs,
            routes: [{
                path: ":id",
                component: AdminBlogsEdit
            }
            ]
        }
      ]
    }
  ];