import Home from "../pages/Home";
import Wishlist from "../pages/Wishlist";

interface RouteType {
    path: string;
    component: () => JSX.Element;
    name: string;
    protected: boolean
}

const routes: RouteType[] = [
    {
      path: "/",
      component: Home,
      name: "Home Screen",
      protected: false
    },
    {
      path: "/wishlist",
      component: Wishlist,
      name: "Wishlist",
      protected: true
    }
  ];
  

export default routes