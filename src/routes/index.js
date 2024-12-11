import { LogInPage } from "../pages/LogInPage/LogInPage";
import { ProductDetailPage } from "../pages/ProductDetailPage/ProductDetailPage";
import { AdminPage } from "../pages/AdminPage/AdminPage";
import { HomePage } from "../pages/HomePage/HomePage";
import { SignUpPage } from "../pages/SignUpPage/SignUpPage";
import { ProductPage } from "../pages/ProductPage/ProductPage";
export const routes = [
  {
    path: "/product-detail/:id",
    page: ProductDetailPage,
    isShowHeader: true,
    isShowFooter: false,
  },
  {
    path: "/login",
    page: LogInPage,
    isShowHeader: false,
  },
  {
    path: "/",
    page: HomePage,
    isShowHeader: true,
    isShowFooter: true,
  },
  {
    path: "/system/admin",
    page: AdminPage,
    isShowHeader: false,
    isPrivate: true,
  },
  {
    path: "/sign-up",
    page: SignUpPage,
    isShowHeader: false,
  },
  {
    path: "/product",
    page: ProductPage,
    isShowHeader: true,
    isShowFooter: false,
  },
];
