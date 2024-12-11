import { SearchProduct } from "../pages/SearchProduct/SearchProduct";
import { LogInPage } from "../pages/LogInPage/LogInPage";
import { TypeProductPage } from "../pages/TypeProductPage/TypeProductPage";
import { ProductDetailPage } from "../pages/ProductDetailPage/ProductDetailPage";
import { AdminPage } from "../pages/AdminPage/AdminPage";
import { HomePage } from "../pages/HomePage/HomePage";
import { SignUpPage } from "../pages/SignUpPage/SignUpPage";
import { ProductPage } from "../pages/ProductPage/ProductPage";
import { NotFoundPage } from "../pages/NotFoundPage/NotFoundPage";
import { SalesProduct } from "../pages/SalesProduct/SalesProduct";
import { MyOrderPage } from "../pages/MyOrderPage/MyOrderPage";
import { OrderSuccessPage } from "../pages/OrderSuccessPage/OrderSuccessPage";
import { PaymentPage } from "../pages/PaymentPage/PaymentPage";
import { ProfileUserPage } from "../pages/ProfileUserPage/ProfileUserPage";
export const routes = [
  {
    path: "/product-detail/:id",
    page: ProductDetailPage,
    isShowHeader: true,
    isShowFooter: false,
  },
  {
    path: "/profile-user",
    page: ProfileUserPage,
    isShowHeader: true,
    isShowFooter: false,
  },
  {
    path: "/payment",
    page: PaymentPage,
    isShowHeader: true,
    isShowFooter: false,
  },
  {
    path: "/my-order",
    page: MyOrderPage,
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

  {
    path: "/search-product",
    page: SearchProduct,
    isShowHeader: true,
    isShowFooter: false,
  },
  {
    path: "/product-sales",
    page: SalesProduct,
    isShowHeader: true,
    isShowFooter: false,
  },
  {
    path: "/product/:type",
    page: TypeProductPage,
    isShowHeader: true,
    isShowFooter: false,
  },
  {
    path: "/order-success",
    page: OrderSuccessPage,
    isShowHeader: true,
    isShowFooter: false,
  },
  {
    path: "*",
    page: NotFoundPage,
    isShowHeader: false,
  },
];
