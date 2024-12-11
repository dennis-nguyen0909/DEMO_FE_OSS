import { AdminPage } from "../pages/AdminPage/AdminPage";
export const routes = [
    {
        path: '/system/admin',
        page: AdminPage,
        isShowHeader: false,
        isPrivate: true
    },
   
]